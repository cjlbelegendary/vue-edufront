import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import App from './App.vue'
import router from './router/router.js'
import "./tailwindcss.css"
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import VueLazyloadNext from 'vue-lazyload-next';
import "../mock/index";

const app = createApp(App)

//自动引入图标
Object.keys(ElementPlusIconsVue).forEach(key => {
  app.component(key, ElementPlusIconsVue[key])
})

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)
app.use(ElementPlus)
app.use(VueLazyloadNext, {
  // 添加一些配置参数 可不填
  
  // 懒加载默认加载图片
  loading: '@/assets/images/loading.png',
  // 加载失败后加载的图片
  error: '@/assets/images/loadingfail.jpg',
  preLoad: 1.3, // 预加载高度的比例
  attempt: 3 // 尝试加载次数
});
app.mount('#app')
// console.log('请求')
// fetch("/api/users",{
//   method:"post"
// }).then(data=>{
//    console.log("data",data.json().data);
// }).catch(error=>{
//   console.log("error",error);
// })