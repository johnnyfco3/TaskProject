<script setup lang="ts">

</script>

<template>
<div id="register">
   <main>
        <div class="container">
            <h1 class="app-title has-text-centered">Task it!</h1>
            <div class="card">
                <form>
                <!-- <form @submit.prevent="handleSubmit"> -->
                <h1 class="title has-text-centered pt-4">Register</h1>
                <div class="card-content">
                    <div class="field is-horizontal">
                        <div class="field pr-6 first">
                            <label class="label">First Name</label>
                            <div class="control has-icons-left has-icons-right">
                                <!-- <input class="input" type="text" required v-model="newUser.firstName"> -->
                                <input class="input" type="text" required />
                                <span class="icon is-small is-left">
                                    <i class="fas fa-user"></i>
                                </span>
                            </div>
                        </div>
                        
                        <div class="field">
                            <label class="label">Last Name</label>
                            <div class="control has-icons-left has-icons-right">
                                <!-- <input class="input" type="text" required v-model="newUser.lastName"> -->
                                <input class="input" type="text" required />
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
                                <!-- <input class="input" type="email" required v-model="newUser.email"> -->
                                <input class="input" type="email" required />
                                <span class="icon is-small is-left">
                                    <i class="fa-solid fa-envelope"></i>
                                </span>
                            </div>
                        </div>
                        
                        <div class="field">
                            <label class="label">Password</label>
                            <div class="control has-icons-left has-icons-right">
                                <!-- <input class="input" type="password" required v-model="newUser.password"> -->
                                <input class="input" type="password" required />
                                <span class="icon is-small is-left">
                                    <i class="fa-solid fa-lock"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="field confirm">
                        <label class="label">Confirm Password</label>
                            <div class="control has-icons-left has-icons-right">
                                <!-- <input class="input" type="password" required v-model="newUser.confirm"> -->
                                <input class="input" type="password" required />
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
</div>
</template>

<style scoped>
#register {
  background-image: url("../assets/images/slider-right-dec.jpg");
  background-size: cover;
  height: 130vh;
}
main {
  height: 100vh;
}
main .container {
  padding: 5% 0;
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
  width: 750px;
}
#register main .card input {
  width: 300px;
}
#register main .card .confirm input {
  width: 100%;
}
@media screen and (max-width: 800px) {
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