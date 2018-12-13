import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Courses from './views/Courses.vue'
import Players from './views/Players.vue'
import Game from './views/Game.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/courses',
      name: 'courses',
      component: Courses
    },
    {
      path: '/players',
      name: 'players',
      component: Players
    },
    {
      path: '/game',
      name: 'game',
      component: Game
    }
  ]
})
