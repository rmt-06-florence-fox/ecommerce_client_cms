import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AdminLogin from '../views/AdminLogin.vue'
import AddProduct from '../views/AddProduct.vue'
import EditProduct from '../views/EditProduct.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'addProduct',
        name: 'AddProduct',
        component: AddProduct
      },
      {
        path: 'editProduct/:id',
        name: 'EditProduct',
        component: EditProduct
      }
    ]
  },
  {
    path: '/adminLogin',
    name: 'AdminLogin',
    component: AdminLogin
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const authenticated = localStorage.access_token
  if (to.name !== 'AdminLogin' && !authenticated) next({ name: 'AdminLogin' })
  else if (to.name === 'AdminLogin' && authenticated) next({ next: 'Home' })
  else next()
})

export default router
