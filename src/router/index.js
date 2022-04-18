import Vue from 'vue'
import VueRouter from 'vue-router'

import IntroView from '../views/IntroView.vue'
import ExplorerView from '../views/ExplorerView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'intro',
    component: IntroView
  },
  {
    path: '/explorer',
    name: 'explorer',
    component: ExplorerView
  }
]

const router = new VueRouter({
  routes
})

export default router