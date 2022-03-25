export interface Category {
    name: string,
    userID: number | null | undefined,
    id: number
}

export const cList: Category[] = [
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