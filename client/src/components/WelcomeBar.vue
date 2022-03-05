<script setup lang="ts">
import { RouterLink } from 'vue-router'
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
        
            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
            </div>
        
            <div id="navbarBasicExample" class="navbar-menu">
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

<style scoped>
header {
  box-shadow: 0px 3px 5px rgb(226, 223, 223);
}
#welcome-bar h1 {
  font-family: fantasy;
  margin-top: 10%;
}
#welcome-bar .navbar-item {
  font-size: 1.2rem;
  margin: 0 5%;
}
#welcome-bar .navbar-end .navbar-item:hover {
  background-color: white;
  color: red;
  transition: 0.3s ease;
}
#welcome-bar .navbar-end a {
  font-size: 1.2rem;
  color: black;
}
#welcome-bar .navbar-end a:hover {
  color: red;
  transition: 0.3s ease;
}
@media screen and (max-width: 800px) {
  #welcome-bar .title {
    font-size: 1.5rem;
    width: 100px;
  }
}
</style>