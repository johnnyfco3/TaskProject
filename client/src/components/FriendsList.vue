<script setup lang="ts">
import { RouterLink } from 'vue-router';
import router from '../router';
import session from '../models/session';
import { useUsers } from '../models/users';

const users = useUsers()

const props = defineProps({
  friend: {
    type: String,
    required: true,
  },
  i: {
    type: Number,
    required: true,
  }
})

function remove(email:string){
  users.removeFriend(session.user?._id, email)
}

const info = {
  uEmail: "",
  assign: false
}

function assignTo(email:string){
  info.uEmail = email
  info.assign = true
  router.push(`/add-tasks/${info.assign}/${info.uEmail}/null`)
}

</script>

<template>
<div class="list">
  <div class="friend">
    <div class="card">
        <div class="card-content">
        <div class="content is-flex is-justify-content-space-between">
                <div class="left is-flex">
                    <i class="fa-solid fa-user pr-5"></i>
                    <p class="subtitle">{{friend}}</p>
                </div>
                <div class="icons is-flex">
                    <a href="#"><i class="fa-solid fa-plus" @click="assignTo(friend)"></i></a>
                    <a href="#"><i class="fa-solid fa-trash-can" @click="remove(friend)"></i></a>
                </div>
        </div>
        </div>
    </div>
  </div>
</div>
</template>

<style scoped lang="scss">
#friends {
  .list .card {
    margin: 2% 10%;
    width: 80%;
  }
  main {
    .content {
      .left {
        width: 40%;
        align-items: center;
        font-size: 2rem;
        p {
          font-size: 1.2rem;
          font-weight: 400;
        }
      }
      .icons {
        padding: 0 5%;
        a {
          padding: 0 40%;
          font-size: 1.3rem;
          color: black;
        }
        a:hover {
          font-size: 1.5rem;
          color: red;
          transition: 0.3s;
        }
      }
    }
  }
}
@media screen and (max-width: 750px) {
  #friends {
    .list .card {
      margin: 2% 5%;
      width: 90%;
    }
    main {
      .content {
        .left {
          width: 100%;
          align-items: center;
          font-size: 1rem;
          p {
            font-size: 1rem;
          }
        }
        .icons {
          padding: 0 10%;
          a {
            padding: 0 40%;
            font-size: 1rem;
          }
          a:hover {
            font-size: 1.2rem;
          }
        }
      }
    }
  }
}
</style>
