<template>
  <div id="app">
    <Home></Home>
    <GamePage></GamePage>
  </div>
</template>

<script>
import Home from './components/Home.vue'
import GamePage from './components/GamePage.vue'


export default {
  components: {
    Home,
    GamePage
  }

}
</script>

<style media="screen">
html {
background: url(../assets/background.png) no-repeat center center fixed;
-webkit-background-size: cover;
-moz-background-size: cover;
-o-background-size: cover;
background-size: cover;
}
</style>
