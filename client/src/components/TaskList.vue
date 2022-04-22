<script setup lang="ts">
import { defineProps, ref } from 'vue';
import { RouterLink } from 'vue-router';
import { useSession } from '../models/session';
import { Task, useTasks } from '../models/tasks';
    
    const tasks = useTasks()
    const session = useSession()

    const { task, currentTab, type, i } = defineProps<{ 
        task: Task, 
        currentTab: string, 
        type: string,
        i: number  
        }>();

    const completed = ref(task.completed);
    const important = ref(task.important);

    async function remove(id: string){
        try{
            const res = await session.api(`tasks/${id}`, {}, 'DELETE')
            return res
        }catch(e){
            console.log(e)
        }
    }

    async function getUser(user:string){
        try{
            const currentUser = await session.api(`users/email/${user}`)
            return `${currentUser.firstName} ${currentUser.lastName}`
        }catch(e){
            console.log(e)
        }
    }

    const copy = tasks.list.filter(t => t.category === type && t.user.email === session.user?.email).sort((a:any,b:any) => {
        let first:any = new Date(a.date)
        let second:any = new Date(b.date)
        return first - second
    })

    async function toggleCompleted(id:string){
        try{
            await session.api(`tasks/${id}`, { completed: !completed.value }, 'PATCH')
            completed.value = !completed.value
        }
        catch(e){
            console.log(e)
        }
    }
    
    async function toggleImportant(id:string){
        try{
            await session.api(`tasks/${id}`, { important: !important.value }, 'PATCH')
            important.value = !important.value
        }
        catch(e){
            console.log(e)
        }
    }

</script>

