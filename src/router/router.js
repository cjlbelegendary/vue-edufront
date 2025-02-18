import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect:'/home',
    },
    {
      path: '/home',
      component:()=>import('../pages/home.vue')
    },
  ],
})

export default router
