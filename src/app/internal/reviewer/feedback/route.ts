import { validateApiKey } from '@/modules/validate-api-key';
import { DynamoDBClient, GetItemCommand, GetItemCommandInput, PutItemCommand, PutItemCommandInput } from '@aws-sdk/client-dynamodb';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    const validateApiKeyResponse : NextResponse|null = validateApiKey(req);
    if (validateApiKeyResponse != null) {
        return validateApiKeyResponse
    }

    const { searchParams } = new URL(req.url)
    const historyId: string|null = searchParams.get('id')
    if (historyId == null) {
        return NextResponse.json({"status": "error", "message": "request body comment is invalid"}, {status: 400})
    }

    try {

        const client = new DynamoDBClient({ region: process.env.AWS_REGION });

        const getCommandInput: GetItemCommandInput = {
            TableName: process.env.REVIEW_HISTORY_TABLE_NAME,
            Key: {
                "id": { S: historyId },
            },
        }
        const getCommand = new GetItemCommand(getCommandInput);
        const getCommandResults = await client.send(getCommand);
        console.log(getCommandResults);
        if (getCommandResults == undefined || getCommandResults.Item == undefined) {
            return NextResponse.json({"status": "error", "message": "internal error"}, {status: 500})
        }

        const currentFeedbacks: string|undefined = getCommandResults.Item.feedbacks.N
        const feedbacks: number = currentFeedbacks == undefined ? 1 : Number.parseInt(currentFeedbacks) + 1
        const putCommandInput: PutItemCommandInput = {
            TableName: process.env.REVIEW_HISTORY_TABLE_NAME,
            Item: {
                "id": { S: historyId },
                "feedbacks": { N: Number(feedbacks).toString() }
            },
        }
        const putCommand = new PutItemCommand(putCommandInput);
        await client.send(putCommand);

        return NextResponse.json({
            "status": "ok", 
            "id": historyId,
            "feedbacks": feedbacks,
        }, {status: 200})
      } catch (err) {
        console.error(err);
        return NextResponse.json({"status": "error", "message": "internal error"}, {status: 500})
    }
return NextResponse.json({ status: 'ok' });
}