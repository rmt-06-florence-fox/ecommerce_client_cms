import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import CreateProduct from '../views/CreateProduct.vue'
import ProductTable from '../views/ProductTable.vue'
import HomePage from '../views/HomePage.vue'
import EditProduct from '../views/EditProduct.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/',
        name: 'HomePage',
        component: HomePage
      },
      {
        path: '/login',
        name: 'Login',
        component: Login
      }
    ]
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    children: [
      {
        path: '/',
        name: 'ProductTable',
        component: ProductTable
      },
      {
        path: '/create',
        name: 'CreateProduct',
        component: CreateProduct
      }
    ]
  },
  {
    path: '/edit/:id',
    name: 'EditProduct',
    component: EditProduct
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.access_token
  if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
  else if (to.name === 'Home' && isAuthenticated) next({ name: 'Dashboard'})
  else next()
})
export default router
