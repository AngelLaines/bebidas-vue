import InicioView from '@/views/InicioView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name:'inicio',
      component:InicioView
    },
    {
      path:'/favoritos',
      name:'favoritos',
      component:()=>import('../views/FavoritosView.vue')
    },
  ]
})

export default router
