import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import loginPage from '../views/Login.vue'
import banner from '../views/banner.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'loginPage',
    component: loginPage
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/banner',
    name: 'banner',
    component: banner
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
