<script setup lang="ts">
import { reactive, defineProps } from 'vue';
import { tList } from '../models/tasks';
import { cList } from '../models/categories';
import session from '../models/session';
import router from '../router';

  const props = defineProps({
      name: String
  })

  const task = tList.find(t => t.name == props.name)

  if(!task){
    throw {message: 'No task acquired for edit'}
  }
  
  const editTask = reactive({
            name: "",
            category: "",
            details: "",
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
    <main>
        <div class="container">
            <div class="center">
              <h1 class="title heading1 has-text-centered pt-6">Edit Task</h1>
                <form @submit.prevent="handleSubmit">
                    <label class="label pt-4">Select Category</label>
                    <div class="control">
                        <div class="select is-info select-section is-normal">
                            <select v-model="editTask.category">
                            <option disabled>{{task.category}}</option>
                            <option v-for="(category,i) in cList" :key="i">
                                {{category.userID === null || category.userID === session.user?.id ? category.name : null}}
                              </option>
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

                    <label class="label mt-2">Details</label>
                    <textarea class="textarea is-info" v-model="editTask.details" :placeholder="task.details"></textarea>
                
                    <div class="field is-horizontal mt-6">
                        <div class="field-label is-normal">
                            <label class="label">Date</label>
                        </div>
                        <div class="field-body">
                            <div class="field">
                                <p class="control is-expanded">
                                <input class="input is-info" type="date" v-model="editTask.date">
                                </p>
                            </div>
                        </div>
                        <div class="field-label is-normal">
                            <label class="label">Time</label>
                        </div>
                        <div class="field-body">
                            <div class="field">
                              <p class="control is-expanded">
                                <input class="input is-info" type="time" v-model="editTask.time">
                              </p>
                            </div>
                        </div>
                      </div>
                      <div class="field is-horizontal mt-6">
                        <div class="field-body">
                            <div class="field">
                              <p class="control is-flex is-justify-content-center is-align-items-center">
                                <label class="label pr-3 pt-1" for="important">Completed?</label>
                                <input class="is-info" type="checkbox" v-model="editTask.completed">
                              </p>
                            </div>
                        </div>
                        <div class="field-body">
                            <div class="field">
                              <p class="control is-flex is-justify-content-center is-align-items-center">
                                <label class="label pr-3 pt-1" for="important">Important?</label>
                                <input class="is-info" type="checkbox" v-model="editTask.important">
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

                    <div class="center pt-6 pb-5">
                        <button class="button is-danger pr-6 pl-6 pt-3 pb-3">Submit Changes</button>
                    </div>
                </form>
            </div>
        </div>
    </main>
</div>
</template>

<style scoped lang="scss">
#edit-task {
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
@media screen and (max-width: 800px) {
  main {
    form {
      text-align: center;
      margin: 0 10%;
      .task-title {
        margin: 0 5%;
      }
      .textarea {
        width: 100%;
      }
    }
    .center button {
      border-radius: 4rem;
      font-size: 1rem;
    }
    .control label {
      font-size: 1rem;
    }
    .field-label {
      padding-top: 5%;
    }
  }
}
</style>