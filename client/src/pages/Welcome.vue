<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { reactive } from 'vue';
import WelcomeBar from '../components/WelcomeBar.vue';
import { Login } from '../models/session';

  const users = reactive([
      { firstName: "Johnny", lastName: "Tejada", email: "johnnyfran20002@gmail.com", password: "12345"},
      { firstName: "Joe", lastName: "Biden", email: "joeBiden2022@gmail.com", password: "12345"}
    ])
      
  const returningUser = reactive({
    email: "",
    password: "",
  })

  function handleSubmit(){
      if(returningUser){
        Login(returningUser.email, returningUser.password)
        returningUser.email = "";
        returningUser.password = "";
          // let hasAccount = false;
          // users.map(user =>{
          //   if(user.email === returningUser.email && user.password === returningUser.password){
          //     hasAccount = true
          //   }
          // })

          // if(hasAccount){
          //   returningUser.email = "";
          //   returningUser.password = "";
          // }
          // else{
          //   alert("Account not found")
          // }
      }
  }

</script>

<template>
<div id="welcome">
  <header>
    <WelcomeBar />
  </header>
    <main>
        <div class="container is-flex">
            <div class="left-side is-flex-direction-column has-text-centered pt-6" id="main">
                <h1 class="title">Task it!</h1>
                <img src="../assets/images/jan-kahanek-g3O5ZtRk2E4-unsplash.jpg" alt="Welcome">
            </div>
                <div class="card">
                    <form @submit.prevent="handleSubmit">
                    <h1 class="title has-text-centered pt-4">Sign In</h1>
                    <div class="card-content">
                    <div class="content">
                        <div class="field">
                            <label class="label">Email</label>
                            <div class="control has-icons-left has-icons-right">
                            <input class="input" type="email" placeholder="Email Address" required v-model="returningUser.email">
                            <span class="icon is-small is-left">
                                <i class="fa-solid fa-envelope"></i>
                            </span>
                            </div>
                        </div>
                        
                        <div class="field">
                            <label class="label">Password</label>
                            <div class="control has-icons-left has-icons-right">
                            <input class="input" type="password" placeholder="Password" required v-model="returningUser.password">
                            <span class="icon is-small is-left">
                                <i class="fa-solid fa-lock"></i>
                            </span>
                            </div>
                        </div>
                        
                        <div class="field is-grouped is-flex is-justify-content-center submit">
                            <div class="control">
                            <button class="button is-link">Sign In</button>
                            </div>
                        </div>
                    </div>
                    </div>
                </form>
                <hr>
                <div class="bottom-content has-text-centered">
                <h4>Don't have an account? </h4>
                <router-link to="/register">Register</router-link>
                </div>
            </div>
        </div>
        <div class="section" id="about">
          <h1 class="title has-text-centered pt-6">About</h1>
          <div class="columns pt-4">
            <div class="column is-half pt-6">
              <p class="pt-6">
                Welcome to <strong>Task it!</strong> If you are looking to organize your responsibilities or keep track of tasks for
                your work, school, or your personal life, this is the application for you. Here you can create
                different types of tasks, mark them as completed when done or important and you can assign tasks to 
                your friends, coworker, manager, and so on. What are you waiting for, get started by hitting that Register
                link!
              </p>
            </div>
            <div class="column is-half">
              <img src="../assets/images/about-dec-v3.png" alt="About" />
            </div>
          </div>
        </div>
    </main>
    <footer class="has-text-centered pt-6 pb-6">
      <h4 class="pt-6">Made with <i className="fas fa-heart"></i> by Johnny Tejada.</h4>
      <h5>Advanced Programming Spring 2022 &copy;</h5>
    </footer>
</div>
</template>

<style scoped>
#welcome {
  background-image: url("../assets/images/slider-right-dec.jpg");
}
main .container{
  padding: 5% 0;
}
main .left-side,
main .section {
  margin-left: 5%;
}
main .left-side h1 {
  font-size: 5rem;
  font-family: fantasy;
}
main .left-side img {
  width: 500px;
  height: 400px;
  border-radius: 2rem;
  margin-top: -5%;
}
main .card {
  margin-left: 10%;
  margin-top: 2%;
  width: 550px;
  border-radius: 1rem;
  padding: 2%;
}
main .card .title {
  font-size: 2.5rem;
}
main .card-content .field {
  padding-bottom: 3%;
  font-size: 1.2rem;
}
main .card-content .field label {
  font-size: 1.2rem;
  font-weight: 500;
}
main .card-content .field input {
  border-radius: 1rem;
}
main .card-content button {
  font-size: 1.2rem;
}
.section .title{
  font-size: 4rem;
  font-family: fantasy;
}
.section p{
  font-size: 1.3rem;
  line-height: 1.6;
  width: 90%;
}
footer{
  font-size: 1.3rem;
}
#register main {
  display: flex;
  flex-direction: column;
}
#register .container .app-title {
  font-family: fantasy;
  font-size: 5rem;
  font-weight: 700;
}
#register main .card {
  margin-left: 0;
  width: 700px;
}
#register main .card input {
  width: 300px;
}
#register main .card .confirm input {
  width: 100%;
}
@media screen and (max-width: 800px) {
  main .left-side h1 {
    font-size: 1.5rem;
    font-family: fantasy;
    margin-top: 25%;
  }
  main .left-side img {
    width: 100px;
    height: 100px;
    border-radius: 2rem;
  }
  main .card {
    margin-left: 6%;
    margin-right: 3%;
    width: 200px;
    border-radius: 1rem;
    padding: 0;
    margin-top: 5%;
  }
  main .card .title {
    font-size: 1.3rem;
    margin-bottom: -3%;
  }
  main .card-content .field label {
    font-size: 10px;
  }
  main .card-content .field input,
  .icon {
    border-radius: 1rem;
    font-size: 10px;
  }
  main .card-content .field button {
    font-size: 10px;
  }
  main .card .bottom-content {
    font-size: 10px;
    margin-top: -5%;
    padding-bottom: 5%;
  }
  hr {
    margin-top: -5%;
  }
  #register .container .app-title {
    font-family: fantasy;
    font-size: 3rem;
  }
  #register main .card {
    margin-left: 0;
    width: 300px;
  }
  #register main .card .first,
  #register main .card .email {
    width: 300px;
  }
  #register main .card .confirm input {
    width: 100%;
  }
}
</style>