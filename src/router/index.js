import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginPage from '../views/LoginPage'
import AddProductPage from '../views/AddProductPage'
import EditProductPage from '../views/EditProductPage'
import MainPage from '../views/MainPage'
import ProductsCard from '../components/ProductsCard'
import NotFound from '../views/NotFound'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/',
    component: MainPage,
    children: [
      {
        path: '',
        name: 'ProductsCard',
        component: ProductsCard
      },
      {
        path: 'add',
        name: 'AddProductPage',
        component: AddProductPage
      },
      {
        path: 'edit/:idProduct',
        name: 'EditProductPage',
        component: EditProductPage
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
  if (to.name !== 'LoginPage' && !isAuthenticated) {
    next({ name: 'LoginPage' })
  } else if (to.name === 'LoginPage' && isAuthenticated) {
    next({ name: 'MainPage' })
  } else {
    next()
  }
})
export default router
