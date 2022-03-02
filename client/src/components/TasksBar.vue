<script setup lang="ts">

</script>

<template>
<header>
    <div class="container">
        <nav class="level">
            <!-- Left side -->
            <div class="level-left">
                <div class="level-item">
                    <a href="Overview.html"><i class="fas fa-long-arrow-alt-left"></i></a>
                </div>
            </div>

            <!-- Center -->
            <div class="level-center pb-4">
                <div class="level-item is-flex-direction-column">
                    <h1 class="title p-2 pb-5">Work Projects</h1>
                    <h1 class="subtitle">{{today}}</h1>

                </div>
            </div>
        
            <!-- Right side -->
            <div class="level-right">
                <nav class="navbar" role="navigation" aria-label="main navigation">
                    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                
                    <div id="navbarBasicExample" class="navbar-menu">
                    <div class="navbar-end">
                        <a class="navbar-item" href="Friends.html">
                        Friends
                        </a>
                
                        <a class="navbar-item" href="Welcome.html">
                        Log out
                        </a>
                    </div>
                    </div>
                </nav>
            </div>
        </nav>
    </div>
</header>
</template>

<style scoped>
header {
  box-shadow: 0px 3px 5px rgb(226, 223, 223);
}
header .level-left {
  font-size: 25px;
}
header .level-left a {
  color: black;
}
header .level-left:hover {
  cursor: pointer;
}
header .level-center .title {
  font-size: 2.3rem;
}
header .level-center .subtitle {
  font-size: 1.1rem;
}
header i {
  position: relative;
}
header i:hover {
  color: red;
}
header .level-right {
  margin-left: -10%;
}
header .level-right .navbar-item {
  font-size: 1.2rem;
  margin: 0 5%;
}
header .level-right .navbar-item:hover {
  background-color: white;
  color: red;
  transition: 0.3s;
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
}
</style>