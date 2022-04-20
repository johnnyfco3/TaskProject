<script setup lang="ts">
import { ref, defineProps } from 'vue';
import { RouterLink } from 'vue-router';
import { Category, useCategories } from '../models/categories';
import { useSession } from '../models/session';

  const session = useSession();
  const categories = useCategories()
  categories.fetchCategories()

  const { category } = defineProps<{ 
    category: Category 
    i: number 
    }>();

  async function remove(id:string){
    try{
      await categories.removeCategory(id)
    }catch(e){
      console.log(e)
    }
  }
    
</script>

<template>
<div id="categories">
    <div class="column">
      <div v-if="category.user === null || category.user.email === session.user.email">
            <div class="card has-text-centered">
              <a href="#"><i class="fa-solid fa-xmark remove" @click="remove(category._id)"></i></a>
              <router-link :to="`/tasks/${category.name}`" >
                <div class="card-content">
                    <h1 class="title"><i class="fa-solid fa-list icons" aria-hidden="true"></i> {{category.name}}</h1>
                </div>
              </router-link>
            </div>
        </div>
    </div>
</div>
</template>

<style scoped lang="scss">
.icons {
  color: rgb(129, 212, 129);
  margin-right: 1%;
}
.column {
  position: relative;
  .card {
    background-color: rgb(250, 246, 246);
    padding-bottom: 2%;
    .remove {
      position: absolute;
      font-size: 1.5rem;
      top: 15%;
      right: 2%;
      cursor: pointer;
      color: black
    }
    p {
      font-size: 1.2rem;
      font-weight: 100;
    }
  }
  a .card:hover {
    box-shadow: 8px 6px 6px lightgray;
  }
}
@media screen and (max-width: 750px) {
  header .title {
    font-size: 1.5rem;
    width: 100px;
  }
  .icons {
    font-size: 1.3rem;
  }
  .column {
    .card {
      margin: 0 5%;
      .remove{
        font-size: 1rem;
      }
      .title {
        font-size: 1.5rem;
      }
      p {
        font-size: 1rem;
      }
    }
  }
}
</style>