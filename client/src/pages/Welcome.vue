<script setup lang="ts">
import WelcomeBar from '../components/WelcomeBar.vue';
import { RouterLink } from 'vue-router';

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
                    <form>
                <!-- <form @submit.prevent="handleSubmit"> -->
                    <h1 class="title has-text-centered pt-4">Sign In</h1>
                    <div class="card-content">
                    <div class="content">
                        <div class="field">
                            <label class="label">Email</label>
                            <div class="control has-icons-left has-icons-right">
                            <!-- <input class="input" type="email" placeholder="Email Address" required v-model="returningUser.email"> -->
                            <input class="input" type="email" placeholder="Email Address" required />
                            <span class="icon is-small is-left">
                                <i class="fa-solid fa-envelope"></i>
                            </span>
                            </div>
                        </div>
                        
                        <div class="field">
                            <label class="label">Password</label>
                            <div class="control has-icons-left has-icons-right">
                            <!-- <input class="input" type="password" placeholder="Password" required v-model="returningUser.password"> -->
                            <input class="input" type="password" placeholder="Password" required />
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
    </main>
</div>
</template>

<style scoped>
main {
  background-image: url("../assets/images/slider-right-dec.jpg");
  height: 100vh;
}
main .container {
  padding: 5% 0;
}
main .left-side {
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