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

function update(id, newUser){
    const index = list.findIndex(user => user.id === parseInt(id));
    const oldUser = list[index];
    newUser = list[index] = {...oldUser, ...newUser};
    return { ...newUser, password: undefined };
}

module.exports = {
    create(user){
        user.id = ++highestId
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