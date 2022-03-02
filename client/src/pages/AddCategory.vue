<script setup lang="ts">
import { reactive, ref } from 'vue';
import AddBar from '../components/AddBar.vue';

  const categories = reactive([
      {name: "Schedule Plan", icon:"fas fa-calendar-alt", tasks: 57},
      {name: "Personal Errands", icon:"fas fa-user-alt", tasks: 7},
      {name: "Work Projects", icon:"fas fa-briefcase", tasks: 13},
      {name: "Grocery List", icon:"fas fa-shopping-cart", tasks: 0},
      {name: "School", icon:"fas fa-book", tasks: 6},
      {name: "Assigned", icon:"fa-solid fa-user-group", tasks: 0},
  ])
  
  const newCategory = reactive({
      name: ""
  })
  
  function handleSubmit(){
      if(newCategory.name){
          categories.push(
              {
                  name: newCategory.name,
                  icon: "none",
                  tasks: 0
              }
          )
          console.log(categories);
      }
  }

  const message = ref("Add New Task")

</script>

<template>
<div id="add-category">
    <header>
        <AddBar :message="message"/>
    </header>
    <main>
        <div class="container">
            <div class="center">
                <form @submit.prevent="handleSubmit">
                    <label class="label mt-6">Name of Category</label>
                    <div class="control has-icons-left task-title">
                        <input class="input is-info" type="text" required v-model="newCategory.name">
                        <span class="icon is-small is-left">
                            <i class="fa-solid fa-pen"></i>
                        </span>
                    </div>
                    
                    <div class="center mt-6">
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
