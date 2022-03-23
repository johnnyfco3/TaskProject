import {createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Welcome from '../pages/Welcome.vue'
import Register from '../pages/Register.vue'
import Overview from '../pages/Overview.vue'
import Tasks from '../pages/Tasks.vue'
import Friends from '../pages/Friends.vue'
import AddTask from '../pages/AddTask.vue'
import AddFriends from '../pages/AddFriends.vue'
import AddCategory from '../pages/AddCategory.vue'
import EditTasks from '../pages/EditTasks.vue'
import session from "../models/session";

const routes: RouteRecordRaw[] = [
    { path: '/', component: Welcome },
    { path: '/register', component: Register },
    { path: '/overview', component: Overview },
    { path: '/tasks/:category', component: Tasks, props: true },
    { path: '/friends', component: Friends },
    { path: '/add-tasks/:assign/:email/:category', component: AddTask, props: true },
    { path: '/add-friends', component: AddFriends },
    { path: '/add-category', component: AddCategory },
    { path: '/edit-task/:name', component: EditTasks, props: true }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to,from) =>{
    if(['/overview', '/tasks/:category', '/friends', '/add-tasks/:assign/:email/:category', '/add-friends', '/add-category', '/edit-task/:name'].includes(to.path)){
        if(!session.user){
            return '/'
        }
    }
})

export default router;