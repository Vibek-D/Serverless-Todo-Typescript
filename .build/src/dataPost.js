"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postData = void 0;
const uuid = require("uuid");
const todoItem_1 = require("../models/todoItem");
let dynamoose = require('dynamoose');
dynamoose.local('http://localhost:8000');
async function postData(event, context) {
    const data = JSON.parse(event.body || '{}');
    const name = data.name;
    const done = data.done;
    try {
        var newData = await todoItem_1.todoSchema.create({ id: uuid.v4(), name: name, done: done });
        console.log(newData);
    }
    catch (error) {
        console.error(error);
    }
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
            item: newData
        })
    };
}
exports.postData = postData;
;
