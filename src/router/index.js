import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import ContactView from '@/views/ContactView.vue'
import NewView from '@/views/NewView.vue'
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'About',
      component: AboutView
    },
    {
      path: '/projects',
      name: 'Processing',
      component: ProjectsView
    },
    {
      path: '/contact',
      name: 'Contact',
      component: ContactView
    },
    {
      path: '/new',
      name: 'Photography',
      component: NewView
    },
  ]
})

export default router
