<script setup lang="ts">
import { reactive, defineProps } from 'vue';
import Homebar from '../components/Homebar.vue';
import session from '../models/session';
import { tList } from '../models/tasks';
import { list } from '../models/users';
import router from '../router';

const props = defineProps({
  assign: String,
  email: String
})

let user:any;

if(props.assign === "true"){
  user = list.find(u => u.email === props.email)
}
  
  const newTask = reactive({
            name: "",
            category: "",
            date: "",
            time: "",
            important: false,
            assignTo: null
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

  function handleSubmit(){
      if(newTask){
          tList.push(
              {
                id: tList.length + 1,
                name: newTask.name,
                category: newTask.category,
                date: newTask.date,
                time: newTask.time,
                completed: false,
                important: newTask.important,
                assignedBy: newTask.assignTo === null ? null : session.user?.id,
                userID: newTask.assignTo === null ? session.user?.id : getUser(newTask.assignTo)
              }
          )
          router.push('/overview')
      }
  }

</script>

<template>
<div id="add-task">
    <header>
        <Homebar />
    </header>
    <main>
        <div class="container">
            <div class="center">
              <h1 class="title has-text-centered pt-6">Add New Task</h1>
                <form @submit.prevent="handleSubmit">
                    <label class="label pt-4">Select Category</label>
                    <div class="control">
                        <div class="select is-info select-section is-normal">
                            <select required v-model="newTask.category">
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
                        <input class="input is-info" type="text" required v-model="newTask.name">
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

<style scoped>
#add-task {
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