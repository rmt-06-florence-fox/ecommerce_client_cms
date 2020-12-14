import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Homepage')
  },
  {
    path: '/banner',
    name: 'Banner',
    component: () => import('../views/Bannerpage')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login')
  },
  {
    path: '/add-product',
    name: 'AddPage',
    component: () => import('../components/AddForm')
  },
  {
    path: '/edit-product/:id',
    name: 'EditProduct',
    component: () => import('../components/EditForm')
  },
  {
    path: '/add-banner',
    name: 'AddPageBanner',
    component: () => import('../components/AddFormBanner')
  },
  {
    path: '/edit-banner/:id',
    name: 'EditBanner',
    component: () => import('../components/EditFormBanner')
  },
  {
    path: '/search-results/:category',
    name: 'SearchResults',
    component: () => import('../components/SearchResults')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && !localStorage.access_token) next({ name: 'Login' })
  else if (to.name === 'Login' && localStorage.access_token) next({ name: 'Home' })
  else {
    next()
  }
})

export default router
