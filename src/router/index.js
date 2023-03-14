import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import about from '../views/about.vue'
import services from '../views/services.vue'
import portfolio from '../views/portofolio.vue'
import contact from '../views/contact.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: about
  },
  {
    path: '/services',
    name: 'services',
    component: services,
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: portfolio,
  },
  {
    path: '/contact',
    name: 'contact',
    component: contact,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
