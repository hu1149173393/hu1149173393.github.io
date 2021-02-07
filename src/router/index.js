import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/HelloWorld.vue'
Vue.use(VueRouter)
import fy from '../views/classify.vue'
import time from '../views/time.vue'
import aboutMe from '../views/about.vue'
const routes = [
  {
    path: '/Home',
    name: 'Home',
    component: Home,
  },
  {
    path:'/fy',
    name:'fy',
    component:fy
  },{
    path:'/time',
    name:'time',
    component:time
  },{
    path:'/aboutMe',
    name:'aboutMe',
    component:aboutMe
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
