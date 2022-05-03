<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { reactive } from 'vue';
import { useSession } from '../models/session';
import About from '../components/About.vue';
import Footer from '../components/Footer.vue';
import { useMessage } from '../models/messages';

  const session = useSession();
  const messages = useMessage();
      
  const returningUser = reactive({
    email: "",
    password: "",
  })

  function handleSubmit(){
    session.Login(returningUser.email, returningUser.password)
    returningUser.email = "";
    returningUser.password = "";
  }

</script>

<template>
<div id="welcome">
    <main>
        <div class="container is-flex">
            <div class="left-side is-flex-direction-column has-text-centered pt-6" id="main">
                <h1 class="title">Task it!</h1>
                <img src="../assets/images/jan-kahanek-g3O5ZtRk2E4-unsplash.jpg" alt="Welcome">
            </div>
                <div class="card">
                    <form @submit.prevent="handleSubmit">
                    <h1 class="title has-text-centered pt-4">Sign In</h1>
                    <div v-for=" (x, i) in messages.notifications" :class="`notification is-light is-${x.type}`" :key="i">
                      <button class="delete" @click="messages.close(i)" ></button>
                      {{ x.message }}
                  </div>
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
                   <div class="control">
                      <button class="button is-link" @click.prevent="session.GoogleLogin()">Sign in with Google</button>
                    </div>
                  <h4 class="mt-5">Don't have an account? </h4>
                  <router-link to="/register">Register</router-link>
                </div>
            </div>
        </div>
        
        <About />
    </main>
    <Footer />
</div>
</template>

<style scoped lang="scss">
main {
  .container{
    padding: 5% 0;
  }
  .left-side, .section {
    margin-left: 5%;
  }
  .left-side {
    h1 {
      font-size: 5rem;
      font-family: fantasy;
    }
    
    img {
      width: 500px;
      height: 400px;
      border-radius: 2rem;
      margin-top: -5%;
    }
  }
  .card {
    margin-left: 10%;
    margin-top: 2%;
    width: 550px;
    border-radius: 1rem;
    padding: 2%;
    
    .title {
      font-size: 2.5rem;
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
}
@media screen and (max-width: 750px) {
  main {
    .left-side{
        h1 {
        font-size: 1.5rem;
        font-family: fantasy;
        margin-top: 25%;
      }

      img {
        width: 100px;
        height: 100px;
        border-radius: 2rem;
      }
    }

    .card {
      margin-left: 15%;
      margin-right: 3%;
      width: 200px;
      border-radius: 1rem;
      padding: 0;
      margin-top: 5%;

      .title {
        font-size: 1.3rem;
        margin-bottom: -3%;
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
  }
  hr {
    margin-top: -5%;
  }
}
</style>