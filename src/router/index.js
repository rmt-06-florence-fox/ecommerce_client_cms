import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import LoginPage from '../views/LoginPage.vue'
import AddProductPage from '../views/AddProductPage.vue'
import EditProductPage from '../views/EditProductPage.vue'
import CartPage from '../views/CartPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Login',
    name: 'Login',
    component: LoginPage
  },
  {
    path: '/AddProduct',
    name: 'AddProduct',
    component: AddProductPage
  },
  {
    path: '/EditProduct',
    name: 'EditProduct',
    component: EditProductPage
  },
  {
    path: '/Cart',
    name: 'Cart',
    component: CartPage
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
