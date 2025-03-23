# vue-edufront


### 项目概述
项目使用 Vue 3 作为前端框架，Vite 作为构建工具，结合了多种前端库和插件，以实现一个功能丰富的教育前端应用。


## 访问地址
项目的访问地址为：https://cjlbelegendary.github.io/vue-edufront

## 项目安装

```sh
npm install
```

### 运行项目

```sh
npm run dev
```

### 构建项目

```sh
npm run build
```


### 主要依赖
项目依赖了以下主要库和插件：
- **Vue 相关**：
  - `vue`：Vue 3 核心库，版本为 `^3.5.13`。
  - `vue-router`：Vue 路由管理器，版本为 `^4.5.0`。
  - `pinia`：Vue 的状态管理库，版本为 `^3.0.1`。
  - `pinia-plugin-persistedstate`：Pinia 的持久化插件，版本为 `^4.2.0`。
  - `vue-lazyload-next`：Vue 的图片懒加载插件，版本为 `^0.0.2`。
- **UI 组件库**：
  - `element-plus`：基于 Vue 3 的 UI 组件库，版本为 `^2.9.4`。
  - `@element-plus/icons-vue`：ElementPlus 的图标库，版本为 `^2.3.1`。
- **网络请求**：
  - `axios`：用于发送 HTTP 请求，版本为 `^1.7.9`。
- **开发依赖**：
  - `@vitejs/plugin-vue`：Vite 的 Vue 插件，版本为 `^5.2.1`。
  - `vite`：快速构建工具，版本为 `^6.1.0`。
  - `tailwindcss`：实用类优先的 CSS 框架，版本为 `^3.4.17`。
  - `autoprefixer`：自动添加浏览器前缀的 PostCSS 插件，版本为 `^10.4.20`。
  - `mockjs`：用于生成模拟数据，版本为 `^1.1.0`。
  - `vite-plugin-mock`：Vite 的模拟数据插件，版本为 `^3.0.2`。
  - `vite-plugin-vue-devtools`：Vite 的 Vue 开发工具插件，版本为 `^7.7.2`。

### 项目结构
```
.gitignore
README.md
index.html
jsconfig.json
package-lock.json
package.json
postcss.config.js
tailwind.config.js
vite.config.js
public/
  favicon.ico
  icon.ico
.vscode/
  extensions.json
src/
  App.vue
  api/
  assets/
  components/
  main.js
  mock/
  pages/
  router/
  stores/
  tailwindcss.css
  utils/
dist/
  assets/
  favicon.ico
  icon.ico
  index.html
```
- **`public` 目录**：存放静态资源，如 `favicon.ico` 和 `icon.ico`。
- **`.vscode` 目录**：包含 VSCode 的扩展配置文件 `extensions.json`。
- **`src` 目录**：项目的源代码目录，包含以下子目录和文件：
  - `App.vue`：Vue 应用的根组件。
  - `api`：存放与后端 API 交互的代码。
  - `assets`：存放项目的静态资源，如图片、字体等。
  - `components`：存放 Vue 组件，例如 `CardContainer.vue`。
  - `main.js`：项目的入口文件。
  - `mock`：存放模拟数据的代码。
  - `pages`：存放应用的页面组件。
  - `router`：存放路由配置文件。
  - `stores`：存放状态管理相关的代码，如 `modal.js` 和 `user.js`。
  - `tailwindcss.css`：Tailwind CSS 的配置文件。
  - `utils`：存放工具函数。
- **`dist` 目录**：项目构建后的输出目录。

### 脚本命令
在 `package.json` 中定义了以下脚本命令：
- `npm run dev`：启动 Vite 开发服务器，支持热更新。
- `npm run build`：编译并压缩项目代码，用于生产环境。
- `npm run preview`：预览生产环境构建的项目。

