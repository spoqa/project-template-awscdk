/// Entry point of the handler of AWS Lambda function.
import { Handler } from 'aws-lambda';

export const handler: Handler = (event, context, callback) => {
    callback(undefined, 42);
};
