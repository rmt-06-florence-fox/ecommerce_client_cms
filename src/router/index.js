import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import MainPage from '../views/MainPage.vue'
import Product from '../views/Product.vue'
import AddProduct from '../views/AddProduct.vue'

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
        path: 'home',
        name: 'Home',
        component: Home
      },
      {
        path: 'product',
        name: 'Product',
        component: Product
      },
      {
        path: 'addProduct',
        name: 'AddProduct',
        component: AddProduct
      },
      {
        path: 'about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.access_token
  if (to.name !== 'Login' && !isAuthenticated) {
    next({ name: 'Login' })
  } else if (to.name === 'Login' && isAuthenticated) {
    next({ name: 'Home' })
  } else {
    next()
  }
})

export default router
