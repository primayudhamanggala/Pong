import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/Home.vue'
import GamePage from '../components/GamePage.vue'

Vue.use(Router)

export default new Router({
  router: [
    {
      path: '/',
      components: Home
    },
    {
      path: '/pong',
      name: 'pong',
      components: GamePage
  }
  ]
})
