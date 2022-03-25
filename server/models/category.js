let highestId = 5;

const cList = [
    {
        name: "Schedule Plan",
        userID: null, 
        id: 1
    },
    {
        name: "Personal Errands",
        userID: null, 
        id: 2
    },
    {
        name: "Work Projects",
        userID: null, 
        id: 3
    },
    {
        name: "Grocery List",
        userID: null, 
        id: 4
    },
    {
        name: "School",
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
        cList.push(category)
    }
}

module.exports.cList = cList
module.exports.get = get