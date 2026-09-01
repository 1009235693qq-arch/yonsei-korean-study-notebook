# 延世韩国语 第一册 · 我的学习手册

这是一个无登录、无后端的个人韩语学习静态网站。内容数据与界面分离；第 1 课仅放入少量原创示例，第 2–10 课保留完整的小节数据骨架，方便替换为你有权使用或自行整理的材料。

## 启动与构建

需要 Python 3 或任意静态服务器。

```bash
npm run dev
# 在浏览器打开 http://localhost:5173
npm run build
npm test
```

`npm run dev` 使用 Python 的本地静态服务器，因此不需要安装第三方前端依赖。若 `python3` 命令不可用，使用 `python -m http.server 5173`。

## 添加课程内容

编辑 [src/data.js](src/data.js)：每个 `Lesson` 包含 `id`、`number`、`chineseName`、`koreanTopic`、`sections` 与 `allVocabulary`；每个小节包含语法、对话和词汇。所有韩语字段会自动获得独立的朗读按钮。第 2–10 课的 `emptySection` 是可直接替换的占位结构。

## 发音说明

朗读使用浏览器原生 Web Speech API 的 `SpeechSynthesisUtterance`，语言固定为 `ko-KR`。点击新句子会先停止旧句子；再次点击当前按钮会停止。浏览器的韩语语音由操作系统和浏览器提供，初次加载会异步检测；未检测到时会显示提示。部分浏览器需要在系统语音设置中安装韩语语音，或在用户点击后才允许播放。

## 插画

`public/images/irasutoya/lesson-placeholder.svg` 当前是清晰标记的本地占位插画，并非 Irasutoya 素材。请仅从 Irasutoya 官方网站下载、确认条款后，以对应课程的官方素材替换它（建议命名如 `lesson-01-greeting.png`），同时更新 `src/data.js` 的 `illustration` 路径。不要使用外链热链或第三方转载图。
