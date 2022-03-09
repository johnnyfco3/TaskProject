<script setup lang="ts">
import { RouterLink } from 'vue-router';
import session from '../models/session';
import { list } from '../models/users'

const friends = list.find(u => u.id === session.user?.id)

  function remove(index:number){
    friends?.friends.splice(index, index)
  }

</script>

<template>
<div class="list">
  <div class="friend" v-for="(friend,i) in friends?.friends" v-bind:key="i">
    <div class="card">
        <div class="card-content">
        <div class="content is-flex is-justify-content-space-between">
                <div class="left is-flex">
                    <i class="fa-solid fa-user pr-5"></i>
                    <p class="subtitle">{{friend}}</p>
                </div>
                <div class="icons is-flex">
                    <router-link to="/add-tasks"><i class="fa-solid fa-plus"></i></router-link>
                    <a href="#"><i class="fa-solid fa-trash-can" @click="remove(i)"></i></a>
                </div>
        </div>
        </div>
    </div>
  </div>
</div>
</template>

<style scoped>
#friends .list .card {
  margin: 2% 10%;
  width: 80%;
}
#friends main .content .left {
  width: 40%;
  align-items: center;
  font-size: 2rem;
}
#friends main .content .left p {
  font-size: 1.2rem;
  font-weight: 400;
}
#friends main .content .icons {
  padding: 0 5%;
}
#friends main .content .icons a {
  padding: 0 40%;
  font-size: 1.3rem;
  color: black;
}
#friends main .content .icons a:hover {
  font-size: 1.5rem;
  color: red;
  transition: 0.3s;
}
@media screen and (max-width: 800px) {
  #friends .list .card {
    margin: 2% 5%;
    width: 90%;
  }
  #friends main .content .left {
    width: 100%;
    align-items: center;
    font-size: 1rem;
  }
  #friends main .content .left p {
    font-size: 1rem;
  }
  #friends main .content .icons {
    padding: 0 10%;
  }
  #friends main .content .icons a {
    padding: 0 40%;
    font-size: 1rem;
  }
  #friends main .content .icons a:hover {
    font-size: 1.2rem;
  }
}
</style>
