<script setup lang="ts">
import Navbar from './components/Navbar.vue';

</script>

<template>
<div id="app">
  <Navbar />
  <router-view/>
</div>
</template>

<style>
*{
  scroll-behavior: smooth;
}
#app{
  background-image: url("./assets/images/slider-right-dec.jpg");
}
.container .heading1{
    font-size: 2.5rem;
    font-family: fantasy;
  }
</style>
