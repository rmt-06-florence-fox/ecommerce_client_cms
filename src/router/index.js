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
    path: '/dashboard',
    name: 'ContentPage',
    component: ContentPage
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('access_token')
  if (to.name !== 'LoginAdmin' && !isAuthenticated) next({ name: 'LoginAdmin' })
  else if (to.name === 'LoginAdmin' && isAuthenticated) next({ name: 'ContentPage' })
  else next()
})

export default router
