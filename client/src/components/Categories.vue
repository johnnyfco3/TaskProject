<script setup lang="ts">
import { defineProps } from 'vue';
import { RouterLink } from 'vue-router';

  const props = defineProps({
        categories: {
            type: Array,
        }
    })

</script>

<template>
<div id="categories">
    <div class="column" v-for="(category, i) in props.categories" v-bind:key="i">
        <router-link to="/tasks" v-bind:href="category.link">
            <div class="card has-text-centered">
                <div class="card-content">
                    <h1 class="title"><i class="fa-solid fa-list icons" aria-hidden="true"></i> {{category.name}}</h1>
                    <p>{{category.tasks}} tasks</p>
                </div>
            </div>
        </router-link>
    </div>
</div>
</template>

<style scoped>
.icons {
  color: rgb(129, 212, 129);
  margin-right: 1%;
}
.column .card {
  background-color: rgb(250, 246, 246);
}
.column .card p {
  font-size: 1.2rem;
  font-weight: 100;
}
.column a .card:hover {
  box-shadow: 8px 6px 6px lightgray;
}
@media screen and (max-width: 800px) {
  header .title {
    font-size: 1.5rem;
    width: 100px;
  }
  .icons {
    font-size: 1.3rem;
  }
  .column .card {
    margin: 0 5%;
  }
  .column .card .title {
    font-size: 1.5rem;
  }
  .column .card p {
    font-size: 1rem;
  }
}
</style>