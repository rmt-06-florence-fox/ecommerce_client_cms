import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Admin from '../views/Admin.vue'
import Login from '../views/Login.vue'
import AddForm from '../views/AddForm.vue'
import EditForm from '../views/EditForm.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/admin',
    name: 'Admin Dashboard Page',
    component: Admin
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/addform',
    name: 'addform',
    component: AddForm
  },
  {
    path: '/edit/:id',
    name: 'editform',
    component: EditForm
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
