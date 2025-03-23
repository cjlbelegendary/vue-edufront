import { createRouter, createWebHistory,createWebHashHistory } from 'vue-router'

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect:'/home',
    },
    {
      path: '/home',
      component:()=>import('../pages/home.vue')
    },
    {
      path: '/detail',
      component:()=>import('../pages/detail.vue')
    },
    
  ],
})

export default router
