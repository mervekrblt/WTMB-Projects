import Vue from 'vue'
import VueRouter from 'vue-router'
import Meetups from '../views/Meetups.vue'
import Meetup from '../views/Meetup.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'meetups',
    component: Meetups
  },
  {
    path: '/meetup/:id',
    name: 'meetup',
    component: Meetup
  },
  {
    path: '/people',
    name: 'People',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/People.vue')
  },
  {
    path: '/person/:id',
    name: 'person',
    component: () => import(/* webpackChunkName: "about" */ '../views/Person.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
