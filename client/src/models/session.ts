import router from "../router";
import * as users from "../models/users";
import { defineStore } from "pinia";
import { api } from "./myFetch";
import { useMessage } from "./messages";
import { loadScript } from "./utils";

export const useSession = defineStore('session', {
    state: () => ({
        user: undefined as users.User | undefined,
        destinationURL: null as string | null
    }),
    actions: {
        async GoogleLogin(){
            await loadScript('https://accounts.google.com/gsi/client', 'google-signin')
            const auth_client = google.accounts.oauth2.initTokenClient({
                client_id: <string>import.meta.env.VITE_GOOGLE_CLIENT_ID,
                scope: 'email profile',
                callback: async x => {
                    const user = await fetch(`https://www.googleapis.com/oauth2/v3/userinfo`, {
                        headers: {
                            Authorization: `Bearer ${x.access_token}`
                        }
                    }).then(x => x.json())
                    console.log(user)
                    this.user = {
                        _id: user.sub,
                        email: user.email,
                        firstName: user.given_name,
                        lastName: user.family_name,
                        password: '',
                        friends: [],
                    }
                    router.push(this.destinationURL ?? '/overview')
                }
              });
            auth_client.requestAccessToken()
        },
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
            this.user = undefined
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