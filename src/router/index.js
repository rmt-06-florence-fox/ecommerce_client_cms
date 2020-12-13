import Vue from 'vue'
import VueRouter from 'vue-router'
import AddProduct from '../views/AddProduct.vue'
import ListProducts from '../views/ListProducts.vue'
import EditProduct from '../views/EditProduct.vue'
import NotFound from '../views/NotFound.vue'
import MainPage from '../views/MainPage.vue'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
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
        path: 'products',
        name: 'ListProducts',
        component: ListProducts
      },
      {
        path: 'products/add',
        name: 'AddProduct',
        component: AddProduct
      },
      {
        path: 'products/edit/:id',
        name: 'EditProduct',
        component: EditProduct
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
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
  const isAuthenticated = localStorage.getItem('access_token')
  if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
  else if (to.name === 'Login' && isAuthenticated) next({ name: 'MainPage' })
  else next()
})

export default router
