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
        },
        async getByID(id: string){
            const category = await api(`categories/${id}`);
            return category.data;
        },
        async getByUser(user: User){
            const category = await api(`categories/user/${user.email}`);
            return category.data;
        },
        async createCategory(category: Category){
            const newCategory = await api('categories', category, 'POST');
            return newCategory.data;
        },
        async removeCategory(id: string){
            const category = await api(`categories/${id}`, {}, 'DELETE');
            return category.data;
        },
        async update(id: string, category: Category){
            const updatedCategory = await api(`categories/${id}`, category, 'PATCH');
            return updatedCategory.data;
        }
    }
})
export interface Category {
    _id: string,
    name: string,
    user: User
}