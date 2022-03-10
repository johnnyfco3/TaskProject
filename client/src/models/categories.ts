export interface Category {
    name: string,
    total: number,
    userID: number | null,
    id: number
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