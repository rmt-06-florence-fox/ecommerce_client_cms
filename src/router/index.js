import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import MainPage from '../views/MainPage.vue'
import PageNotFound from '../views/PageNotFound.vue'

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
        path: '',
        name: 'Home',
        component: Home
      },
      {
        path: 'products/add',
        name: 'AddProduct',
        component: () => import(/* webpackChunkName: "about" */ '../views/AddProduct.vue')
      },
      {
        path: 'banner',
        name: 'Banner',
        component: () => import(/* webpackChunkName: "about" */ '../views/Banner.vue')
      },
      {
        path: 'banner/add',
        name: 'AddBanner',
        component: () => import(/* webpackChunkName: "about" */ '../views/AddBanner.vue')
      },
      {
        path: 'products/:id',
        name: 'Detail',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Detail.vue')
      },
      {
        path: '*',
        component: PageNotFound
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
  if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
  else if (to.name === 'Login' && isAuthenticated) next({ name: 'MainPage' })
  else next()
})

export default router
