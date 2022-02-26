<script setup lang="ts">
import Homebar from '../components/Homebar.vue';
import Categories from '../components/Categories.vue'
</script>

<template>
<div id="overview">
    <header>
        <Homebar />
    </header>
    <main>
        <div class="container mb-6">
            <div class="top-content has-text-centered mt-6 mb-6">
                <h1 class="title"><span>Hello</span> Johnny</h1>
                <!-- <h1 class="subtitle">{{today}}</h1> -->
                <h1 class="subtitle">today</h1>
            </div>

            <hr>
            <nav class="level mt-2">
                <div class="level-item has-text-centered">
                <div>
                    <p class="heading">Created Tasks</p>
                    <p class="title">57</p>
                </div>
                </div>
                <div class="level-item has-text-centered">
                <div>
                    <p class="heading">Completed Tasks</p>
                    <p class="title">35</p>
                </div>
                </div>
            </nav>
            <hr>
            <div class="columns is-multiline mt-6">
                <!-- <Categories /> -->
            </div>
            <div class="center mt-6">
                <a href="AddCategory.html"><button class="button is-danger is-hovered pr-6 pl-6 pt-3 pb-3"><i class="fas fa-plus-circle" aria-hidden="true"></i>Add New</button></a>
            </div>
        </div>
    </main>
</div>
</template>

<style scoped>
#overview {
  background-image: url("../assets/images/slider-right-dec.jpg");
  background-size: cover;
}
.top-content .title {
  font-size: 3.3rem;
}
.top-content .title span {
  font-weight: 300;
}
.center {
  display: flex;
  justify-content: center;
}
.center button {
  border-radius: 4rem;
  font-size: 1.4rem;
}
@media screen and (max-width: 800px) {
  .top-content .title {
    font-size: 2rem;
  }
  .center button {
    border-radius: 4rem;
    font-size: 1.2rem;
  }
}
</style>
