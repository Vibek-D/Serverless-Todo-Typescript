"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoSchema = void 0;
const dynamoose = require("dynamoose");
exports.todoSchema = dynamoose.model("todo", { "id": String, "name": String, "done": Boolean });
// var Schema = dynamoose.Schema;
// export var UserSchema = new Schema({
//   id: {
//     hashKey: true,
//     type: String
//   },
//   name : {
//     type : String
//   },
//   done : {
//     type : Boolean
//   }
// });
// export dynamoose.model('Users', UserSchema);
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
