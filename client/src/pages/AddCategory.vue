<script setup lang="ts">
import { reactive } from 'vue';
import { cList } from '../models/categories';
import session from '../models/session';
import router from '../router';
import Homebar from '../components/Homebar.vue';
  
  const newCategory = reactive({
      name: ""
  })
  
  function handleSubmit(){
      if(newCategory.name){
          cList.push(
              {
                  name: newCategory.name,
                  total: 0,
                  userID: session.user?.id,
                  id: cList.length + 1
              }
          )
          router.push('/overview')
      }
  }

</script>

<template>
<div id="add-category">
    <header>
        <Homebar />
    </header>
    <main>
        <div class="container">
            <div class="center">
              <h1 class="title has-text-centered pt-6">Add New Category</h1>
                <form @submit.prevent="handleSubmit">
                    <label class="label pt-4">Name of Category</label>
                    <div class="control has-icons-left task-title">
                        <input class="input is-info" type="text" required v-model="newCategory.name">
                        <span class="icon is-small is-left">
                            <i class="fa-solid fa-pen"></i>
                        </span>
                    </div>
                    
                    <div class="center pt-6">
                        <button class="button is-danger pr-6 pl-6 pt-3 pb-3"><i class="fas fa-plus-circle" aria-hidden="true"></i>Add New</button>
                    </div>
                </form>
            </div>
        </div>
    </main>
</div>
</template>

<style scoped>
#add-category {
  background-image: url("../assets/images/slider-right-dec.jpg");
  background-size: cover;
  height: 100vh;
}
.container .title{
  font-size: 2.5rem;
  font-family: fantasy;
}
main form {
  text-align: center;
  margin: 0 2%;
}
main form .task-title {
  margin: 0 20%;
  margin-bottom: 2%;
}
main .center button {
  border-radius: 4rem;
  font-size: 1.4rem;
}
main .center .file {
  display: flex;
  justify-content: center;
}
@media screen and (max-width: 800px) {
 form {
    text-align: center;
    margin: 0 10%;
  }
  main form .task-title {
    margin: 0 5%;
  }
  main .center button {
    border-radius: 4rem;
    font-size: 1rem;
  }
  main .control label {
    font-size: 1rem;
  }
}
</style>
