const userModel = require("./user")

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
        id: 1
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
        id: 2
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
        id: 3
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
        id: 4
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
        userID: 1,
        id: 5
    }
]

const includeUser = task => ({ ...task, user: userModel.get(task.userID) })

function get(id) {
    const task = tList.find(task => task.id === parseInt(id)) 
    if(!task){
        throw { statusCode: 404, message: 'Task not Found' };
    }
    return includeUser(task)
}

function remove(id){
    const index = tList.findIndex(task => task.id === parseInt(id))
    const task = tList.splice(index, 1)

    return includeUser(task[0])
}

function update(id, newTask){
    const index = tList.findIndex(task => task.id === parseInt(id))
    const oldTask = tList[index]

    newTask = tList[index] = { ...oldTask, ...newTask }

    return includeUser(newTask)
}

module.exports = {
    create(task){
        task.id = ++highestId
        task.completed = false
        tList.push(task)
        return task
    },
    remove,
    update,
    get list(){
        return tList.map(t => includeUser(t))
    }
}

module.exports.get = get