### 技术栈
#### 前端框架与库
- **Vue 3**：采用组合式 API 进行组件开发，响应式系统提升了数据更新时的性能，让代码结构更清晰、逻辑更易复用。例如在 `src/stores/user.js` 中，使用 `ref` 和 `computed` 来创建响应式数据和计算属性。
- **Vue Router**：管理单页面应用的路由，实现不同页面间的切换。在 `src/router/router.js` 里定义路由规则，如 `component:()=>import('../pages/detail.vue')` 实现了按需加载组件。
- **Pinia**：作为状态管理库，用于管理应用的全局状态。`src/stores/user.js` 和 `src/stores/modal.js` 分别使用 `defineStore` 创建了用户状态和模态框状态的存储。
- **ElementPlus**：提供丰富的 UI 组件，加快开发速度。在 `src/main.js` 中引入并使用 `ElementPlus`，同时通过 `Object.keys(ElementPlusIconsVue).forEach` 自动引入图标。
- **Axios**：用于发送 HTTP 请求，与后端进行数据交互。`src/utils/request.js` 创建了一个 axios 实例，并设置了请求和响应拦截器。

#### 构建工具与插件
- **Vite**：快速的构建工具，支持热更新，提高开发效率。
- **Tailwind CSS**：实用类优先的 CSS 框架，在 `src/tailwindcss.css` 中使用 `@tailwind` 指令引入基础样式、组件样式和工具类样式。`postcss.config.js` 和 `tailwind.config.js` 对其进行配置。
- **Mockjs**：结合 `vite-plugin-mock`，在开发环境中模拟接口数据，减少对后端的依赖。在 `src/main.js` 中引入 `@/mock/index` 开启模拟数据功能。

### 项目亮点
#### 模块化设计
- 项目结构清晰，将不同功能模块分离。例如，`src/api` 目录存放与后端 API 交互的代码，`src/components` 目录存放可复用的组件，`src/pages` 目录存放页面组件。以 `src/pages/home.vue` 为例，它引入了多个组件，如 `Header`、`Classify`、`Swiper` 等，每个组件负责不同的功能，提高了代码的可维护性和复用性。
#### 响应式设计
- 使用 Tailwind CSS 实现响应式布局。在 `src/components/Card.vue` 中，通过 `@media` 媒体查询实现了在不同屏幕尺寸下的样式调整，如 `@media (max-width: 768px) {.course-card {width: 100%; max-width: 280px;}}`，确保应用在各种设备上都能提供良好的用户体验。
#### 状态持久化
- 通过 `pinia-plugin-persistedstate` 实现状态持久化。在 `src/stores/user.js` 中，`{ persist: true }` 配置使得用户状态在页面刷新时不会丢失，提升了用户体验。
#### 图片懒加载
- 使用 `vue-lazyload-next` 实现图片懒加载。在 `src/main.js` 中配置了懒加载的默认图片、加载失败图片、预加载比例和尝试加载次数，减少了页面初始加载时的资源消耗。

### 项目难点
#### Vue 3 组合式 API 学习成本
- Vue 3 的组合式 API 与传统的选项式 API 有较大差异，开发人员需要学习新的编程模式。例如，在 `src/stores/user.js` 中使用组合式 API 创建状态存储，需要理解 `defineStore`、`ref`、`computed` 等概念和用法。
#### 状态管理复杂度
- 随着项目规模的增大，状态管理变得复杂。在 `src/stores` 目录下有多个状态存储文件，如 `user.js` 和 `modal.js`，需要合理设计状态结构和管理逻辑，避免状态混乱和数据不一致问题。
#### 兼容性问题
- 不同浏览器对 CSS 和 JavaScript 的支持存在差异，需要处理兼容性问题。例如，在使用 Tailwind CSS 时，需要确保其生成的样式在各种浏览器中都能正常显示。
#### 性能优化
- 在处理大量数据和复杂交互时，需要进行性能优化。例如，使用图片懒加载、代码分割等技术，减少页面初始加载时间，提高应用的响应速度。
#### 接口联调
- 与后端接口联调时，可能会遇到数据格式不一致、接口响应慢等问题。在 `src/api/course.js` 中，通过 `request` 发送请求，需要与后端团队密切协作，确保数据的正确传输和处理。 
