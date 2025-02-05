import { Context } from "@netlify/edge-functions";
import DeepSeek from "./DeepSeek";

// 全局范围定义 supportedModels（支持的模型） 对象
const supportedModels = {
    'deepseek-r1': DeepSeek,
    'deepseek-v3': DeepSeek
};

// 全局范围定义 respondJsonMessage 函数
function respondJsonMessage(message) {
    const jsonMessage = {
        choices: [{
            message: {
                role: 'assistant',
                content: message,
            },
        }],
    };

    return new Response(JSON.stringify(jsonMessage), {
        headers: {
            "content-type": 'application/json; charset=utf-8',
        }
    });
}

export default async (request: Request, context: Context) => {
    try {
        const wxid = request.headers.get("wxid");
        if (!wxid) {
            throw new Error('您的请求不兼容于本服务');
        }
        
        let requestAuthorization = request.headers.get("authorization");
        if (!requestAuthorization) {
            throw new Error('请提供API鉴权码');
        }
        
        const requestBody = await request.json();
        let requestModel = requestBody.model.toLowerCase().trim();
        const requestMessages = requestBody.messages;
        const lastMessage = requestMessages[requestMessages.length - 1].content.trim();
        
        let response;
        const ModelClass = supportedModels[requestModel];
        if (ModelClass) {
            const modelInstance = new ModelClass(requestModel, requestAuthorization, requestMessages);
            response = await modelInstance.handleResponse(await getResponse(modelInstance.url, 'POST', modelInstance.headers, modelInstance.body));
            return respondJsonMessage(response);
        } else {
            return respondJsonMessage('不支持的 chat_model 类型');
        }
    } catch (error) {
        console.error('Error:', error); // 记录错误信息
        return respondJsonMessage(`出错了: ${error.toString()}`);
    }
}

async function getResponse(url, method, headers, body) {
    const response = await fetch(url, {
        method: method,
        headers: headers,
        body: JSON.stringify(body),
    });
    const responseData = await response.json();
    return responseData;
}
