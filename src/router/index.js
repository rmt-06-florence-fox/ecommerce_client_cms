import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/LoginPage.vue'
import ListProducts from '../views/ListProducts.vue'
import AddProduct from '../views/AddProducts.vue'
import EditProduct from '../views/EditProduct.vue'
import MainPage from '../views/MainPage.vue'

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
        path: '/products',
        name: 'ListProducts',
        component: ListProducts
      },
      {
        path: '/add',
        name: 'AddProduct',
        component: AddProduct
      }
    ]
  },
  {
    path: '/edit/:id',
    name: 'EditProducts',
    component: EditProduct
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
  else if (to.name === 'Login' && isAuthenticated) next({ name: 'ListProducts' })
  else next()
})

export default router
