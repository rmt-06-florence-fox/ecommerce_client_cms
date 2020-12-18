import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import LoginPage from '../views/LoginPage.vue'
import FormEdit from '../views/FormEdit.vue'
import FormAddData from '../views/FormAdd.vue'
import PageNotFound from '../views/404.vue'
import Mainpage from '../views/MainPageAdmin.vue'
import FormCategory from '../views/AddCategory.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'login',
        name: 'LoginPage',
        component: LoginPage
      }
    ]
  },
  {
    path: '/mainpage',
    name: 'Mainpage',
    component: Mainpage
  },
  {
    path: '/additem',
    name: 'FormAddData',
    component: FormAddData
  },
  {
    path: '/edititem/:id',
    name: 'FormEdit',
    component: FormEdit
  },
  {
    path: '/category',
    name: 'Category',
    component: FormCategory
  },
  {
    path: '*',
    component: PageNotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
