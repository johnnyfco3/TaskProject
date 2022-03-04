import {createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Welcome from '../pages/Welcome.vue'
import Register from '../pages/Register.vue'
import Overview from '../pages/Overview.vue'
import Tasks from '../pages/Tasks.vue'
import Friends from '../pages/Friends.vue'
import AddTask from '../pages/AddTask.vue'
import AddFriends from '../pages/AddFriends.vue'
import AddCategory from '../pages/AddCategory.vue'

const routes: RouteRecordRaw[] = [
    { path: '/', component: Welcome },
    { path: '/register', component: Register },
    { path: '/overview', component: Overview },
    { path: '/tasks', component: Tasks },
    { path: '/friends', component: Friends },
    { path: '/add-tasks', component: AddTask },
    { path: '/add-friends', component: AddFriends },
    { path: '/add-category', component: AddCategory }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;