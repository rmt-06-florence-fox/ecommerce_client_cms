import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import LoginPage from '../views/LoginPage.vue'
import ListProduct from '../views/ListProduct.vue'
import ListCategory from '../views/ListCategory.vue'
import ListBanner from '../views/ListBanner.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '*',
    component: NotFound
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: Dashboard
      },
      {
        path: 'products',
        name: 'ListProduct',
        component: ListProduct
      },
      {
        path: 'categories',
        name: 'ListCategory',
        component: ListCategory
      },
      {
        path: 'banners',
        name: 'ListBanner',
        component: ListBanner
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
  const isAuthenticated = localStorage.getItem('access_token')
  if (to.name !== 'LoginPage' && !isAuthenticated) {
    next({ name: 'LoginPage' })
  } else if (to.path === '/login' && isAuthenticated) {
    next({ name: 'Dashboard' })
  } else if (to.path === '/') {
    next({ name: 'Dashboard' })
  } else {
    next()
  }
})

export default router
