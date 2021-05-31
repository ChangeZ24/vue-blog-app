# vue-blog-app
blog app

## 技术栈

- webpack：项目编译器。

- babel：es 语法转换，兼容低版本。

- eslint：代码质量检测。

- post-css：压缩样式，样式浏览器兼容性处理。

- sass：项目样式语法。

- Vue 3：js 框架。

- vue-loader：.vue 文件加载器。

- file-loader：文件加载器（图片、字体、媒体流等等）。

- url-loader：跟 file-loader 配置使用（图片、字体、媒体流等等）。

- html-webpack-plugin：自动注入打包后的资源文件到入口模版。

- webpack-dev-server：创建项目开发环境。

- css-loader：样式模块加载器。

- sass-loader：sass 文件加载器。

- postcss-loader：postcss 样式语法加载器。

- mini-css-extract-plugin：提取样式到单独的样式文件。

- @vue/babel-plugin-jsx：Vue 3 中支持 jsx 语法。

- eslint-loader：eslint 代码加载器。

- eslint-plugin-vue：Vue 官方提供的 eslint 插件。

- webpack-chain：webpack 配置语法糖。

## 目录结构

```
vue-blog-app
├── babel.config.js // babel 配置文件
├── .browserslistrc // 项目所支持的浏览器列表
├── .eslintignore // eslint 的忽略文件列表
├── .eslintrc.js // eslint 配置文件
├── package.json // 项目 npm 清单文件
├── postcss.config.js // postcss 配置文件
├── public // 静态公共资源目录
│   ├── favicon.png // 页面图标
│   └── index.html // 页面入口模版
├── src // 源码
│   ├── App.vue // app 根组件
│   ├── assets // 资源目录文件
│   │   └── style // 公共样式
│   │       ├── index.scss // 公共样式入口
│   │       └── reset.scss // reset 样式
│   └── main.js // 项目入口文件
└── webpack.config.js // webpack 配置文件
```