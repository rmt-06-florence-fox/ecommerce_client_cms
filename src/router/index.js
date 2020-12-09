import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginPage from '../views/LoginPage'
import AddProductPage from '../views/AddProductPage'
import EditProductPage from '../views/EditProductPage'
import MainPage from '../views/MainPage'
import ProductsCard from '../components/ProductsCard'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/',
    name: 'MainPage',
    component: MainPage,
    children: [
      {
        path: '/',
        name: 'ProductsCard',
        component: ProductsCard
      },
      {
        path: '/add',
        name: 'AddProductPage',
        component: AddProductPage
      },
      {
        path: '/edit/:idProduct',
        name: 'EditProductPage',
        component: EditProductPage
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
