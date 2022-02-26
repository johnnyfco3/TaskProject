<script setup lang="ts">

</script>

<template>
<header>
  <div class="container">
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <div class="navbar-start">
                    <a class="navbar-item">
                        <h1 class="title">Task it!</h1>
                    </a>
                </div>
        
            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
            </div>
        
            <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
                <a class="navbar-item" href="Overview.html">
                Home
                </a>
        
                <a class="navbar-item" href="Friends.html">
                Friends
                </a>
            </div>
        
            <div class="navbar-end">
                <div class="navbar-item">
                    <a href="Welcome.html">
                    Log out
                    </a>
                </div>
            </div>
            </div>
        </nav>
    </div>
</header>
</template>

<style scoped>
header {
  box-shadow: 0px 3px 5px rgb(226, 223, 223);
}
header h1 {
  font-family: fantasy;
  margin-top: 10%;
}
header .navbar-item {
  font-size: 1.2rem;
  margin: 0 5%;
}
header .navbar-start .navbar-item:hover {
  background-color: white;
  color: red;
  transition: 0.3s ease;
}
header .navbar-end a {
  font-size: 1.2rem;
  color: black;
}
header .navbar-end a:hover {
  color: red;
  transition: 0.3s ease;
}
@media screen and (max-width: 800px) {
  header .title {
    font-size: 1.5rem;
    width: 100px;
  }
}
</style>
