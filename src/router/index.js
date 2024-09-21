import { createRouter, createWebHistory } from 'vue-router'
import UseModel from '../views/UseModel.vue'
import DetailProcess from '../views/DetailProcess.vue'
import OurContribution from '../views/OurContribution.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: UseModel
  },
  {
    path: '/process',
    name: 'process',
    component: DetailProcess
  },
  {
    path: '/contribution',
    name: 'contribution',
    component: OurContribution
  },
  {
    path: '/404',
    name: '404',
    component: NotFound
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
