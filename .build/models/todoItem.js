"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoSchema = void 0;
const dynamoose = require("dynamoose");
exports.todoSchema = dynamoose.model("todo", { "id": Number, "name": String, "done": Boolean });
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
