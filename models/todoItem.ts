import * as dynamoose from "dynamoose";

export const todoSchema = new dynamoose.Schema({
    "id": String,
    "name": String,
    "done": Boolean,
});

// export interface TodoItem {
//     id: string
//     name: string
//     done: boolean
//     createdAt: string
// }