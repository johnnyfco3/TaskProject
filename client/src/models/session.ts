import router from "../router";
import * as users from "../models/users";
import { defineStore } from "pinia";
import { api } from "./myFetch";

export const useSession = defineStore('session', {
    state: () => ({
        user: null as users.User | null,
        destinationURL: null as string | null,
        message: {
            type: null as "danger" | "success" | "warning" | "info" | null,
            text: null as string | null
        }
    }),
    actions: {
        async Login(email: string, password: string) {
            // const users = useUsers()
            try {
                const user = await this.api("/users/login", { email, password } )
                if(user){
                    this.message.type = "success";
                    this.message.text = "Successfully logged in";
                    this.user = user
                    router.push(this.destinationURL ?? '/overview')
                }
            } catch (error: any) {
                this.message.type = "danger";
                this.message.text = error.message;
            }
        },
        Logout(){
            this.user = null
            router.push('/')
        },
        async api(url: string, data?: any, method?: 'POST' | 'PUT' | 'DELETE' | 'GET', headers?: any) {
            try{
                const response = await api(url, data, method, headers)
                if(response.errors?.length){
                    throw {message: response.errors[0].message}
                }
                return await response.data
            } catch (error: any) {
                this.message.type = "danger";
                this.message.text = error.message;
            }
        }
    }
});