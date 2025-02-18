import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import App from './App.vue'
import router from './router/router.js'
import "./tailwindcss.css"

const app = createApp(App)

//自动引入图标
Object.keys(ElementPlusIconsVue).forEach(key => {
  app.component(key, ElementPlusIconsVue[key])
})

app.use(createPinia())
app.use(router)
app.use(ElementPlus)


app.mount('#app')
