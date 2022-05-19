<script setup lang="ts">
import { reactive } from 'vue';
import { useSession } from '../models/session';
import { useUsers } from '../models/users';
import router from '../router';
  
  const session = useSession();
  const newFriend = reactive({
          email: ""
  })
  
  async function handleSubmit(){
      if(newFriend){
        const checkUser = await session.api(`users/email/${newFriend.email}`)
        const email = checkUser.email
        if(Object.keys(checkUser).length !== 0){
          try{
            await session.api(`users/addFriend/${session.user?._id}`, {email})
            router.push('/friends')
          }catch(e){
            console.log(e)
          }
        }
        else{
          throw { message: 'No user found' }
        }
      }
  }

  const users = useUsers()
  users.fetchUsers()

  const searchData = reactive({
    data: users.list,
    keepFirst: false,
    openOnFocus: false,
    name: '',
    selected: null
  })
    
  async function filteredDataObj() {

    //What I tried implementing to fix "Invalid prop: type check failed for prop "data". Expected Array, got Promise"
    // await users.searchByEmail(searchData.name).then(res => {
    //   return res.filter(option => {
    //     return (
    //       option.email
    //         .toString()
    //         .toLowerCase()
    //         .indexOf(searchData.name.toLowerCase()) >= 0
    //     )
    //   })
    // })


    const search = await users.searchByEmail(searchData.name)
    return search.filter(option => {
      return (
        option.email
          .toString()
          .toLowerCase()
          .indexOf(searchData.name.toLowerCase()) >= 0
      )
    })
  }

</script>

<template>
<div id="add-friends">
    <main>
        <div class="container">
            <div class="center">
              <h1 class="title heading1 has-text-centered pt-6">Add New Friend</h1>
                <form @submit.prevent="handleSubmit">
                    <label class="label pt-4">Enter Friend's Email</label>
                    <div class="control has-icons-left task-title">
                        <input class="input is-info" type="email" required v-model="newFriend.email">
                        <span class="icon is-small is-left">
                            <i class="fa-solid fa-envelope"></i>
                        </span>
                    </div>
                
                    <div class="center pt-6">
                        <button class="button is-danger pr-6 pl-6 pt-3 pb-3"><i class="fas fa-plus-circle" aria-hidden="true"></i> Add New</button>
                    </div>
                </form>
                <p class="content"><b>Selected:</b> {{ searchData.selected }}</p>
                  <o-field label="Find a name">
                    <o-autocomplete
                      v-model="searchData.name"
                      placeholder="e.g. name@gmail.com"
                      :keep-first="searchData.keepFirst"
                      :open-on-focus="searchData.openOnFocus"
                      :data="filteredDataObj()"
                      field="email"
                      @select="option => searchData.selected = option"
                    >

                    <!-- Another thought I had was adding :data="filteredDataObj().then(res => res)" to fix issue but did not work-->
                    
                    </o-autocomplete>
    </o-field>
            </div>
        </div>
    </main>
</div>
</template>

<style scoped lang="scss">
#add-friends{
  height: 100vh;
  main {
    form {
      text-align: center;
      margin: 0 2%;
      .task-title {
        margin: 0 20%;
        margin-bottom: 2%;
      }
    }
    .center button {
      border-radius: 4rem;
      font-size: 1.4rem;
    }
  }
}
@media screen and (max-width: 750px) {
  main {
    form .task-title {
      margin: 0 5%;
    }
    .center button {
      border-radius: 4rem;
      font-size: 1rem;
    }
    .control label {
      font-size: 1rem;
    }
    .field-label {
      padding-top: 5%;
    }
  }
}
</style>