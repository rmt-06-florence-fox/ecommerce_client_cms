import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import CreateProduct from '../views/CreateProduct.vue'
import EditProduct from '../views/EditProduct.vue'
import MainHome from '../views/MainHome.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    component: MainHome,
    children: [
      {
        path: 'home',
        name: 'Home',
        component: Home
      },
      {
        path: 'create',
        name: 'CreateProduct',
        component: CreateProduct
      },
      {
        path: 'edit/:id',
        name: 'EditProduct',
        component: EditProduct
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
