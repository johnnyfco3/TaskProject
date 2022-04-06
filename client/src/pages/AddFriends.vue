<script setup lang="ts">
import { reactive } from 'vue';
import { list } from '../models/users';
import session from '../models/session';
import router from '../router';
  
  const newFriend = reactive({
          email: ""
  })

  const user = list.find(u => u.id === session.user?.id)
  
  function handleSubmit(){
      if(newFriend){
        const checkUser = list.find(u => u.email === newFriend.email)

        if(checkUser){
          user?.friends.push(newFriend.email)
          router.push('/friends')
        }
        else{
          throw {message: 'No user found'}
        }
      }
  }
</script>

<template>
<div id="add-friends">
    <main>
        <div class="container">
            <div class="center">
              <h1 class="title heading1 has-text-centered pt-6">Add New Friend</h1>
                <form @submit.prevent="handleSubmit">
                    <label class="label pt-4">Enter Friend's Email</label>
                    <div class="control has-icons-left task-title">
                        <input class="input is-info" type="email" required v-model="newFriend.email">
                        <span class="icon is-small is-left">
                            <i class="fa-solid fa-envelope"></i>
                        </span>
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
#add-friends{
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
  main {
    form .task-title {
      margin: 0 5%;
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