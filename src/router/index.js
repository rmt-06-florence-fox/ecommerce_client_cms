import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import loginPage from '../views/Login.vue'
import banner from '../views/banner.vue'
import notFoundPage from '../views/404.vue'

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
  },
  {
    path: '*',
    component: notFoundPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'loginPage' && !localStorage.access_token) next({ path: '/' })
  else if (to.name === 'loginPage' && localStorage.access_token) next({ path: '/home' })
  else {
    next()
  }
})

export default router
