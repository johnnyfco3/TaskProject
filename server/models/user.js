const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { db, isConnected, ObjectId } = require('./mongo');

const collection = db.db('taskApp').collection('users');

const list = [
    {
        firstName: 'Johnny',
        lastName: 'Tejada',
        email: 'example@gmail.com',
        password: 'password',
        friends: ['john@doe.com', 'kamila@whitehouse.org'],
    },
    {
        firstName: 'Vladimir',
        lastName: 'Putin',
        password: 'long table',
        email: 'john@doe.com',
        friends: ['example@gmail.com', 'kamila@whitehouse.org'],
    },
    {
        firstName: 'Kamala',
        lastName: 'Harris',
        password: 'password',
        email: 'kamila@whitehouse.org',
        friends: ['example@gmail.com', 'john@doe.com'],
    }
]

async function get(id) {
    const user = await collection.findOne({ _id: new ObjectId(id) });
    if(!user){
        throw { statusCode: 404, message: 'User not Found' };
    }
    return { ...user, password: undefined };
}

async function getByEmail(email){
    const user = await collection.findOne({email});
    if(!user){
        throw { statusCode: 404, message: 'User not Found' };
    }
    return { ...user, password: undefined };
}

async function remove(id){
    const user = await collection.findOneAndDelete({ _id: new ObjectId(id) });

    return { ...user.value, password: undefined };
}

async function removeFriends(id, friend){
    const result = await collection.updateOne(
        { _id: new ObjectId(id) },
        { $pull: { friends: { $in: friend } } },
        { returnDocument: 'after' }
    )
    return { ...result.value, password: undefined };
}

async function addFriends(id, newFriend){
    const result = await collection.updateOne(
        { _id: new ObjectId(id) },
        { $addToSet: { friends: newFriend } },
        { returnDocument: 'after' }
    )
    return { ...result.value, password: undefined };
}

async function update(id, newUser){
    const result = await collection.findOneAndUpdate(
        { _id: new ObjectId(id) },
        { $set: newUser },
        { returnDocument: 'after' }
    )
    return { ...result, password: undefined };
}

async function login(email, password){
    const user = collection.findOne({ email });

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

function seed(){
    return collection.insertMany(list);
}

module.exports = {
    collection,
    async create(user){

        if(!user.email){
            throw { statusCode: 400, message: 'Email is required' };
        }        

        user.password = await bcrypt.hash(user.password, +process.env.SALT_ROUNDS);

        const result = await collection.insertOne(user);
        user = await get(result.insertedId);

        return {...user, password: undefined};
    },
    remove, 
    update,
    login,
    fromToken,
    removeFriends,
    addFriends,
    getByEmail,
    seed,
    async getList(){
        return (await collection.find().toArray()).map(user => ({ ...user, password: undefined }));
    }
}

module.exports.get = get