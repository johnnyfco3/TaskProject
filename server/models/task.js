const userModel = require("./user")
const { db, isConnected, ObjectId } = require('./mongo');

const collection = db.db('taskApp').collection('tasks');

let highestId = 5;

const tList = [
    {
        name: "Call Supervisor",
        details: "",
        category: "Work Projects",
        date: "2022-03-12",
        time: "10:30am",
        completed: false,
        important: true,
        assignedBy: null,
        userID: 1,
    },
    {
        name: "Meeting with team",
        details: "",
        category: "Work Projects",
        date: "2022-01-09",
        time: "1:00pm",
        completed: true,
        important: true,
        assignedBy: 2,
        userID: 1,
    },
    {
        name: "List",
        details: "Bakery and Bread. Meat and Seafood. Pasta and Rice. Oils, Sauces, Salad Dressings, and Condiments. Cereals and Breakfast Foods.",
        category: "Grocery List",
        date: "2022-03-09",
        time: "6:30pm",
        completed: false,
        important: false,
        assignedBy: null,
        userID: 2,
    },
    {
        name: "Study for midterm",
        details: "",
        category: "Schedule Plan",
        date: "2022-03-11",
        time: "2:30pm",
        completed: false,
        important: true,
        assignedBy: 3,
        userID: 2,
    },
    {
        name: "Complete Homework 4 for Calculus",
        details: "",
        category: "School",
        date: "2022-03-16",
        time: "9:00am",
        completed: false,
        important: true,
        assignedBy: null,
        userID: 3,
    }
]

const includeUser = async task => ({ ...task, user: await userModel.get(task.userID) })

async function get(id) {
    const task = await collection.findOne({ _id: new ObjectId(id) });
    if(!task){
        throw { statusCode: 404, message: 'Task not Found' };
    }
    return includeUser(task)
}

async function getByUser(userID) {
    const task = await collection.find({ userID }).toArray();
    if(!task){
        throw { statusCode: 404, message: 'Task not Found' };
    }
    return task.map(includeUser)
}

async function remove(id){
    const task = await collection.findOneAndDelete({ _id: new ObjectId(id) });

    return includeUser(task.value)
}

async function update(id, newTask){
    const task = await collection.findOneAndUpdate(
        { _id: new ObjectId(id) },
        { $set: newTask },
        { returnDocument: 'after' }
    )
    return includeUser(task)
}

function seed(){
    return collection.insertMany(tList);
}

module.exports = {
    collection,
    async create(task){
        task.id = ++highestId
        task.completed = false
        
        const result = await collection.insertOne(task);
        task = await get(result.insertedId);

        return task
    },
    remove,
    update,
    getByUser,
    seed,
    async getList(){
        const tasks = await collection.find().toArray();
        return Promise.all(tasks.map(t => includeUser(t)))
    }
}

module.exports.get = get