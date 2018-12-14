import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Courses from './views/Courses.vue'
import Players from './views/Players.vue'
import Games from './views/Games.vue'
import NewGame from './views/NewGame.vue'
import Course from './views/Course.vue'
import AddCourse from './views/AddCourse.vue'

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
      path: '/games',
      name: 'games',
      component: Games
    },
    {
      path: '/startgame',
      name: 'newgame',
      component: NewGame
    },
    {
      path: '/course/:id',
      name: 'course',
      component: Course
    },
    {
      path: '/courses/add',
      name: 'addcourse',
      component: AddCourse
    }
  ]
})