<template>
<div class="list">
    <div v-if="task.category === type && task.user.email === session.user.email">
        <div class="card" v-if="currentTab == 'Completed' && task.completed">
            <div class="header">
                <div class="top-content">
                    <p class="card-header-title ml-4">
                        <i :class="
                            completed ? 'fas fa-check-circle pr-6' : 'far fa-circle pr-6'
                        " @click="toggleCompleted(task._id)"></i>
                        {{task.name}}
                    </p>
                </div>
                <p class="subtitle" v-if="task.assignedBy !== null">
                    {{task.category}} - Assigned by {{getUser(task.assignedBy).then(res => res)}}
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
            <div class="content">
                <p class="subtitle">Details</p>
                <p class="subtitle">{{task.details}}</p>
            </div>
            </div>
            <footer class="card-footer">
            <a href="#" class="card-footer-item"><router-link :to="`/edit-task/${task.name}`"><i class="fas fa-pencil-alt"></i></router-link></a>
            <a href="#" class="card-footer-item"><i 
                                                    :class="important ? 'fa-solid fa-star' : 'far fa-star'"
                                                    @click="toggleImportant(task._id)"
                                                ></i></a>
            <a href="#" class="card-footer-item"><i class="fas fa-minus-circle" @click="remove(task._id)"></i></a>
            </footer>
        </div>

        <div class="card" v-else-if="currentTab == 'Important' && task.important">
            <div class="header">
                <div class="top-content">
                    <p class="card-header-title ml-4">
                        <i :class="
                            completed ? 'fas fa-check-circle pr-6' : 'far fa-circle pr-6'
                        " @click="toggleCompleted(task._id)"></i>
                        {{task.name}}
                    </p>
                </div>
                <p class="subtitle" v-if="task.assignedBy !== null">
                    {{task.category}} - Assigned by {{getUser(task.assignedBy).then(res => res)}}
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
            <div class="content">
                <p class="subtitle">Details</p>
                <p class="subtitle">{{task.details}}</p>
            </div>
            </div>
            <footer class="card-footer">
            <a href="#" class="card-footer-item"><router-link :to="`/edit-task/${task.name}`"><i class="fas fa-pencil-alt"></i></router-link></a>
            <a href="#" class="card-footer-item"><i 
                                                    :class="important ? 'fa-solid fa-star' : 'far fa-star'"
                                                    @click="toggleImportant(task._id)"
                                                ></i></a>
            <a href="#" class="card-footer-item"><i class="fas fa-minus-circle" @click="remove(task._id)"></i></a>
            </footer>
        </div>

        <div class="card" v-else-if="currentTab == 'Assigned' && task.assignedBy !== null">
            <div class="header">
                <div class="top-content">
                    <p class="card-header-title ml-4">
                        <i :class="
                            completed ? 'fas fa-check-circle pr-6' : 'far fa-circle pr-6'
                        " @click="toggleCompleted(task._id)"></i>
                        {{task.name}}
                    </p>
                </div>
                <p class="subtitle">
                    {{task.category}} - Assigned by {{getUser(task.assignedBy).then(res => res)}}
                </p>
            </div>
            <div class="card-content">
            <div class="content is-flex is-justify-content-space-between">
                    <p class="subtitle"><i class="far fa-calendar-alt"></i> {{task.date}}</p>
                    <p class="subtitle time">{{task.time}}</p>
            </div>
            <div class="content">
                <p class="subtitle">Details</p>
                <p class="subtitle">{{task.details}}</p>
            </div>
            </div>
            <footer class="card-footer">
            <a href="#" class="card-footer-item"><router-link :to="`/edit-task/${task.name}`"><i class="fas fa-pencil-alt"></i></router-link></a>
            <a href="#" class="card-footer-item"><i 
                                                    :class="important ? 'fa-solid fa-star' : 'far fa-star'"
                                                    @click="toggleImportant(task._id)"
                                                ></i></a>
            <a href="#" class="card-footer-item"><i class="fas fa-minus-circle" @click="remove(task._id)"></i></a>
            </footer>
        </div>

        <div class="card" v-else-if="currentTab == 'All'">
            <div class="header">
                <div class="top-content">
                    <p class="card-header-title ml-4">
                        <i 
                        :class="completed ? 'fas fa-check-circle pr-6' : 'far fa-circle pr-6'" 
                        @click="toggleCompleted(task._id)">
                        </i>
                        {{task.name}}
                    </p>
                </div>
                <p class="subtitle" v-if="task.assignedBy !== null">
                    {{task.category}} - Assigned by {{getUser(task.assignedBy).then(res => res)}}
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
            <div class="content">
                <p class="subtitle">Details</p>
                <p class="subtitle">{{task.details}}</p>
            </div>
            </div>
            <footer class="card-footer">
            <a href="#" class="card-footer-item"><router-link :to="`/edit-task/${task.name}`"><i class="fas fa-pencil-alt"></i></router-link></a>
            <a href="#" class="card-footer-item"><i 
                                                    :class="important ? 'fa-solid fa-star' : 'far fa-star'"
                                                    @click="toggleImportant(task._id)"
                                                ></i></a>
            <a href="#" class="card-footer-item"><i class="fas fa-minus-circle" @click="remove(task._id)"></i></a>
            </footer>
        </div>

        <div v-else-if="currentTab == 'Date'">
            <div class="card" v-for="(task,i) in copy" :key="i">
                <div class="header">
                    <div class="top-content">
                        <p class="card-header-title ml-4">
                            <i :class="
                                completed ? 'fas fa-check-circle pr-6' : 'far fa-circle pr-6'"
                            @click="toggleCompleted(task._id)"></i>
                            {{task.name}}
                        </p>
                    </div>
                    <p class="subtitle" v-if="task.assignedBy !== null">
                        {{task.category}} - Assigned by {{getUser(task.assignedBy).then(res => res)}}
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
                <div class="content">
                    <p class="subtitle">Details</p>
                    <p class="subtitle">{{task.details}}</p>
                </div>
                </div>
                <footer class="card-footer">
                <a href="#" class="card-footer-item"><router-link :to="`/edit-task/${task.name}`"><i class="fas fa-pencil-alt"></i></router-link></a>
                <a href="#" class="card-footer-item"><i 
                                                        :class="important ? 'fa-solid fa-star' : 'far fa-star'"
                                                        @click="toggleImportant(task._id)"
                                                    ></i></a>
                <a href="#" class="card-footer-item"><i class="fas fa-minus-circle" @click="remove(task._id)"></i></a>
                </footer>
            </div>
        </div>
    </div>
</div>
</template>

<style scoped lang="scss">
.list {
    .card {
        margin: 2% 5%;
        .header .subtitle {
            margin-left: 8.5%;
            margin-top: -0.5%;
            font-size: 1.1rem;
            font-weight: 500;
        }
        .card-content {
            .content {
                .subtitle {
                    margin-left: 7%;
                    font-size: 1.2rem;
                    font-weight: 100;
                }
                .time {
                    margin-right: 5%;
                }
            }
            .card-footer-item {
                font-size: 1.3rem;
            }
        }
    }
    .top-content {
        p {
            font-size: 1.4rem;
            i {
                font-size: 2rem;
                color: rgb(129, 212, 129);
            }
            i:hover {
                cursor: pointer;
            }
        }
    }
}
</style>
