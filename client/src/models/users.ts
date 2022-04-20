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
        async getByID(id: string){
            const user = await api(`users/${id}`);
            return user.data;
        },
        async getByEmail(email: string){
            const user = await api(`users/email/${email}`);
            return user.data;
        },
        async createUser(user: User){
            const newUser = await api('users', user, 'POST');
            return newUser.data;
        },
        async addFriends(userID: string, friend: string){
            const newUser = await api(`users/addFriend/${userID}`, {friend}, 'POST');
            console.log(newUser)
            return newUser.data;
        },
        async login(email: string, password: string){
            const user = await api(`users/login`, {email, password}, 'POST');
            return user.data;
        },
        async remove(id: string){
            const user = await api(`users/${id}`, null, 'DELETE');
            return user.data;
        },
        async removeFriend(userID: string, friend: string){
            const user = await api(`users/friend/${userID}`, {friend}, 'DELETE');
            return user.data;
        },
        async update(id: string, user: User){
            const updatedUser = await api(`users/${id}`, user, 'PATCH');
            return updatedUser.data;
        }
    }
})

export interface User {
    _id: string;
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    friends: string[]
}