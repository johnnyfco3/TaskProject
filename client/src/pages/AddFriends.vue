<script setup lang="ts">
import { reactive, ref } from 'vue';
import router from '../router';
import Homebar from '../components/Homebar.vue';

  const friends = reactive([
          { firstName: "Johnny", lastName: "Tejada", email: "johnnyfran20002@gmail.com"},
          { firstName: "Joe", lastName: "Biden", email: "joeBiden2022@gmail.com"}
  ])
  
  const newFriend = reactive({
          email: ""
  })
  
  function handleSubmit(){
      if(newFriend.email){
          friends.push(
              {
                  firstName: "",
                  lastName: "",
                  email: newFriend.email
              }
          )
          router.push('/friends')
      }
  }

</script>

<template>
<div id="add-friends">
    <header>
        <Homebar />
    </header>
    <main>
        <div class="container">
            <div class="center">
              <h1 class="title has-text-centered pt-6">Add New Friend</h1>
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

<style scoped>
#add-friends{
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