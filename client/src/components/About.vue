<script setup lang="ts">

</script>

<template>
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
</template>

<style scoped lang="scss">
.section {
  .title{
    font-size: 4rem;
    font-family: fantasy;
  }
  p{
    font-size: 1.3rem;
    line-height: 1.6;
    width: 90%;
  }
}
@media screen and (max-width: 750px) {
  .section {
    .title {
      font-size: 3rem;
    }
    p {
      font-size: 1.2rem;
    }
    img{
      width: 90%;
      height: auto;
    }
  }
}
</style>