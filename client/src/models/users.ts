export interface User {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    friends: any,
    id: number
}

export const list: User[] = [
    {
        firstName: 'Johnny',
        lastName: 'Tejada',
        email: 'example@gmail.com',
        password: 'password',
        friends: ['john@doe.com', 'kamila@whitehouse.org'],
        id: 1
    },
    {
        firstName: 'Vladimir',
        lastName: 'Putin',
        password: 'long table',
        email: 'john@doe.com',
        friends: ['example@gmail.com', 'kamila@whitehouse.org'],
        id: 2
    },
    {
        firstName: 'Kamala',
        lastName: 'Harris',
        password: 'password',
        email: 'kamila@whitehouse.org',
        friends: ['example@gmail.com', 'john@doe.com'],
        id: 3
    }
]