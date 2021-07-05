"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getData = void 0;
const AWS = require("aws-sdk");
const uuid = require("uuid");
async function getData(event, context) {
    console.log(context);
    const { name } = JSON.parse(event.body || '{}');
    const id = uuid.v4();
    // const todo: TodoItem = { id, done: false, createdAt: new Date().toISOString(), name };
    const docClient = new AWS.DynamoDB.DocumentClient();
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
        // item: todo
        })
    };
}
exports.getData = getData;
;
