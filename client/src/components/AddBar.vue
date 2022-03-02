<script setup lang="ts">

</script>

<template>
<header>
    <div class="container">
        <a href="Overview.html"><i class="fas fa-long-arrow-alt-left"></i></a>
        <div class="top has-text-centered">
            <h1 class="title p-3">{{message}}</h1>
        </div>
    </div>
</header>
</template>

<style scoped>
header {
  box-shadow: 0px 3px 5px rgb(226, 223, 223);
}
header .title {
  font-size: 2rem;
}
header a {
  color: black;
}
header i {
  position: absolute;
  top: 15px;
  font-size: 25px;
  cursor: pointer;
}
header i:hover {
  color: red;
}
</style>
