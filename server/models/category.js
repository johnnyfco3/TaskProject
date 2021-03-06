const userModel = require('./user')
const { db, isConnected, ObjectId } = require('./mongo');

const collection = db.db('taskApp').collection('categories');

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

const includeUser = async category => ({ ...category, user: await userModel.getByEmail(category.user) })

async function get(id) {
    const category = await collection.findOne({ _id: new ObjectId(id) });
    if(!category){
        throw { statusCode: 404, message: 'Category not Found' };
    }
    
    return category.user ? includeUser(category) : category;
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

async function removeByUser(user){
    return await collection.deleteMany({ user });
}

async function update(id, newCategory){
    const category = await collection.findOneAndUpdate(
        { _id: new ObjectId(id) },
        { $set: newCategory },
        { returnDocument: 'after' }
    );

    return category.user ? includeUser(category.value) : { ...category.value }; 
}

function seed(){
    return collection.insertMany(cList);
}

module.exports = {
    collection,
    async create(category){
        
        const result = await collection.insertOne(category);
        category = await get(result.insertedId);

        return category
    },
    remove,
    removeByUser,
    update,
    getByUser,
    seed,
    async getList(){
        const category = await collection.find().toArray();
        return Promise.all( category.map(c => c.user ? includeUser(c) : c) )
    }
}

module.exports.get = get