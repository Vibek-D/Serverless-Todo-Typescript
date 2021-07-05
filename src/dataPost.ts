import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda';
import * as AWS  from 'aws-sdk';
import * as uuid from 'uuid';
import { todoSchema } from '../models/todoItem';
var dynamoose = require('dynamoose');
dynamoose.local('http://localhost:8000');

export type LambdaResponse = {
  statusCode: number;
  headers: {};
  body: string;
}

export async function postData (event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> {
  const data = JSON.parse(event.body || '{}');
  const name: String = data.name;
  const done: Boolean = data.done;
  try {
    var newData = await todoSchema.create({ id: uuid.v4(), name: name, done: done });
    console.log(newData);
    } catch (error) {
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
};