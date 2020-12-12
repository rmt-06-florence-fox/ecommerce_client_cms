import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import MainPage from '../views/MainPage.vue'
import AddItem from '../views/AddItem.vue'
import EditItem from '../views/EditItem.vue'
import NotFoundPage from '../views/NotFound.vue'
import ProductList from '../views/ProductList.vue'

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
        path: 'additem',
        name: 'AddItem',
        component: AddItem
      },
      {
        path: 'edititem/:id',
        name: 'EditItem',
        component: EditItem
      },
      {
        path: 'products',
        name: 'ProductList',
        component: ProductList
      }
    ]
  },
  {
    path: '*',
    component: NotFoundPage
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
  else if (to.name === 'Login' && isAuthenticated) next({ name: 'MainPage' })
  else next()
})

export default router
