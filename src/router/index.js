import Vue from 'vue'
import VueRouter from 'vue-router'
import PageNotFound from '../views/PageNotFound.vue'
import CheckoutPage from '../views/CheckoutPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/checkout'
  },
  {
    path: '/checkout',
    name: 'checkout-page',
    component: CheckoutPage,
  },
  {
    path: '*',
    name: 'page-not-found',
    component: PageNotFound,
  }
]

const router = new VueRouter({
  routes
})

export default router
