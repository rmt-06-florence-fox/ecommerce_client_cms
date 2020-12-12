import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Product from '../views/Product.vue'
import MainPage from '../views/MainPage'
import FrontPage from '../views/FrontPage.vue'
import NotFound from '../views/NotFound'

Vue.use(VueRouter)

const routes = [
  {
    path: '/admin/products',
    name: 'Main Page',
    component: MainPage,
    children: [
      {
        path: '',
        name: 'Product',
        component: Product
      }
    ]
  },
  {
    path: '/',
    name: 'Front Page',
    component: FrontPage,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home
      },
      {
        path: '/products',
        name: 'Product',
        component: Product
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

export default router
