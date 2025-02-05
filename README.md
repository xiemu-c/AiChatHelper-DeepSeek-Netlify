# AiChatHelper-DeepSeek-Netlify
> [!WARNING]
> 由于DeepSeek近期遭受大规模网络攻击导致官方API无法访问，所以本项目暂时使用百度智能云API。

AiChatHelper-DeepSeek是一个微信助手 ChatGPT 反向代理项目，它可以使你的微信成为一个DeepSeek。

## 前提条件
1. Fork本项目
2. 注册Netlify账号



## 部署教程
1. 在 [Netlify](https://app.netlify.com) 上创建一个新Site(Add new site)。<br>
2. 点击弹出的窗口 "Import an existing project" 。<br>
3. Deploy with GitHub.<br>
4. 按提示授权 GitHub 到你的 Netlify。<br>
6. 选择你刚刚Fork的项目<br>
7. Deploy AiChatHelper-DeepSeek-Netlify
8. 等待部署完成，你将获得一个二级域名，这就是你的代理地址，记住它。（xxx.netlify.app；xxx可自定义，需要带上前缀https&#58;&#47;&#47;）

## 使用方法
以下操作都是在“微信助手”ChatGPT中操作：
1. 将你的代理地址填写到“代理地址”栏。（https&#58;&#47;&#47;xxx.netlify.app）
2. “APIKey”中填写对应的API Key，在“模型”中按下表选择或填写。
3. DeepSeek-R1 因为WeChat的字数限制，删除了推理过程，直接输出结果。

| AI      | APIKey | 模型     |
|    :----:   |    :----:   |    :----:   |
| DeepSeek-R1 | 百度智能云 API Key | 手动输入，填写：deepseek-r1 |
| DeepSeek-V3 | 百度智能云 API Key | 手动输入，填写：deepseek-v3 |

## 其他事项
- 如果遇到任何问题，请参考[Netlify 文档](https://docs.netlify.com)进行故障排除。
- 有关微信助手ChatGPT相关功能使用，请查看微信助手中的详细使用说明，或者在交流群里交流。

## 特别鸣谢
- 部分代码参考了懒猫提供的Gemini.zip，[懒猫插件交流](https://t.me/maogroup)
- 部分代码参考了GeekinGH的[AiChatHelper](https://github.com/GeekinGH/AiChatHelper)
- 部分代码参考了Simon's Blog：[simonmy.com](https://simonmy.com/posts/使用netlify反向代理google-palm-api.html)
