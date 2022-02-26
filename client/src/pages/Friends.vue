<script setup lang="ts">
import FriendsBar from '../components/FriendsBar.vue';
import FriendsList from "../components/FriendsList.vue"

</script>

<template>
<div id="friends">
    <header>
        <FriendsBar />
    </header>

    <main class="container">
        <!-- <div class="list mt-6" v-for="friend in friends" key="friend">
            <FriendsList />
        </div> -->

        <div class="center mt-6">
            <a href="AddFriends.html"><button class="button is-danger pr-6 pl-6 pt-3 pb-3"><i class="fas fa-plus-circle" aria-hidden="true"></i>Add New</button></a>
        </div>
        
    </main>
</div>
</template>

<style scoped>
#friends {
  background-image: url("../assets/images/slider-right-dec.jpg");
  background-size: cover;
  height: 100vh;
}
.center {
  display: flex;
  justify-content: center;
  padding-bottom: 5%;
}
.center button {
  border-radius: 4rem;
  font-size: 1.4rem;
}
@media screen and (max-width: 800px) {
  header .level-left .fa-long-arrow-alt-left {
    position: absolute;
    top: 30px;
    left: 15px;
  }
  header .level-right {
    position: absolute;
    top: 15px;
    right: 15px;
  }
  header .level-center .title {
    font-size: 1.4rem;
  }
  header .level-center .subtitle {
    font-size: 1rem;
  }
  main .center {
    display: flex;
    justify-content: center;
    padding-bottom: 5%;
  }
  main .level-item {
    padding: 0 2%;
  }
  main .level-item .date {
    margin-bottom: 16px;
  }
  .center button {
    border-radius: 4rem;
    font-size: 1rem;
  }
}
#friends .list .card {
  margin: 2% 10%;
  width: 80%;
}
#friends main .content .left {
  width: 20%;
  align-items: center;
  font-size: 2rem;
}
#friends main .content .left p {
  font-size: 1.5rem;
  font-weight: 400;
}
#friends main .content .icons {
  padding: 0 5%;
}
#friends main .content .icons a {
  padding: 0 40%;
  font-size: 1.3rem;
  color: black;
}
#friends main .content .icons a:hover {
  font-size: 1.5rem;
  color: red;
  transition: 0.3s;
}
@media screen and (max-width: 800px) {
  #friends .list .card {
    margin: 2% 5%;
    width: 90%;
  }
  #friends main .content .left {
    width: 100%;
    align-items: center;
    font-size: 1rem;
  }
  #friends main .content .left p {
    font-size: 1rem;
  }
  #friends main .content .icons {
    padding: 0 10%;
  }
  #friends main .content .icons a {
    padding: 0 40%;
    font-size: 1rem;
  }
  #friends main .content .icons a:hover {
    font-size: 1.2rem;
  }
}
</style>