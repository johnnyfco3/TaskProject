import { defineStore } from "pinia"
import { api } from "./myFetch"
import { User } from "./users";

export const useCategories = defineStore('categories', {
    state: () => ({
        list: [] as Category[],
    }),
    actions: {
        async fetchCategories(){
            const categories = await api('categories');
            this.list = categories.data;
        }
    }
})
export interface Category {
    _id: string,
    name: string,
    user: User
}