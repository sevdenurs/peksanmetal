import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '@/views/ContactView.vue'
import GaleryView from '@/views/GaleryView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/galeri',
      name: 'galeri',
      component: () => import('../views/GaleryView.vue'),
    },
    {
      path: '/iletisim',
      name: 'iletisim',
      component: ContactView,
    }
  ],
})

export default router
