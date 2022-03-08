export interface Category {
    name: String,
    total: Number,
    userID: Number | null,
    id: Number
}

export const cList: Category[] = [
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