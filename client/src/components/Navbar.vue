<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { Logout } from '../models/session';
import session from '../models/session';

  const isOpen = ref(false)

</script>

<template>
<header>
  <div class="container">
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <div class="navbar-start">
                    <a class="navbar-item">
                        <h1 class="title">Task it!</h1>
                    </a>
                </div>
        
            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" :class="{'is-active' : isOpen}" @click="isOpen = !isOpen">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
            </div>
        
            <div  v-if="session.user">
              <div class="navbar-menu" :class="{'is-active' : isOpen}" @click="isOpen = !isOpen">
                <div class="navbar-start">
                    <router-link to="/overview" class="navbar-item">
                    Home
                    </router-link>
                    
                    <router-link to="/add-tasks/false/null" class="navbar-item">
                    New Task
                    </router-link>
            
                    <router-link to="/friends" class="navbar-item">
                    Friends
                    </router-link>

                    <router-link to="/add-friends" class="navbar-item">
                    New Friend
                    </router-link>
                    
                    <a @click="Logout()" class="navbar-item">
                      Log out
                    </a> 
                </div>
              </div> 
            </div>
            <div class="navbar-menu" :class="{'is-active' : isOpen}" @click="isOpen = !isOpen" v-else>
              <div class="navbar-end">
                  <router-link to="/" class="navbar-item">
                  Home
                  </router-link>
          
                  <a class="navbar-item" href="#about">
                  About
                  </a>
                  
                  <router-link to="/register" class="navbar-item">
                  Register
                  </router-link>
                 
              </div>
            </div>
        </nav>
    </div>
</header>
</template>

<style scoped lang="scss">
header {
 h1 {
    font-family: fantasy;
    margin-top: 10%;
  }
  .navbar-item {
    font-size: 1.2rem;
    margin: 0 5%;
    padding-top: 3%;
  }
  .navbar-item:hover {
      background-color: white;
      color: red;
      transition: 0.3s ease;
    }
  .navbar-end{
    a {
      color: black;
    }
    a:hover {
      background-color: white;
      color: red;
      transition: 0.3s ease;
    }
  }
}
@media screen and (max-width: 800px) {
  header .title {
    font-size: 1.5rem;
    width: 100px;
  }
}
</style>
