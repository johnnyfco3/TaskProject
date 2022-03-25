let highestId = 5;

const cList = [
    {
        name: "Schedule Plan",
        total: 0,
        userID: null, 
        id: 1
    },
    {
        name: "Personal Errands",
        total: 0,
        userID: null, 
        id: 2
    },
    {
        name: "Work Projects",
        total: 2,
        userID: null, 
        id: 3
    },
    {
        name: "Grocery List",
        total: 0,
        userID: null, 
        id: 4
    },
    {
        name: "School",
        total: 0,
        userID: null, 
        id: 5
    }
]

function get(id) {
    return cList.find(c => c.id == id)
}

module.exports = {
    create(category){
        category.id = ++highestId
        category.total = 0
        cList.push(category)
    }
}

module.exports.cList = cList
module.exports.get = get