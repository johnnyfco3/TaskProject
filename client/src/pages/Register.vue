<script setup lang="ts">
import { reactive } from 'vue';
import router from '../router';
import Footer from '../components/Footer.vue';
import { useSession } from '../models/session';

  const session = useSession()

  const newUser = reactive({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirm: "",
      friends: []
  })
  
  async function handleSubmit(){
    if(newUser.password !== newUser.confirm){
      alert("Passwords do not match!");
    }
    else{
      try{
        await session.api('users', newUser)
        router.push("/")
      }catch(e){
        console.log(e)
      }
    }
    newUser.firstName = "";
    newUser.lastName = "";
    newUser.email = "";
    newUser.password = "";
    newUser.confirm = "";
  }    
  
  

</script>

<template>
<div id="register">
   <main>
        <div class="container">
            <h1 class="app-title has-text-centered">Task it!</h1>
            <div class="card">
                <form @submit.prevent="handleSubmit">
                <h1 class="title has-text-centered pt-4">Register</h1>
                <div class="card-content">
                    <div class="field is-horizontal">
                        <div class="field pr-6 first">
                            <label class="label">First Name</label>
                            <div class="control has-icons-left has-icons-right">
                                <input class="input" type="text" required v-model="newUser.firstName">
                                <span class="icon is-small is-left">
                                    <i class="fas fa-user"></i>
                                </span>
                            </div>
                        </div>
                        
                        <div class="field">
                            <label class="label">Last Name</label>
                            <div class="control has-icons-left has-icons-right">
                                <input class="input" type="text" required v-model="newUser.lastName">
                                <span class="icon is-small is-left">
                                    <i class="fas fa-user"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="field is-horizontal">
                        <div class="field pr-6 email">
                            <label class="label">Email Address</label>
                            <div class="control has-icons-left has-icons-right">
                                <input class="input" type="email" required v-model="newUser.email">
                                <span class="icon is-small is-left">
                                    <i class="fa-solid fa-envelope"></i>
                                </span>
                            </div>
                        </div>
                        
                        <div class="field">
                            <label class="label">Password</label>
                            <div class="control has-icons-left has-icons-right">
                                <input class="input" type="password" required v-model="newUser.password">
                                <span class="icon is-small is-left">
                                    <i class="fa-solid fa-lock"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="field confirm">
                        <label class="label">Confirm Password</label>
                            <div class="control has-icons-left has-icons-right">
                                <input class="input" type="password" required v-model="newUser.confirm">
                                <span class="icon is-small is-left">
                                    <i class="fa-solid fa-check-double"></i>
                                </span>
                            </div>
                    </div>
                    
                    <div class="field">
                        <div class="control has-text-centered">
                        <button class="button is-link">Get Started</button>
                        </div>
                    </div>
                </div>
                </form>
            </div>
        </div>
    </main>
    <Footer />
</div>
</template>

<style scoped lang="scss">
#register {
  main {
    .container {
      padding: 5% 0;
      .app-title {
        font-family: fantasy;
        font-size: 5rem;
        font-weight: 700;
      }
    }
    .card {
      margin-left: 0;
      width: 750px;
      margin-top: 2%;
      border-radius: 1rem;
      padding: 2%;
      .title {
        font-size: 2.5rem;
      }
      input {
        width: 300px;
      }
      .confirm input {
        width: 100%;
      }
      .card-content {
        .field {
          padding-bottom: 3%;
          font-size: 1.2rem;
        }
        .field label {
          font-size: 1.2rem;
          font-weight: 500;
        }
        .field input {
          border-radius: 1rem;
        }
        button {
          font-size: 1.2rem;
        }
      }
    }
    display: flex;
    flex-direction: column;
  }
}
@media screen and (max-width: 750px) {
  #register {
    main {
      .card {
        width: 100%;
      }
      .app-title{
        font-size: 3rem;
      }
    }
  }
}
</style>