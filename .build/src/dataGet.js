"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getData = void 0;
const dynamoose = require("dynamoose");
dynamoose.aws.ddb.local("http://localhost:8000");
dynamoose.aws.sdk.config.update({
    accessKeyId: 'password',
    secretAccessKey: 'password',
    region: 'password'
});
async function getData(event, context) {
    const data = JSON.parse(event['queryStringParameters']['name']);
    console.log(data);
    // try {
    //   var response = await todoSchema.query(name).eq("Will").exec();
    //     console.log(response);
    // } catch (error) {
    //     console.error(error);
    // }
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
