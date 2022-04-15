<script setup lang="ts">
import { reactive, ref } from 'vue';
import { RouterLink } from 'vue-router';
import FriendsList from "../components/FriendsList.vue";
import session from '../models/session';
import { useUsers } from '../models/users';

const users = useUsers();
const user = users.getByEmail(session.user?.email)
const friendsList = ref(user?.friends)

</script>

<template>
<div id="friends">
    <main class="container">
        <div class="list pt-6">
          <div v-for="(friend,i) in friendsList" :key="i">
            <FriendsList :friend="friend" :i="i" />
          </div>
        </div>

        <div class="center pt-6">
            <router-link to="/add-friends"><button class="button is-danger pr-6 pl-6 pt-3 pb-3"><i class="fas fa-plus-circle" aria-hidden="true"></i>Add New Friend</button></router-link>
        </div>
        
    </main>
</div>
</template>

<style scoped lang="scss">
#friends {
  height: 100vh;
  .center {
    display: flex;
    justify-content: center;
    padding-bottom: 5%;
    button {
      border-radius: 4rem;
      font-size: 1.4rem;
    }
  }
}
@media screen and (max-width: 750px) {
  header {
    .level-left .fa-long-arrow-alt-left {
      position: absolute;
      top: 30px;
      left: 15px;
    }
    .level-right {
      position: absolute;
      top: 15px;
      right: 15px;
    }
    .level-center{
      .title {
        font-size: 1.4rem;
      }
      .subtitle {
        font-size: 1rem;
      }
    }
  }
  main {
    .center {
      display: flex;
      justify-content: center;
      padding-bottom: 5%;
      button {
        border-radius: 4rem;
        font-size: 1rem;
      }
    }
    .level-item {
      padding: 0 2%;
    }
  }
}
</style>