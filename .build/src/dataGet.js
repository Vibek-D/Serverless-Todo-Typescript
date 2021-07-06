"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getData = void 0;
const todoItem_1 = require("../models/todoItem");
const dynamoose = require("dynamoose");
dynamoose.aws.ddb.local("http://localhost:8000");
dynamoose.aws.sdk.config.update({
    accessKeyId: 'password',
    secretAccessKey: 'password',
    region: 'password'
});
async function getData(event, context) {
    const data = event['queryStringParameters']['name'];
    console.log(data);
    // try {
    //   var response = await todoSchema.query('name').eq(data).exec();
    //     console.log(response);
    // } catch (error) {
    //     console.error(error);
    // }
    todoItem_1.todoSchema.query("name").eq("Will").exec((error, results) => {
        if (error) {
            console.error(error);
        }
        else {
            console.log(results);
            console.log(results[0]);
            console.log(results.count);
            console.log(Array.isArray(results));
        }
    });
    return {
        statusCode: 201,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({
        // item: response
        })
    };
}
exports.getData = getData;
;
