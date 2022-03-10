<script setup lang="ts">
import { defineProps } from 'vue';
import { RouterLink } from 'vue-router';
import { list } from '../models/users';
import { tList } from '../models/tasks';
import router from '../router';
import session from '../models/session';

    const props = defineProps({
        currentTab: {
            type: String
        },
        toggleCompleted: {
            type: Function || undefined
        },
        toggleImportant: {
            type: Function || undefined
        },
        type: {
            type: String
        }
    })

    function remove(index:number){
        tList.splice(index, index)
    }

    function getUser(userID:Number){
        const user = list.find(u => u.id === userID)

        if(!user){
            throw {message: 'No user correspondence'}
        }

        return `${user.firstName} ${user.lastName}`
    }
</script>

<template>
<div class="list">
    <div v-for="(task,i) in tList" v-bind:key="i">
    <div v-if="task.category === props.type && task.userID === session.user?.id">
        <div class="card" v-if="currentTab == 'Completed' && task.completed">
            <div class="header">
                <div class="top-content">
                    <p class="card-header-title ml-4">
                        <i class="fas fa-check-circle pr-6" v-on:click="toggleCompleted(task.id)"></i>
                        {{task.name}}
                    </p>
                </div>
                <p class="subtitle" v-if="task.assignedBy !== null">
                    {{task.category}} - Assigned by {{getUser(task.assignedBy)}}
                </p>
                <p class="subtitle" v-else>
                    {{task.category}}
                </p>
            </div>
            <div class="card-content">
            <div class="content is-flex is-justify-content-space-between">
                    <p class="subtitle"><i class="far fa-calendar-alt"></i> {{task.date}}</p>
                    <p class="subtitle time">{{task.time}}</p>
            </div>
            </div>
            <footer class="card-footer">
            <a href="#" class="card-footer-item"><router-link :to="`/edit-task/${task.id}`"><i class="fas fa-pencil-alt"></i></router-link></a>
            <a href="#" class="card-footer-item"><i 
                                                    v-bind:class="task.important ? 'fa-solid fa-star' : 'far fa-star'"
                                                    v-on:click="toggleImportant(task.id)"
                                                ></i></a>
            <a href="#" class="card-footer-item"><i class="fas fa-minus-circle" @click="remove(i)"></i></a>
            </footer>
        </div>

        <div class="card" v-else-if="currentTab == 'Important' && task.important">
            <div class="header">
                <div class="top-content">
                    <p class="card-header-title ml-4">
                        <i v-bind:class="
                            task.completed ? 'fas fa-check-circle pr-6' : 'far fa-circle pr-6'
                        " v-on:click="toggleCompleted(task.id)"></i>
                        {{task.name}}
                    </p>
                </div>
                <p class="subtitle" v-if="task.assignedBy !== null">
                    {{task.category}} - Assigned by {{getUser(task.assignedBy)}}
                </p>
                <p class="subtitle" v-else>
                    {{task.category}}
                </p>
            </div>
            <div class="card-content">
            <div class="content is-flex is-justify-content-space-between">
                    <p class="subtitle"><i class="far fa-calendar-alt"></i> {{task.date}}</p>
                    <p class="subtitle time">{{task.time}}</p>
            </div>
            </div>
            <footer class="card-footer">
            <a href="#" class="card-footer-item"><router-link :to="`/edit-task/${task.id}`"><i class="fas fa-pencil-alt"></i></router-link></a>
            <a href="#" class="card-footer-item"><i 
                                                    v-bind:class="task.important ? 'fa-solid fa-star' : 'far fa-star'"
                                                    v-on:click="toggleImportant(task.id)"
                                                ></i></a>
            <a href="#" class="card-footer-item"><i class="fas fa-minus-circle" @click="remove(i)"></i></a>
            </footer>
        </div>

        <div class="card" v-else-if="currentTab == 'Assigned' && task.assignedBy !== null">
            <div class="header">
                <div class="top-content">
                    <p class="card-header-title ml-4">
                        <i v-bind:class="
                            task.completed ? 'fas fa-check-circle pr-6' : 'far fa-circle pr-6'
                        " v-on:click="toggleCompleted(task.id)"></i>
                        {{task.name}}
                    </p>
                </div>
                <p class="subtitle">
                    {{task.category}} - Assigned by {{getUser(task.assignedBy)}}
                </p>
            </div>
            <div class="card-content">
            <div class="content is-flex is-justify-content-space-between">
                    <p class="subtitle"><i class="far fa-calendar-alt"></i> {{task.date}}</p>
                    <p class="subtitle time">{{task.time}}</p>
            </div>
            </div>
            <footer class="card-footer">
            <a href="#" class="card-footer-item"><router-link :to="`/edit-task/${task.id}`"><i class="fas fa-pencil-alt"></i></router-link></a>
            <a href="#" class="card-footer-item"><i 
                                                    v-bind:class="task.important ? 'fa-solid fa-star' : 'far fa-star'"
                                                    v-on:click="toggleImportant(task.id)"
                                                ></i></a>
            <a href="#" class="card-footer-item"><i class="fas fa-minus-circle" @click="remove(i)"></i></a>
            </footer>
        </div>

        <div class="card" v-else-if="currentTab == 'All'">
            <div class="header">
                <div class="top-content">
                    <p class="card-header-title ml-4">
                        <i 
                        v-bind:class="task.completed ? 'fas fa-check-circle pr-6' : 'far fa-circle pr-6'" 
                        v-on:click="toggleCompleted(task.id)">
                        </i>
                        {{task.name}}
                    </p>
                </div>
                <p class="subtitle" v-if="task.assignedBy !== null">
                    {{task.category}} - Assigned by {{getUser(task.assignedBy)}}
                </p>
                <p class="subtitle" v-else>
                    {{task.category}}
                </p>
            </div>
            <div class="card-content">
            <div class="content is-flex is-justify-content-space-between">
                    <p class="subtitle"><i class="far fa-calendar-alt"></i> {{task.date}}</p>
                    <p class="subtitle time">{{task.time}}</p>
            </div>
            </div>
            <footer class="card-footer">
            <a href="#" class="card-footer-item"><router-link :to="`/edit-task/${task.id}`"><i class="fas fa-pencil-alt"></i></router-link></a>
            <a href="#" class="card-footer-item"><i 
                                                    v-bind:class="task.important ? 'fa-solid fa-star' : 'far fa-star'"
                                                    v-on:click="toggleImportant(task.id)"
                                                ></i></a>
            <a href="#" class="card-footer-item"><i class="fas fa-minus-circle" @click="remove(i)"></i></a>
            </footer>
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
.card-footer-item {
  font-size: 1.3rem;
}
</style>
