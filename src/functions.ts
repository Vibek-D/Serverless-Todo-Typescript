import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda';
// import { LambdaResponse } from '../types/types';

export type LambdaResponse = {
  statusCode: number;
  headers: {};
  body: string;
}

export async function ping (event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> {
  console.log(event.headers);
  console.log(context);
  
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify('Hello from Typed-Lambda'),
  }
};