<script setup lang="ts">
import TasksBar from "../components/TasksBar.vue";
import TaskList from "../components/TaskList.vue"

</script>

<template>
<div id="tasks">
    <header>
        <TasksBar />
    </header>

    <main class="container mt-6">
        <nav class="level mt-2">
            <!-- <div class="level-item has-text-centered">
                <p class="heading" v-on:click="activate(0)" v-bind:class="activeID === 0 ? 'active' : ''">All</p>
            </div>

            <div class="level-item has-text-centered">
                <p class="heading" v-on:click="activate(1)" v-bind:class="activeID === 1 ? 'active' : ''">Completed</p>
            </div>

            <div class="level-item has-text-centered">
                <p class="heading" v-on:click="activate(2)" v-bind:class="activeID === 2 ? 'active' : ''">Important</p>
            </div> -->
        </nav>
        <hr>

        <!-- <div class="list mt-6" v-for="task in Tasks" key="task.id">
            <TaskList />
        </div> -->
        <div class="center mt-6">
            <a href="AddTask.html"><button class="button is-danger pr-6 pl-6 pt-3 pb-3"><i class="fas fa-plus-circle" aria-hidden="true"></i>Add New</button></a>
        </div>
    </main>
</div>
</template>

<style scoped>
#tasks {
  background-image: url("../assets/images/slider-right-dec.jpg");
  background-size: cover;
}
main .level-item p:hover {
  color: red;
  transition: 0.3s;
  cursor: pointer;
}
main .level-item p {
  font-size: 1rem;
  color: black;
}
main .level-item .active {
  color: red;
  border-bottom: 2px solid red;
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
