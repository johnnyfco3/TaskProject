const userModel = require('./user')

let highestId = 5;

const cList = [
    {
        name: "Schedule Plan",
        user: null, 
        id: 1
    },
    {
        name: "Personal Errands",
        user: null, 
        id: 2
    },
    {
        name: "Work Projects",
        user: null, 
        id: 3
    },
    {
        name: "Grocery List",
        user: null, 
        id: 4
    },
    {
        name: "School",
        user: null, 
        id: 5
    }
]

const includeUser = (category) => ({ ...category, user: userModel.getByEmail(category.user) })

function get(id) {
    const category = cList.find(c => c.id == id)
    if(!category){
        throw { statusCode: 404, message: 'Category not Found' };
    }
    return { ...category }
}

function getByUser(email){
    const categories = cList.filter(c => c.user === email)
    return categories.map(category => includeUser(category))
}

function remove(id){
    const index = cList.findIndex(c => c.id == id)
    const category = cList.splice(index, 1)

    return { ...category[0] }
}

function update(id, newCategory){
    const index = cList.findIndex(c => c.id == id)
    const oldCategory = cList[index]

    newCategory = cList[index] = { ...oldCategory, ...newCategory }

    return { ...newCategory }
}

module.exports = {
    create(category){
        category.id = ++highestId
        cList.push(category)
        return category
    },
    remove,
    update,
    getByUser
}

module.exports.cList = cList
module.exports.get = get