<script setup lang="ts">
import { reactive } from 'vue';
import { useSession } from '../models/session';
import router from '../router';

  const session = useSession();
  
  const newCategory = reactive({
    name: "",
    user: session.user?.email
  })
  
  async function handleSubmit(){
    try{
      await session.api('categories', newCategory)
      router.push('/overview')
    }catch(e){
      console.log(e)
    }
  }

</script>

<template>
<div id="add-category">
    <main>
        <div class="container">
            <div class="center">
              <h1 class="title heading1 has-text-centered pt-6">Add New Category</h1>
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

<style scoped lang="scss">
#add-category {
  height: 100vh;
  main {
    form {
      text-align: center;
      margin: 0 2%;
      .task-title {
        margin: 0 20%;
        margin-bottom: 2%;
      }
    }
    .center button {
        border-radius: 4rem;
        font-size: 1.4rem;
    }
  }
}
@media screen and (max-width: 750px) {
 form {
    text-align: center;
    margin: 0 10%;
    .task-title {
      margin: 0 5%;
    }
 }
  main {
    .center button {
      border-radius: 4rem;
      font-size: 1rem;
    }
    .control label {
      font-size: 1rem;
    }
  }
}
</style>
