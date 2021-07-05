import * as dynamoose from "dynamoose";

export const todoSchema = dynamoose.model("todo", {"id":Number, "name": String, "done": Boolean});

// export const todoSchema = new dynamoose.Model({
//     "id": String,
//     "name": String,
//     "done": Boolean,
// });

// export interface TodoItem {
//     id: string
//     name: string
//     done: boolean
//     createdAt: string
// }