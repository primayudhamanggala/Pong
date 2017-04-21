<template>
  <div class="">
    <el-menu theme="dark" id="menu" mode="horizontal">
      <el-menu-item index="1"><img align="center" id="logo" src="../../assets/logo.png"></el-menu-item>
      <el-menu-item id="right" index="2" @click="loginForm = true">LOGIN</el-menu-item>
    </el-menu>

      <div style="padding: 10px;">
        <h1>REVISIT GREATEST RETRO GAME</h1>
        <img src="../../assets/gameplay.png" id="image" align="center">
      </div>

    <div id="news">
      <div v-for="(tweet, index) in $store.state.news" key="index">
        <el-card class="box-card">
          <div class="text item">
            {{ tweet }}
          </div>
        </el-card>
      </div>
    </div>



    <el-dialog title="Login Form" v-model="loginForm">
      <el-form :model="form">
        <el-form-item label="Username">
          <el-input v-model="form.username" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="Password">
          <el-input type="password" v-model="form.password" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <span><a @click="signupForm = true; loginForm = false">Click here to SIGN UP</a></span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="loginForm = false">Cancel</el-button>
        <el-button type="primary" @click="loginForm = false">Login</el-button>
      </span>
    </el-dialog>


    <el-dialog title="SIGN UP Form" v-model="signupForm">
      <el-form :model="form">
        <el-form-item label="Username">
          <el-input v-model="form.username" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="Password">
          <el-input type="password" v-model="form.password" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="signupForm = false">Cancel</el-button>
        <el-button type="primary" @click="signupForm = false; add(form)">Sign Up</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      loginForm: false,
      signupForm: false,
      form: {
          username: '',
          password: ''
      }
    }
  },
  methods: {
    ...mapActions([
      'add',
      'tweet'
    ]),
    login: (form) => {
      axios.post(`http://localhost:3000/players/signin`, form)
      .then((res) => {
        console.log('test');
        // localStorage.setItem('token', res.data)
      })
      .catch((err) => {
        // alert(err.message)
      })
    }
  },
  created(){
    this.$store.dispatch('tweet')
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Press+Start+2P');

  #right {
    float: right;
    color: #ffffff;
  }
  body {
    font-family: Helvetica;
  }
  h1 {
    text-align: center;
    font-family: 'Press Start 2P', cursive;
    color: #ffffff;
    color: #BA01FF;
    -webkit-animation: neon1 1.5s ease-in-out infinite alternate;
    -moz-animation: neon1 1.5s ease-in-out infinite alternate;
    -animation: neon1 1.5s ease-in-out infinite alternate;
  }
  #news {

  }
  #logo {
    width: 33%;
  }
  #menu {
    background-color: #1F2D3D;
  }
  #image {
    width: auto;
    padding-left: 13%;
    display: none;
  }

@-webkit-keyframes neon1 {
  from {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #FF1177, 0 0 70px #FF1177, 0 0 80px #FF1177, 0 0 100px #FF1177, 0 0 150px #FF1177;
  }
  to {
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #FF1177, 0 0 35px #FF1177, 0 0 40px #FF1177, 0 0 50px #FF1177, 0 0 75px #FF1177;
  }
}

@-moz-keyframes neon1 {
  from {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #FF1177, 0 0 70px #FF1177, 0 0 80px #FF1177, 0 0 100px #FF1177, 0 0 150px #FF1177;
  }
  to {
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #FF1177, 0 0 35px #FF1177, 0 0 40px #FF1177, 0 0 50px #FF1177, 0 0 75px #FF1177;
  }
}

@keyframes neon1 {
  from {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #FF1177, 0 0 70px #FF1177, 0 0 80px #FF1177, 0 0 100px #FF1177, 0 0 150px #FF1177;
  }
  to {
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #FF1177, 0 0 35px #FF1177, 0 0 40px #FF1177, 0 0 50px #FF1177, 0 0 75px #FF1177;
  }
}

@media (max-width: 650px) {
  #container {
    width: 100%;
  }
  p {
    font-size: 3.5em;
  }
}
</style>
