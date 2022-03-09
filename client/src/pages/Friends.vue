<script setup lang="ts">
import { reactive } from 'vue';
import { RouterLink } from 'vue-router';
import FriendsList from "../components/FriendsList.vue";
import Homebar from '../components/Homebar.vue';

</script>

<template>
<div id="friends">
    <header>
        <Homebar />
    </header>

    <main class="container">
        <div class="list pt-6">
            <FriendsList />
        </div>

        <div class="center pt-6">
            <router-link to="/add-friends"><button class="button is-danger pr-6 pl-6 pt-3 pb-3"><i class="fas fa-plus-circle" aria-hidden="true"></i>Add New Friend</button></router-link>
        </div>
        
    </main>
</div>
</template>

<style scoped>
#friends {
  background-image: url("../assets/images/slider-right-dec.jpg");
  background-size: cover;
  height: 100vh;
}
.center {
  display: flex;
  justify-content: center;
  padding-bottom: 5%;
}
.center button {
  border-radius: 4rem;
  font-size: 1.4rem;
}
@media screen and (max-width: 800px) {
  header .level-left .fa-long-arrow-alt-left {
    position: absolute;
    top: 30px;
    left: 15px;
  }
  header .level-right {
    position: absolute;
    top: 15px;
    right: 15px;
  }
  header .level-center .title {
    font-size: 1.4rem;
  }
  header .level-center .subtitle {
    font-size: 1rem;
  }
  main .center {
    display: flex;
    justify-content: center;
    padding-bottom: 5%;
  }
  main .level-item {
    padding: 0 2%;
  }
  main .level-item .date {
    margin-bottom: 16px;
  }
  .center button {
    border-radius: 4rem;
    font-size: 1rem;
  }
}
</style>