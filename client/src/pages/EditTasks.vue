<script setup lang="ts">
import { reactive, defineProps } from 'vue';
import { useCategories } from '../models/categories';
import { useSession } from '../models/session';
import { useTasks } from '../models/tasks';
import router from '../router';

  const session = useSession();
  const props = defineProps({
    name: String
  })

  const categories = useCategories()
  categories.fetchCategories()

  const tasks = useTasks()
  tasks.fetchTasks()
  const task = tasks.list.find(t => t.name == props.name)

  if(!task){
    throw {message: 'No task acquired for edit'}
  }
  
  const editTask = reactive({
    _id: task._id,
    name: task.name,
    category: task.category,
    details: task.details,
    date: task.date,
    time: task.time,
    completed: task.completed,
    important: task.important,
    assignedBy: task.assignedBy,
    user: session.user
  })

  function handleSubmit(){
    if(editTask){
      tasks.update(task._id, editTask)
      router.push('/overview')
    }
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
                            <option v-for="(category,i) in categories.list" :key="i">
                                {{category.user === null || category.user === session.user?.email ? category.name : null}}
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
                                <input class="input is-info" type="text" v-model="editTask.date" :placeholder="task.date">
                                </p>
                            </div>
                        </div>
                        <div class="field-label is-normal">
                            <label class="label">Time</label>
                        </div>
                        <div class="field-body">
                            <div class="field">
                              <p class="control is-expanded">
                                <input class="input is-info" type="text" v-model="editTask.time" :placeholder="task.time">
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
@media screen and (max-width: 750px) {
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