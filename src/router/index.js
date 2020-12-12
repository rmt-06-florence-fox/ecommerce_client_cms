import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import dashboard from '../components/dashboard'
import addProduct from '../components/addProduct'
import editProduct from '../components/editProduct'
import categories from '../components/categories'
import banners from '../components/banner'
import users from '../components/users'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // name: 'Home',
    component: Home,
    meta: {
      title: 'Jam Tangen Ecommerce CMS'
    },
    children: [
      {
        path: '',
        redirect: 'dashboard' // default child path
      },
      {
        path: 'dashboard',
        name: 'dashboard',
        meta: {
          title: 'Jam Tangen Ecommerce CMS'
        },
        component: dashboard
      },
      {
        path: 'banners',
        name: 'banners',
        meta: {
          title: 'Jam Tangen Ecommerce CMS'
        },
        component: banners
        // children: [{
        //   path: '/add',
        //   name: 'addBanner',
        //   component: addBanner
        // }]
      },
      {
        path: 'users',
        name: 'users',
        meta: {
          title: 'Jam Tangen Ecommerce CMS'
        },
        component: users
      },
      {
        path: 'add-product',
        name: 'add-product',
        meta: {
          title: 'Jam Tangen Ecommerce CMS'
        },
        component: addProduct
      },
      {
        path: 'edit-product/:id',
        name: 'edit-product',
        meta: {
          title: 'Jam Tangen Ecommerce CMS'
        },
        component: editProduct
      },
      {
        path: 'categories',
        name: 'categories',
        meta: {
          title: 'Jam Tangen Ecommerce CMS'
        },
        component: categories
      }
    ]
  },
  {
    path: '/login',
    meta: {
      title: 'Jam Tangen Ecommerce CMS'
    },
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
