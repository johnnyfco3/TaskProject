import { defineStore } from "pinia"
import { api } from "./myFetch"

export const useUsers = defineStore('users', {
    state: () => ({
        list: [] as User[],
    }),
    actions: {
        async fetchUsers(){
            const users = await api('users');
            this.list = users.data;
        },
        async createUser(user: User){
            const newUser = await api('users', user, 'POST');
            return newUser.data;
        }
    }
})

export interface User {
    _id?: string;
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    friends: string[],
    token?: string
}