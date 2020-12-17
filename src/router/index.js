import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login.vue'
import Home from '../views/Home.vue'
import ListProduct from '../views/ListProduct.vue'
import AddProduct from '../views/AddProduct.vue'
import EditProduct from '../views/editProduct.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'products',
        name: 'ListProduct',
        component: ListProduct
      },
      {
        path: 'add',
        name: 'AddProduct',
        component: AddProduct
      },
      {
        path: 'edit/:id',
        name: 'EditPage',
        component: EditProduct
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
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
  else if (to.name === 'Login' && isAuthenticated) next({ name: 'ListProduct' })
  else next()
})

export default router
