<script setup lang="ts">
import { reactive } from 'vue';
import { useSession } from '../models/session';
import router from '../router';


const session = useSession()
const editUser = reactive({
    firstName: session.user?.firstName,
    lastName: session.user?.lastName,
    email: session.user?.email,
    friends: session.user?.friends
})

async function handleSubmit(){
    try{
        await session.api(`users/${session.user?._id}`, editUser, 'PATCH')
        router.push('/overview')
    }catch(e){
        console.log(e)
    }
}

async function handleDelete(){
    if(window.confirm('Are you sure you want to delete your account?')){
        try{
            await session.api(`users/${session.user?._id}`, {}, 'DELETE')
            session.Logout()
        }catch(e){
            console.log(e)
        }
    }
} 

</script>
<template>
    <div id="edit-user">
        <div class="card mt-6 container p-4">
            <div class="card-content">
                <h1 class="title has-text-centered">User Account</h1>
                <div class="content">
                    <form @submit.prevent="handleSubmit">
                        <div class="columns">
                            <div class="field column">
                                <label class="label">First Name</label>
                                <div class="control">
                                    <input class="input" type="text" v-model="editUser.firstName" :placeholder="editUser.firstName">
                                </div>
                            </div>
                            <div class="field column">
                                <label class="label">Last Name</label>
                                <div class="control">
                                    <input class="input" type="text" v-model="editUser.lastName" :placeholder="editUser.lastName">
                                </div>
                            </div>
                        </div>
                        <div class="columns">
                            <div class="field column is-half">
                                <label class="label">Email</label>
                                <div class="control">
                                    <input class="input" type="email" v-model="editUser.email" :placeholder="editUser.email">
                                </div>
                            </div>
                        </div>
                        <div class="control">
                            <button class="button is-link">Save Changes</button>
                        </div>
                    </form>
                    <button class="button is-danger mt-5" @click="handleDelete">Delete Account</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
#edit-user .email {
    width: 50%;
    display: block;
}

</style>