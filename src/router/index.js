import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../components/login.vue'
import Products from '../views/products.vue'
import notFound from '../views/notFound.vue'
import mainPage from '../views/mainPage.vue'
import addProduct from '../components/addProduct.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'mainPage',
    component: mainPage,
    children: [
      {
        path: '',
        name: 'Products',
        component: Products
      },
      {
        path: 'products',
        name: 'addProducts',
        component: addProduct
      }
    ]
  },
  {
    path: '*',
    component: notFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.accesstoken
  if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
  else if (to.name === 'Login' && isAuthenticated) next({ name: 'Products' })
  else next()
})

export default router
