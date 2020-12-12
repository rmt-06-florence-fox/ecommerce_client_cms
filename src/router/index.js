import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login-Page'
import MainPage from '../views/MainPage'
import AddForm from '../views/Add-Page'
import UpdateForm from '../views/Update-Page'
import Product from '../views/Product'
import NotFoundPage from '../views/Page404'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/main-page',
    name: 'Main Page',
    component: MainPage,
    children: [
      {
        path: 'addform',
        name: 'Add From',
        component: AddForm
      },
      {
        path: 'product',
        name: 'Product',
        component: Product
      },
      {
        path: 'update-product/:idProduct',
        name: 'Update Form',
        component: UpdateForm
      }
    ]
  },
  {
    path: '*',
    name: 'NotFoundPage',
    component: NotFoundPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('access_token')

  if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
  else if (to.name === 'Login' && isAuthenticated) next({ name: 'Main Page' })
  else next()
})

export default router
