import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda';
import * as AWS  from 'aws-sdk';
import * as uuid from 'uuid';
import { TodoItem } from '../models/todoItem';

export type LambdaResponse = {
  statusCode: number;
  headers: {};
  body: string;
}

export async function ping (event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> {
  console.log(context);
  const { name }:any = JSON.parse(event.body || '{}');
  const id:any = uuid.v4();
  const todo: TodoItem = { id, done: false, createdAt: new Date().toISOString(), name };
  const docClient = new AWS.DynamoDB.DocumentClient();

  await docClient.put({
    TableName: process.env.TODOS_TABLE,
    Item: todo
  }).promise();

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
};