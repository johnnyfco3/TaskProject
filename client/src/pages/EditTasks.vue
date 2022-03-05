<script setup lang="ts">
import { reactive, defineProps } from 'vue';
import Homebar from '../components/Homebar.vue';

  const Tasks = reactive([
      { id: 1, name: "Call Supervisor", category: "Work Projects", date: "12th March", time: "10:30 am", completed: false },
      { id: 2, name: "Meeting with new team", category: "Work Projects", date: "17th March", time: "1:00 pm", completed: true }
  ])

  const props = defineProps({
      task: {
          type: Object,
          id: Number,
          name: String, 
          category: String, 
          date: String, 
          time: String, 
          completed: Boolean
      }
  })
  
  const editTask = reactive({
            name: "",
            category: "",
            date: "",
            time: ""
  })

  function handleSubmit(){
    //   if(edit){
    //       Tasks.push(
    //           {
    //             id: Tasks.length + 1,
    //             name: edit.name,
    //             category: edit.category,
    //             date: edit.date,
    //             time: edit.time,
    //             completed: false
    //           }
    //       )
    //       router.push('/overview')
    //   }
  }

</script>

<template>
<div id="edit-task">
    <header>
        <Homebar />
    </header>
    <main>
        <div class="container">
            <div class="center">
              <h1 class="title has-text-centered pt-6">Edit Task</h1>
                <form @submit.prevent="handleSubmit">
                    <label class="label pt-4">Select Category</label>
                    <div class="control">
                        <div class="select is-info select-section is-normal">
                            <select required v-model="editTask.category">
                            <option>Schedule Plan</option>
                            <option>Personal Errands</option>
                            <option>Work Projects</option>
                            <option>Grocery List</option>
                            <option>School</option>
                            </select>
                        </div>
                    </div>

                    <label class="label mt-2">New Task</label>
                    <div class="control has-icons-left task-title">
                        <input class="input is-info" type="text" required v-model="editTask.name">
                        <span class="icon is-small is-left">
                            <i class="fa-solid fa-pen"></i>
                        </span>
                    </div>
                
                    <div class="field is-horizontal mt-6">
                        <div class="field-label is-normal">
                            <label class="label">Date</label>
                        </div>
                        <div class="field-body">
                            <div class="field">
                                <p class="control is-expanded">
                                <input class="input is-info" type="date" required v-model="editTask.date">
                                </p>
                            </div>
                        </div>
                        <div class="field-label is-normal">
                            <label class="label">Time</label>
                        </div>
                        <div class="field-body">
                            <div class="field">
                              <p class="control is-expanded">
                                <input class="input is-info" type="time" required v-model="editTask.time">
                              </p>
                            </div>
                        </div>
                    </div>
                
                    <div class="center pt-6">
                        <button class="button is-danger pr-6 pl-6 pt-3 pb-3"><i class="fas fa-plus-circle" aria-hidden="true"></i> Add New</button>
                    </div>
                </form>
            </div>
        </div>
    </main>
</div>
</template>

<style scoped>
#edit-task {
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
@media screen and (max-width: 800px) {
  main form {
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
  main .field-label {
    padding-top: 5%;
  }
}
</style>