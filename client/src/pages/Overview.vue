<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { useCategories } from '../models/categories';
import { useTasks } from '../models/tasks';
import session from '../models/session';
import Categories from '../components/Categories.vue';

  const today = ref(new Date().toLocaleDateString('en-us', { weekday:"long", month:"long", day:"numeric"}));

  const total = {
    createdTasks: 0,
    completedTasks: 0
  }

  const tasks = useTasks()
  tasks.fetchTasks()

  tasks.list.forEach(t => {
    if(t.user.email === session.user?.email){
      total.createdTasks++
    }
    if(t.user.email === session.user?.email && t.completed){
      total.completedTasks++
    }
    return total
  })

  const categories = useCategories()
  categories.fetchCategories()

</script>

<template>
<div id="overview">
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
                  <div v-for="(category, i) in categories.list" :key="i">
                    <Categories :category="category" :i="i"/>
                  </div>
                </div>
            </div>
            <div class="center pt-6">
                <router-link to="/add-category"><button class="button is-danger is-hovered pr-6 pl-6 pt-3 pb-3"><i class="fas fa-plus-circle" aria-hidden="true"></i>Add New Category</button></router-link>
            </div>
        </div>
    </main>
</div>
</template>

<style scoped lang="scss">
#overview {
  .top-content {
    .title {
      font-size: 3.3rem;
      span {
        font-weight: 300;
      }
    }
  }
  .center {
    display: flex;
    justify-content: center;
    button {
      border-radius: 4rem;
      font-size: 1.4rem;
    }
  }
}
@media screen and (max-width: 750px) {
  .top-content .title {
    font-size: 2rem;
  }
  .center button {
    border-radius: 4rem;
    font-size: 1.2rem;
  }
}
</style>
