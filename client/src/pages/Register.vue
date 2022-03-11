<script setup lang="ts">
import { reactive } from 'vue';
import { list } from '../models/users'
import router from '../router';
import WelcomeBar from '../components/WelcomeBar.vue';
import Footer from '../components/Footer.vue';

  const newUser = reactive({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirm: ""
  })
  
  function handleSubmit(){
      if(newUser){
          if(newUser.password !== newUser.confirm){
              alert("Passwords do not match!");
          }
          else{
              list.push(
              {
                  firstName: newUser.firstName,
                  lastName: newUser.lastName,
                  email: newUser.email,
                  password: newUser.password,
                  friends: [],
                  id: list.length + 1
              }
          )
          newUser.firstName = "";
          newUser.lastName = "";
          newUser.email = "";
          newUser.password = "";
          newUser.confirm = "";
          }
          
          router.push("/")
      }
  }

</script>

<template>
<div id="register">
  <header>
    <WelcomeBar />
  </header>
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
  background-image: url("../assets/images/slider-right-dec.jpg");
  background-size: cover;
  
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
@media screen and (max-width: 800px) {
  main {
    .card {
      margin-left: 0;
      width: 300px;
      margin-right: 3%;
      border-radius: 1rem;
      padding: 0;
      margin-top: 5%;
      .title {
        font-size: 1.3rem;
        margin-bottom: -3%;
      }
      .first, .email {
        width: 300px;
      }
      .confirm input {
        width: 100%;
      }
      .card-content {
        .field label {
          font-size: 10px;
        }
        .field input,
        .icon {
          border-radius: 1rem;
          font-size: 10px;
        }
        .field button {
          font-size: 10px;
        }
      }
      .bottom-content {
        font-size: 10px;
        margin-top: -5%;
        padding-bottom: 5%;
      }
    }
    hr {
      margin-top: -5%;
    }
  }
  #register .container .app-title {
    font-family: fantasy;
    font-size: 3rem;
  }
}
</style>