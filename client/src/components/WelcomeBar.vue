<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router'

  const isOpen = ref(false);

</script>

<template>
<div id="welcome-bar">
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
        
            <div class="navbar-menu" :class="{'is-active' : isOpen}" @click="isOpen = !isOpen">
            <div class="navbar-end">
                <router-link to="/" class="navbar-item">
                Home
                </router-link>
        
                <a class="navbar-item" href="#about">
                About
                </a>
                <div class="navbar-item">
                    <router-link to="/register">
                    Register
                    </router-link>
                </div>
            </div>
            </div>
        </nav>
  </div>
  </header>
</div>
</template>

<style scoped lang="scss">
header {
  box-shadow: 0px 3px 5px rgb(226, 223, 223);
}
#welcome-bar {
  h1 {
    font-family: fantasy;
    margin-top: 10%;
  }
  .navbar-item {
    font-size: 1.2rem;
    margin: 0 5%;
  }
  .navbar-end {
    .navbar-item:hover {
      background-color: white;
      color: red;
      transition: 0.3s ease;
    }
    a {
      font-size: 1.2rem;
      color: black;
    }
    a:hover {
      color: red;
      transition: 0.3s ease;
    }
  }
}
@media screen and (max-width: 800px) {
  #welcome-bar .title {
    font-size: 1.5rem;
    width: 100px;
  }
}
</style>