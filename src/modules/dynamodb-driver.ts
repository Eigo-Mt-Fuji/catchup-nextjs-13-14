import { DynamoDBClient } from "@aws-sdk/client-dynamodb";

export function createDynamoDBClient() : DynamoDBClient|undefined {
  if (process.env.APP_AWS_REGION === undefined || process.env.APP_AWS_ACCESS_KEY_ID == undefined || process.env.APP_AWS_SECRET_ACCESS_KEY == undefined) {
    return undefined;
  }
  const config = {
    region: process.env.APP_AWS_REGION,
    credentials: {
      accessKeyId: process.env.APP_AWS_ACCESS_KEY_ID, 
      secretAccessKey: process.env.APP_AWS_SECRET_ACCESS_KEY,
    },
    endpoint: `https://dynamodb.${process.env.APP_AWS_REGION}.amazonaws.com`,
  }
  return new DynamoDBClient(config);
}