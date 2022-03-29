<script setup lang="ts">
import { reactive, defineProps, ref } from 'vue';
import { tList } from '../models/tasks';
import { list } from '../models/users';
import { cList } from '../models/categories';
import router from '../router';
import session from '../models/session';

const props = defineProps({
  assign: String,
  email: String,
  category: String,
})

let user:any;

if(props.assign === "true"){
  user = list.find(u => u.email === props.email)
}
  
  const newTask = reactive({
            name: "",
            details: "",
            category: "",
            date: "",
            time: "",
            important: false,
            assignTo: props.assign === "true" ? user.email : null
  })

  function getUser(email:String){
    const getUser = list.find(u => u.email === email)

    if(getUser){
      return getUser.id
    }
    else{
      throw {message: 'Could not find user in getUser'}
    }
  }

  function confirmAddition(name:string){
    let id = props.assign === "true" ? user.id : session.user?.id
    const check = tList.find(t => t.name === name && t.userID === id)
    if(check){
      if(!check.completed){
        return false
      }
      return true
    }
  }

  function convertTime(time:string){
    let hour = time.substring(0,2)
    let min = time.substring(3,5)
    let revisedTime = parseInt(hour)
    if(revisedTime > 12 && revisedTime < 24){
      revisedTime -= 12
      hour = revisedTime.toString()
      time = `${hour}:${min}pm`
    }
    else if(revisedTime === 24){
      revisedTime -= 12
      hour = revisedTime.toString()
      time = `${hour}:${min}am`
    }
    else{
      time = `${hour}:${min}am`
    }
    return time
  }

  function handleSubmit(){
      if(newTask){
          if(!confirmAddition(newTask.name)){
            throw { message: "There's an existing Task with the same Task name that has not yet been completed." }
          }
          else{
            tList.push(
              {
                id: tList.length + 1,
                name: newTask.name,
                details: newTask.details,
                category: newTask.category,
                date: newTask.date,
                time: convertTime(newTask.time),
                completed: false,
                important: newTask.important,
                assignedBy: newTask.assignTo === null ? null : session.user?.id,
                userID: newTask.assignTo === null ? session.user?.id : getUser(newTask.assignTo)
              }
            )
            router.push('/overview')
        }
      }
  }

</script>

<template>
<div id="add-task">
    <main>
        <div class="container">
            <div class="center">
              <h1 class="title heading1 has-text-centered pt-6">Add New Task</h1>
                <form @submit.prevent="handleSubmit">
                    <label class="label pt-4">Select Category</label>
                    <div class="control">
                        <div class="select is-info select-section is-normal">
                            <select required v-model="newTask.category">
                              <option selected>{{props.category !== 'null' ? props.category : ""}}</option>
                              <option v-for="(category,i) in cList" :key="i">
                                {{category.name !== props.category && (category.userID === null || category.userID === session.user?.id) ? category.name : props.category}}
                              </option>
                            </select>
                        </div>
                    </div>

                    <label class="label mt-2">New Task</label>
                    <div class="control has-icons-left task-title">
                        <input class="input is-info" type="text" required v-model="newTask.name">
                        <span class="icon is-small is-left">
                            <i class="fa-solid fa-pen"></i>
                        </span>
                    </div>

                    <label class="label mt-2">Details</label>
                    <textarea class="textarea is-info" v-model="newTask.details"></textarea>
                
                    <div class="field is-horizontal mt-6">
                        <div class="field-label is-normal">
                            <label class="label">Date</label>
                        </div>
                        <div class="field-body">
                            <div class="field">
                                <p class="control is-expanded">
                                <input class="input is-info" type="date" required v-model="newTask.date">
                                </p>
                            </div>
                        </div>
                        <div class="field-label is-normal">
                            <label class="label">Time</label>
                        </div>
                        <div class="field-body">
                            <div class="field">
                              <p class="control is-expanded">
                                <input class="input is-info" type="time" required v-model="newTask.time">
                              </p>
                            </div>
                        </div>
                    </div>
                        
                        <div class="field-body">
                            <div class="field">
                              <p class="control is-flex is-justify-content-center is-align-items-center">
                                <label class="label pr-3 pt-1" for="important">Important?</label>
                                <input class="is-info" type="checkbox" id="important" v-model="newTask.important"> 
                              </p>
                            </div>
                        </div>
                        <label class="label pt-4">Assign to a Friend?</label>
                        <div class="control is-expanded">
                            <div class="select is-info select-section is-normal">
                              <select disabled v-model="newTask.assignTo" v-if="props.assign === 'true'">
                                <option>{{user.email}}</option>
                              </select>
                              <select required v-model="newTask.assignTo" v-else>
                                <option v-for="(friend,i) in session.user?.friends" :key="i">{{friend}}</option>
                                <option :value="null">No one</option>
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

<style scoped lang="scss">
#add-task {
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
@media screen and (max-width: 800px) {
  main {
    form {
      text-align: center;
      margin: 0 10%;
      .task-title {
        margin: 0 5%;
      }
      textarea {
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