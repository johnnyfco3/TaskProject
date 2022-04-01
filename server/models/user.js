const bcrypt = require('bcrypt');
let highestId = 3;

const list = [
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

function get(id) {
    return { ...list.find(user => user.id === parseInt(id)), password: undefined };
}

function remove(id){
    const index = list.findIndex(user => user.id === parseInt(id));
    const user = list.splice(index, 1);
    
    return { ...user[0], password: undefined };
}

async function update(id, newUser){
    const index = list.findIndex(user => user.id === parseInt(id));
    const oldUser = list[index];

    if(newUser.password){
        newUser.password = await bcrypt.hash(newUser.password, +process.env.SALT_ROUNDS);
    }

    newUser = list[index] = {...oldUser, ...newUser};
    return { ...newUser, password: undefined };
}

module.exports = {
    async create(user){
        user.id = ++highestId

        user.password = await bcrypt.hash(user.password, +process.env.SALT_ROUNDS);

        list.push(user)
        return user
    },
    remove, 
    update,
    get list(){
        return list.map(user => ({...user, password: undefined}))
    }
}

module.exports.get = get