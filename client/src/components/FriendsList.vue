<script setup lang="ts">

</script>

<template>
<div class="list">
<div class="card">
    <div class="card-content">
    <div class="content is-flex is-justify-content-space-between">
            <div class="left is-flex">
                <i class="fa-solid fa-user"></i>
                <p class="subtitle">{{friend.firstName}} {{friend.lastName}}</p>
            </div>
            <div class="icons is-flex">
                <a href="AddTask.html"><i class="fa-solid fa-plus"></i></a>
                <a href="#"><i class="fa-solid fa-trash-can"></i></a>
            </div>
    </div>
    </div>
</div>
</div>
</template>

<style scoped>
.list .card {
  margin: 2% 5%;
}
.list .top-content p {
  font-size: 1.4rem;
}
.list .top-content p i {
  font-size: 2rem;
  color: rgb(129, 212, 129);
}
.list .top-content p i:hover {
  cursor: pointer;
}
.list .card .header .subtitle {
  margin-left: 8.5%;
  margin-top: -0.5%;
  font-size: 1.1rem;
  font-weight: 500;
}
.list .card-content .content .subtitle {
  margin-left: 7%;
  font-size: 1.2rem;
  font-weight: 100;
}
.list .card-content .content .time {
  margin-right: 5%;
}
.list .card {
  margin: 2% 10%;
  width: 80%;
}
@media screen and (max-width: 800px) {
  .list .card {
    margin: 2% 5%;
    width: 90%;
  }
}
</style>
