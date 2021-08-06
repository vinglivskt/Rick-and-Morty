import Vue from 'vue'
import VueRouter from 'vue-router'
import RickAndMortyList from '../views/RickAndMortyList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'RickAndMortyList',
    component: RickAndMortyList
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
