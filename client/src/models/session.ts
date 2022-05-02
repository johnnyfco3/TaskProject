import router from "../router";
import * as users from "../models/users";
import { defineStore } from "pinia";
import { api } from "./myFetch";
import { useMessage } from "./messages";

export const useSession = defineStore('session', {
    state: () => ({
        user: null as users.User | null,
        destinationURL: null as string | null
    }),
    actions: {
        async Login(email: string, password: string) {
            const messages = useMessage()

            try {
                const user = await this.api("users/login", { email, password } )
                if(user){
                    messages.notifications.push({
                        type: "success",
                        message: "Successfully logged in"
                    })
                    this.user = user
                    router.push(this.destinationURL ?? '/overview')
                }
                else{
                    messages.notifications.push({
                        type: "danger",
                        message: "Invalid email or password"
                    })
                }
            } catch (error: any) {
                messages.notifications.push({
                    type: "danger",
                    message: error.message
                })
            }
        },
        Logout(){
            this.user = null
            router.push('/')
        },
        async api(url: string, data?: any, method?: 'POST' | 'PATCH' | 'DELETE' | 'GET', headers: any = {}) {
            const messages = useMessage()

            if(this.user?.token){
                headers.Authorization = `Bearer ${this.user.token}`
            }

            try{
                const response = await api(url, data, method, headers)
                if(response.errors?.length){
                    throw {message: response.errors[0].message}
                }
                return await response.data
            } catch (error: any) {
                messages.notifications.push({
                    type: "danger",
                    message: error.message
                })
            }
        }
    }
});