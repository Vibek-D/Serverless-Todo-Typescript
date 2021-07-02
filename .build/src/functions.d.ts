import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda';
export declare type LambdaResponse = {
    statusCode: number;
    headers: {};
    body: string;
};
export declare function ping(event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult>;
