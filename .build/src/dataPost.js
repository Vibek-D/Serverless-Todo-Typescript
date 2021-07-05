"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postData = void 0;
const uuid = require("uuid");
const todoItem_1 = require("../models/todoItem");
const dynamoose = require("dynamoose");
dynamoose.aws.ddb.local("http://localhost:8000");
// var options = {
//     region: 'localhost',
//     endpoint: 'http://localhost:8000',
// };
// const docClient = new AWS.DynamoDB.DocumentClient(options);
dynamoose.aws.sdk.config.update({
    accessKeyId: 'password',
    secretAccessKey: 'password',
    region: 'password'
});
async function postData(event, context) {
    const data = JSON.parse(event.body || '{}');
    const name = data.name;
    const done = data.done;
    console.log(data);
    const myUser = new todoItem_1.todoSchema({
        "id": uuid.v4(),
        "name": name,
        "done": done
    });
    try {
        await myUser.save();
        console.log("Save operation was successful");
    }
    catch (error) {
        console.error(error);
    }
    //   try {
    //     var newData = await todoSchema.create({ id: uuid.v4(), name: name, done: done });
    //     console.log(newData);
    //     } catch (error) {
    //     console.error(error);
    //     }
    //   const docClient = new AWS.DynamoDB.DocumentClient();
    //   const todo: todoSchema = { id, done: false, createdAt: new Date().toISOString(), name };
    //   await docClient.put({
    //     TableName: process.env.TODOS_TABLE,
    //     Item: todo
    //   }).promise();
    return {
        statusCode: 201,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({
            item: myUser
        })
    };
}
exports.postData = postData;
;
