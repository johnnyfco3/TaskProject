<script setup lang="ts">
import { reactive, ref } from 'vue';
import { RouterLink } from 'vue-router';
import { cList } from '../models/categories';
import session from '../models/session';
import Homebar from '../components/Homebar.vue';
import Categories from '../components/Categories.vue';
import { tList } from '../models/tasks';

  const today = ref(new Date().toLocaleDateString('en-us', { weekday:"long", month:"long", day:"numeric"}));

  const total = {
    createdTasks: 0,
    completedTasks: 0
  }
  tList.map(t => {
    if(t.userID === session.user?.id){
      total.createdTasks++
    }
    if(t.userID === session.user?.id && t.completed){
      total.completedTasks++
    }
    return total
  })

</script>

<template>
<div id="overview">
    <header>
        <Homebar />
    </header>
    <main>
        <div class="container mb-6">
            <div class="top-content has-text-centered pt-6 pb-6">
                <h1 class="title"><span>Hello</span> {{session.user?.firstName}}</h1>
                <h1 class="subtitle">{{today}}</h1>
            </div>

            <hr>
            <nav class="level mt-2">
                <div class="level-item has-text-centered">
                <div>
                    <p class="heading">Created Tasks</p>
                    <p class="title">{{total.createdTasks}}</p>
                </div>
                </div>
                <div class="level-item has-text-centered">
                <div>
                    <p class="heading">Completed Tasks</p>
                    <p class="title">{{total.completedTasks}}</p>
                </div>
                </div>
            </nav>
            <hr>
            <div class="columns is-multiline pt-6">
                <div class="column">
                  <Categories />
                </div>
            </div>
            <div class="center pt-6">
                <router-link to="/add-category"><button class="button is-danger is-hovered pr-6 pl-6 pt-3 pb-3"><i class="fas fa-plus-circle" aria-hidden="true"></i>Add New Category</button></router-link>
            </div>
        </div>
    </main>
</div>
</template>

<style scoped>
#overview {
  background-image: url("../assets/images/slider-right-dec.jpg");
  background-size: cover;
}
.top-content .title {
  font-size: 3.3rem;
}
.top-content .title span {
  font-weight: 300;
}
.center {
  display: flex;
  justify-content: center;
}
.center button {
  border-radius: 4rem;
  font-size: 1.4rem;
}
@media screen and (max-width: 800px) {
  .top-content .title {
    font-size: 2rem;
  }
  .center button {
    border-radius: 4rem;
    font-size: 1.2rem;
  }
}
</style>
