<script setup lang="ts">
import { defineProps, ref } from 'vue';
import { RouterLink } from 'vue-router';
import session from '../models/session';
import { Task, useTasks } from '../models/tasks';
import { useUsers } from '../models/users';
    
    const users = useUsers()
    const tasks = useTasks()

    const { task } = defineProps<{ task: Task }>();

    const props = defineProps({
        currentTab: {
            type: String
        },
        type: {
            type: String
        },
        i: {
            type: Number,
            required: true,
        }
    })

    const completed = ref(props.task.completed);
    const important = ref(props.task.important);

    function remove(id: string){
        tasks.remove(id)
    }

    function getUser(user:string){
        const currentUser = users.getByEmail(user)

        return `${currentUser.firstName} ${currentUser.lastName}`
    }

    const copy = tasks.list.filter(t => t.category === props.type && t.user === session.user).sort((a:any,b:any) => {
        let first:any = new Date(a.date)
        let second:any = new Date(b.date)
        return first - second
    })

    function toggleCompleted(id:string){
        const task = tasks.getByID(id)

        completed.value = !completed.value

        return task.completed = !task.completed
    }
    
    function toggleImportant(id:string){
        const task = tasks.getByID(id)

        important.value = !important.value

        return task.important = !task.important
    }

</script>

<template>
<div class="list">
    <div v-if="task.category === props.type && task.user === session.user">
        <div class="card" v-if="props.currentTab == 'Completed' && task.completed">
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

        <div class="card" v-else-if="props.currentTab == 'Important' && task.important">
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

        <div class="card" v-else-if="props.currentTab == 'Assigned' && task.assignedBy !== null">
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
                    {{task.category}} - Assigned by {{getUser(task.assignedBy)}}
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

        <div class="card" v-else-if="props.currentTab == 'All'">
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

        <div v-else-if="props.currentTab == 'Date'">
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
