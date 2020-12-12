import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import list from '../views/List.vue'
import product from '../views/Product.vue'
import AddForm from '../views/AddForm.vue'
import EditForm from '../views/EditForm.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/product',
    name: 'product',
    component: product,
    children: [
      {
        path: '/product',
        name: 'list',
        component: list
      },
      {
        path: '/add',
        name: 'add',
        component: AddForm
      },
      {
        path: '/edit',
        name: 'edit',
        component: EditForm
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
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
  else if (to.name === 'Login' && isAuthenticated) next({ name: 'Home' })
  else next()
})

export default router
