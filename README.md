# 我的学习作品集

一个基于Next.js构建的个人学习作品集Web应用，集成了WakaTime API编码统计和QAnything AI问答服务。

## 项目简介

本项目运用本学期学习的HTML、CSS、JavaScript、React以及Next.js框架，构建了一个包含以下功能的综合性Web应用：

- 📚 **个人课程练习展示** - 展示本学期完成的各种编程练习和项目
- 📊 **WakaTime编码统计** - 实时显示编码时长和编程习惯统计
- 🤖 **QAnything AI问答** - 集成大语言模型提供智能问答服务

## 技术栈

- **前端框架**: Next.js 14 (App Router)
- **开发语言**: TypeScript
- **样式框架**: Tailwind CSS
- **API集成**: WakaTime API, QAnything API
- **部署**: Vercel (推荐)

## 项目结构
├── src/
│   ├── app/                    # Next.js App Router页面
│   │   ├── api/               # API路由
│   │   │   ├── wakatime/      # WakaTime API集成
│   │   │   └── qanything/     # QAnything API集成
│   │   ├── exercises/         # 课程练习页面
│   │   ├── qanything/         # AI问答页面
│   │   └── page.tsx           # 首页
│   └── components/            # React组件
│       ├── Layout.tsx         # 全局布局
│       ├── Navigation.tsx     # 导航组件
│       └── Footer.tsx         # 页脚组件(WakaTime显示)
├── .env.local                 # 环境变量
├── package.json
└── README.md


## QAnything集成实现

### 选择的集成路径

本项目选择了**自行开发API调用界面**的方式集成QAnything服务，而非简单的iframe嵌入。

**选择原因：**
1. **更好的用户体验** - 自定义界面可以与整体设计风格保持一致
2. **功能扩展性** - 可以添加聊天历史、消息管理等功能
3. **安全性** - API密钥在服务端管理，不会暴露给客户端
4. **响应式设计** - 可以针对不同设备优化界面布局

### 实现细节

1. **API路由设计** (`/api/qanything`)
   - 接收用户问题
   - 调用QAnything API
   - 返回AI回答

2. **前端界面** (`/qanything`)
   - 聊天式交互界面
   - 实时消息显示
   - 加载状态提示

## WakaTime API集成方法

### 环境变量配置

在`.env.local`文件中配置WakaTime API密钥：

```env
WAKATIME_API_KEY=waka_d9d1dc74-2dcb-439a-97c0-3dae1ad1bf74


### API实现
1. 服务端API路由 ( /api/wakatime )
   
   - 调用WakaTime API获取编码统计
   - 处理错误和异常情况
   - 返回格式化的数据
2. 前端显示 (Footer组件)
   
   - 页面加载时自动获取数据
   - 在页脚全局显示编码时长
   - 优雅的加载和错误状态处理
## 课程练习整合方式
### 组件化开发思想体现
1. Layout组件 - 提供统一的页面布局
2. Navigation组件 - 可复用的导航栏
3. Footer组件 - 集成WakaTime显示的页脚
4. 练习卡片组件 - 标准化的练习展示格式
### 路由结构
- /exercises - 练习列表页面
- /exercises/[id] - 具体练习详情页面
- 每个练习都有独立的路由和页面
