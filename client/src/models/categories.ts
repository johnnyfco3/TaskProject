export interface Category {
    name: string,
    user: string | null | undefined,
    id: number
}

export const cList: Category[] = [
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