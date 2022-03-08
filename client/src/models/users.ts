export interface User {
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    id: Number
}

export const list: User[] = [
    {
        firstName: 'Johnny',
        lastName: 'Tejada',
        email: 'example@gmail.com',
        password: 'password',
        id: 1
    },
    {
        firstName: 'Vladimir',
        lastName: 'Putin',
        password: 'long table',
        email: 'john@doe.com',
        id: 2
    },
    {
        firstName: 'Kamala',
        lastName: 'Harris',
        password: 'password',
        email: 'kamila@whitehouse.org',
        id: 3
    }
]