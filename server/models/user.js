const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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
    const user = list.find(user => user.id === parseInt(id))
    if(!user){
        throw { statusCode: 404, message: 'User not Found' };
    }
    return { ...user, password: undefined };
}

function getByEmail(email){
    const user = list.find(user => user.email === email);
    if(!user){
        throw { statusCode: 404, message: 'User not Found' };
    }
    return { ...user, password: undefined };
}

function remove(id){
    const index = list.findIndex(user => user.id === parseInt(id));
    const user = list.splice(index, 1);
    
    return { ...user[0], password: undefined };
}

function removeFriends(id, friends){
    const index = list.findIndex(user => user.id === parseInt(id));
    const user = list[index];
    user.friends = user.friends.filter(friend => !friends.includes(friend));
    return { ...user[0], password: undefined };
}

function addFriends(id, friend){
    const index = list.findIndex(user => user.id === parseInt(id));
    const user = list[index];
    user.friends.push(friend);
    return { ...user };
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

async function login(email, password){
    const user = list.find(user => user.email === email);
    if(!user){
        throw { statusCode: 404, message: 'User not Found' };
    }
    if(!await bcrypt.compare(password, user.password)){
        throw { statusCode: 401, message: 'Invalid Password' };
    }

    const data = { ...user, password: undefined };
    const token = jwt.sign(data, process.env.JWT_SECRET);
    return { ...data, token };
}

function fromToken(token){
    return new Promise((resolve, reject) => {
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if(err){
                reject(err);
            }
            resolve(decoded);
        });
    })
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
    login,
    fromToken,
    removeFriends,
    addFriends,
    getByEmail,
    get list(){
        return list.map(user => ({...user, password: undefined}))
    }
}

module.exports.get = get