"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ping = void 0;
const AWS = require("aws-sdk");
const uuid = require("uuid");
async function ping(event, context) {
    console.log(context);
    const { name } = JSON.parse(event.body || '{}');
    const id = uuid.v4();
    const todo = { id, done: false, createdAt: new Date().toISOString(), name };
    const docClient = new AWS.DynamoDB.DocumentClient();
    // await docClient.put({
    //   TableName: process.env.TODOS_TABLE,
    //   Item: todo
    // }).promise();
    return {
        statusCode: 201,
        body: JSON.stringify({
            item: todo
        })
    };
    // return {
    //   statusCode: 200,
    //   headers: {
    //     'Access-Control-Allow-Origin': '*',
    //   },
    //   body: JSON.stringify('Hello from Typed-Lambda'),
    // }
}
exports.ping = ping;
;
