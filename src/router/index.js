import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductListView from '@/views/ProductListView.vue'
import ComptadorView from '@/views/ComptadorView.vue'
import UsuarisView from '@/views/UsuarisView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/exercici1',
      name: 'exercici1',
      component: ProductListView
    },
    {
      path: '/exercici2',
      name: 'exercici2',
      component: ComptadorView
    },
    {
      path: '/exercici3',
      name: 'exercici3',
      component: UsuarisView
    }
  ],
})

export default router
