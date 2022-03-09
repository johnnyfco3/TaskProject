<script setup lang="ts">
import { reactive, defineProps } from 'vue';
import { tList } from '../models/tasks';
import Homebar from '../components/Homebar.vue';
import session from '../models/session';
import router from '../router';

  const props = defineProps({
      id: Number
  })

  const task = tList.find(t => t.id == props.id)

  if(!task){
    throw {message: 'No task acquired for edit'}
  }
  
  const editTask = reactive({
            name: "",
            category: "",
            date: "",
            time: "",
            completed: false,
            important: false,
  })

  function handleSubmit(){
      // if(editTask){
      //       task.name = editTask.name,
      //       task.category = editTask.category,
      //       task.date = editTask.date,
      //       task.time = editTask.time,
      //       task.completed = false,
      //       task.important = editTask.important,
      //       task.userID = session.user?.id,
      //       task.id = tList.length + 1
      //     }
          router.push('/overview')
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
                            <select v-model="editTask.category" :placeholder="task.category">
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
                        <input class="input is-info" type="text" v-model="editTask.name" :placeholder="task.name">
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
                                <input class="input is-info" type="date" v-model="editTask.date" :placeholder="task.category">
                                </p>
                            </div>
                        </div>
                        <div class="field-label is-normal">
                            <label class="label">Time</label>
                        </div>
                        <div class="field-body">
                            <div class="field">
                              <p class="control is-expanded">
                                <input class="input is-info" type="time" v-model="editTask.time" :placeholder="task.time">
                              </p>
                            </div>
                        </div>
                      </div>
                      <div class="field is-horizontal mt-6">
                        <div class="field-body">
                            <div class="field">
                              <p class="control is-flex is-justify-content-center is-align-items-center">
                                <label class="label pr-3 pt-1" for="important">Completed?</label>
                                <input class="is-info" type="checkbox" v-model="editTask.completed" :checked="task.completed">
                              </p>
                            </div>
                        </div>
                        <div class="field-body">
                            <div class="field">
                              <p class="control is-flex is-justify-content-center is-align-items-center">
                                <label class="label pr-3 pt-1" for="important">Important?</label>
                                <input class="is-info" type="checkbox" v-model="editTask.important" :checked="task.important">
                              </p>
                            </div>
                        </div>
                      </div>
                        <label class="label pt-4">Assigned By</label>
                        <div class="control is-expanded">
                            <div class="select is-info select-section is-normal">
                                <select disabled>
                                  <option>{{task.assignedBy === null ? 'No one' : task.assignedBy}}</option>
                                </select>
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