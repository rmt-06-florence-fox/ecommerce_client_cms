import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'
import MainPage from '../views/MainPage'
import Product from '../views/Product'
import Add from '../views/Add'
import Edit from '../views/Edit'
import NotFound from '../views/NotFound'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'MainPage',
    component: MainPage,
    children: [
      {
        path: 'products',
        name: 'product',
        component: Product
      },
      {
        path: 'add',
        name: 'Add',
        component: Add
      },
      {
        path: 'edit/:id',
        name: 'Edit',
        component: Edit
      }
    ]
  },
  {
    path: '*',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.access_token
  if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
  else if (to.name === 'Login' && isAuthenticated) next({ name: 'MainPage' })
  else next()
})

export default router
