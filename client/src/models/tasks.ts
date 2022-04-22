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