import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import dashboard from '../components/dashboard'
import addProduct from '../components/addProduct'
import editProduct from '../components/editProduct'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: dashboard
      },
      {
        path: 'add-product',
        name: 'add-product',
        component: addProduct
      },
      {
        path: 'edit-product/:id',
        name: 'edit-product',
        component: editProduct
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
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
  else if (to.name === 'Login' && isAuthenticated) next({ name: 'Home' })
  else next()
})

export default router
