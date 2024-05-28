import { Timestamp } from "firebase/firestore";

export const sampleData = [
    {
        id: '1',
        name: "Leanne Graham",
        company: "Romaguera-Crona",
        visiting: "Jayla Waters",
        date: Timestamp.now()
    },
    {
        id: '2',
        name:'Miley Stephenson',
        company: 'Vivid Visions',
        visiting: "Bob Doe",
        date: Timestamp.now()
    },
    {
        id: '3',
        name:'Janelle Morton',
        company: 'Swift Signal Systems',
        visiting: 'Pete Smith',
        date: Timestamp.now()
    }
]