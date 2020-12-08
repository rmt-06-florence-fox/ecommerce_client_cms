import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginAdmin from '../views/LoginAdmin.vue'
import ContentPage from '../views/ContentPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LoginAdmin',
    component: LoginAdmin
  },
  {
    path: '/home',
    name: 'ContentPage',
    component: ContentPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
