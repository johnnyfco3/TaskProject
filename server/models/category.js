const userModel = require('./user')
const { db, isConnected, ObjectId } = require('./mongo');

const collection = db.db('taskApp').collection('categories');

let highestId = 5;

const cList = [
    {
        name: "Schedule Plan",
        user: null, 
    },
    {
        name: "Personal Errands",
        user: null, 
    },
    {
        name: "Work Projects",
        user: null, 
    },
    {
        name: "Grocery List",
        user: null, 
    },
    {
        name: "School",
        user: null, 
    }
]

const includeUser = (category) => ({ ...category, user: userModel.getByEmail(category.user) })

async function get(id) {
    const category = await collection.findOne({ _id: new ObjectId(id) });
    if(!category){
        throw { statusCode: 404, message: 'Category not Found' };
    }
    return includeUser(category)
}

async function getByUser(email){
    const categories = await collection.find({ user: email }).toArray();
    if(!categories){
        throw { statusCode: 404, message: 'Categories not Found' };
    }
    return categories.map(includeUser)
}

async function remove(id){
    const category = await collection.findOneAndDelete({ _id: new ObjectId(id) });

    return { ...category.value }
}

async function update(id, newCategory){
    const category = await collection.findOneAndUpdate(
        { _id: new ObjectId(id) },
        { $set: newCategory }
    );

    return includeUser(category.value)
}

function seed(){
    return collection.insertMany(cList);
}

module.exports = {
    create(category){
        category.id = ++highestId
        cList.push(category)
        return category
    },
    remove,
    update,
    getByUser,
    seed,
    async getList(){
        return (await collection.find().toArray()).map(c => includeUser(c))
    }
}

module.exports.get = get