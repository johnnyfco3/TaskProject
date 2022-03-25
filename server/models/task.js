let highestId = 5;

const tList = [
    {
        name: "Call Supervisor",
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
        name: "List: Bakery and Bread. Meat and Seafood. Pasta and Rice. Oils, Sauces, Salad Dressings, and Condiments. Cereals and Breakfast Foods.",
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

function get(id) {
    return tList.find(task => task.id === id)
}

module.exports = {
    create(task){
        task.id = ++highestId
        task.completed = false
        tList.push(task)
        return task
    }
}

module.exports.tList = tList
module.exports.get = get