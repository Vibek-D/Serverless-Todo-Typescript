import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda';
import * as AWS  from 'aws-sdk';
import * as uuid from 'uuid';
import { todoSchema } from '../models/todoItem';
import * as dynamoose from "dynamoose";
dynamoose.aws.ddb.local("http://localhost:8000");

dynamoose.aws.sdk.config.update({
  accessKeyId: 'password',
  secretAccessKey: 'password',
  region: 'password'
});

export type LambdaResponse = {
  statusCode: number;
  headers: {};
  body: string;
}

export async function getData (event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> {
  const data: any = JSON.parse(event['queryStringParameters']['name']);
  console.log(data);

    try {
      var response = await todoSchema.query('name').eq(data).exec();
        console.log(response);
    } catch (error) {
        console.error(error);
    }

    return {
        statusCode: 201,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({
            // item: response
        })
    };
};