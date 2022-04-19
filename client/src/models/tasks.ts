import { defineStore } from "pinia"
import { api } from "./myFetch"
import { User } from "./users";

export const useTasks = defineStore('tasks', {
    state: () => ({
        list: [] as Task[],
    }),
    actions: {
        async fetchTasks(){
            const tasks = await api('tasks');
            this.list = tasks.data;
        },
        async getByID(id: string){
            const task = await api(`tasks/${id}`);
            return task.data;
        },
        async getByUser(user: User){
            const task = await api(`tasks/user/${user.email}`);
            return task.data;
        },
        async createTask(task: Task){
            const newTask = await api('tasks', task, 'POST');
            return newTask.data;
        },
        async removeTasks(id: string){
            const task = await api(`tasks/${id}`, {}, 'DELETE');
            return task.data;
        },
        async update(id: string, task: Task){
            const updatedTask = await api(`tasks/${id}`, task, 'PATCH');
            return updatedTask.data;
        }
    }
})

export interface Task {
    _id: string,
    name: string,
    details: string
    category: string,
    date: string,
    time: string,
    completed: boolean,
    important: boolean,
    assignedBy: string | null | undefined,
    user: User
}