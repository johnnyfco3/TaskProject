import router from "../router";

const session = {
    user: null as any
};

export async function Login(email: String, password: String) {
    session.user = {email, password}
    router.push('/overview')
}

export default session;