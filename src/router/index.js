import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import MainPage from '../views/MainPage'
import AddForm from '../components/AddForm'
import TableProducts from '../components/TableProducts'
import Page404 from '../components/Page404'
import EditForm from '../components/EditForm'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: '',
    component: MainPage,
    children: [
      {
        path: '/',
        name: 'Dashboard',
        component: TableProducts
      },
      {
        path: '/add',
        name: 'AddForm',
        component: AddForm
      },
      {
        path: '/edit/:id',
        name: 'EditForm',
        component: EditForm
      }
    ]
  },
  {
    path: '*',
    name: 'NotFound',
    component: Page404
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
  else next()
})

export default router
