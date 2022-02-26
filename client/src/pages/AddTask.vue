<script setup lang="ts">
import AddBar from '../components/AddBar.vue';

</script>

<template>
<div id="add-task">
    <header>
        <AddBar />
    </header>
    <main>
        <div class="container">
            <div class="center">
                <!-- <form @submit.prevent="handleSubmit"> -->
                    <form>
                    <label class="label mt-6">Select Category</label>
                    <div class="control">
                        <div class="select is-info select-section is-normal">
                            <!-- <select required v-model="newTask.category"> -->
                            <select required>
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
                        <!-- <input class="input is-info" type="text" required v-model="newTask.name"> -->
                        <input class="input is-info" type="text" required />
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
                                <!-- <input class="input is-info" type="date" required v-model="newTask.date"> -->
                                <input class="input is-info" type="text" required />
                                </p>
                            </div>
                        </div>
                        <div class="field-label is-normal">
                            <label class="label">Time</label>
                        </div>
                        <div class="field-body">
                            <div class="field">
                            <p class="control is-expanded">
                                <!-- <input class="input is-info" type="time" required v-model="newTask.time"> -->
                                <input class="input is-info" type="time" required />
                            </p>
                            </div>
                        </div>
                    </div>
                
                    <div class="center mt-6">
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