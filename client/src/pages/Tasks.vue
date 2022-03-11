<script setup lang="ts">
import { ref, defineProps } from "vue";
import { tList } from "../models/tasks";
import { RouterLink } from "vue-router";
import TaskList from "../components/TaskList.vue";
import Homebar from "../components/Homebar.vue";

  const currentTab = ref('All')
  const today = ref(new Date().toLocaleDateString('en-us', { weekday:"long", month:"long", day:"numeric"}));

  const props = defineProps({
    category: String
  })

  function toggleCompleted(id:number){
        const task = tList.find(t => t.id === id)
        
        if(!task){
          throw {message: 'No task correspondence'}
        }

        return task.completed = !task.completed
    }
  function toggleImportant(id:number){
        const task = tList.find(t => t.id === id)
        
        if(!task){
          throw {message: 'No task correspondence'}
        }

        return task.important = !task.important
    }

</script>

<template>
<div id="tasks">
    <header>
        <Homebar />
    </header>

    <main class="container pt-6">
        <nav class="level pt-2">
            <div class="level-item has-text-centered">
                <p class="heading" :class="{ 'active': currentTab == 'All' }" @click=" currentTab = 'All' ">All</p>
            </div>

            <div class="level-item has-text-centered">
                <p class="heading" :class="{ 'active': currentTab == 'Completed' }" @click=" currentTab = 'Completed' ">Completed</p>
            </div>

            <div class="level-item has-text-centered">
                <p class="heading" :class="{ 'active': currentTab == 'Important' }" @click=" currentTab = 'Important' ">Important</p>
            </div>
            <div class="level-item has-text-centered">
                <p class="heading" :class="{ 'active': currentTab == 'Assigned' }" @click=" currentTab = 'Assigned' ">Assigned</p>
            </div>
            <div class="level-item has-text-centered">
                <p class="heading" :class="{ 'active': currentTab == 'Date' }" @click=" currentTab = 'Date' ">Date</p>
            </div>
        </nav>
        <hr>

        <div class="list pt-6">
            <TaskList :currentTab="currentTab" @toggleCompleted="toggleCompleted" @toggle-important="toggleImportant" :type="props.category"/>
        </div>
        <div class="center pt-6">
            <router-link to="/add-tasks/false/null" href="AddTask.html"><button class="button is-danger pr-6 pl-6 pt-3 pb-3"><i class="fas fa-plus-circle" aria-hidden="true"></i>Add New Task</button></router-link>
        </div>
    </main>
</div>
</template>

<style scoped lang="scss">
#tasks {
  background-image: url("../assets/images/slider-right-dec.jpg");
  background-size: cover;
  main {
    .level-item {
      p:hover {
        color: red;
        transition: 0.3s;
        cursor: pointer;
      }
      p {
        font-size: 1rem;
        color: black;
      }
      .active {
        color: red;
        border-bottom: 2px solid red;
      }
    }
  }
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
@media screen and (max-width: 800px) {
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
