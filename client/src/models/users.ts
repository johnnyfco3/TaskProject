import { defineStore } from "pinia"
import { api } from "./myFetch"
import { useSession } from "./session";

export const useUsers = defineStore('users', {
    state: () => ({
        list: [] as User[],
        session: useSession(),
    }),
    actions: {
        async fetchUsers(){
            const users = await api('users');
            this.list = users.data;
        },
        async createUser(user: User){
            const newUser = await api('users', user, 'POST');
            return newUser.data;
        },
        async searchByEmail(email: string){
            const search = await this.session.api(`users/search/email/${email}`);
            return search;
        },
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