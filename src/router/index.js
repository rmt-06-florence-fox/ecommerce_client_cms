import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import LoginPage from '../views/LoginPage'
import AddProductPage from '../views/AddProductPage'
import EditProductPage from '../views/EditProductPage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/addproduct',
    name: 'AddProductPage',
    component: AddProductPage
  },
  {
    path: '/editproduct',
    name: 'EditProductPage',
    component: EditProductPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
