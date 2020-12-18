import Vue from 'vue'
import VueRouter from 'vue-router'
import Admin from '../views/Admin.vue'
import Login from '../views/Login.vue'
import AddForm from '../views/AddForm.vue'
import EditForm from '../views/EditForm.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/admin',
    name: 'Admin Dashboard Page',
    component: Admin
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/addform',
    name: 'addform',
    component: AddForm
  },
  {
    path: '/edit/:id',
    name: 'editform',
    component: EditForm
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('access_token')
  if (to.name !== 'login' && !isAuthenticated) next({ name: 'login' })
  else next()
})

export default router
