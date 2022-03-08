import router from "../router";
import * as users from "../models/users";
import { reactive } from "vue";

const session = reactive({
    user: null as users.User | null
});

export async function Login(email: String, password: String) {
    const user = users.list.find(u => u.email === email)

    if(!user){
        throw {message: 'No user account found.'}
    }

    if(user.password !== password){
        throw {message: 'Incorrect Password.'}
    }

    session.user = user
    router.push('/overview')
}

export function Logout(){
    session.user = null
}

export default session;