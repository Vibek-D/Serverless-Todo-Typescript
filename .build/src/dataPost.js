"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postData = void 0;
const uuid = require("uuid");
const todoItem_1 = require("../models/todoItem");
async function postData(event, context) {
    const data = JSON.parse(event.body || '{}');
    const id = uuid.v4();
    console.log(data);
    // const docClient = new AWS.DynamoDB.DocumentClient();
    // const todo: todoSchema = { id, done: false, createdAt: new Date().toISOString(), name };
    // await docClient.put({
    //   TableName: process.env.TODOS_TABLE,
    //   Item: todo
    // }).promise();
    return {
        statusCode: 201,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({
            item: todoItem_1.todoSchema
        })
    };
}
exports.postData = postData;
;
