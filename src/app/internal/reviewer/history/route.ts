import { NextResponse } from "next/server";
import { generateId } from "@/modules/generate-id";
import { validateApiKey } from "@/modules/validate-api-key";
import { DynamoDBClient, PutItemCommand, PutItemCommandInput } from "@aws-sdk/client-dynamodb";

// POST /internal/reviewer/history
export async function POST(req: Request) {
    const validateApiKeyResponse : NextResponse|null = validateApiKey(req);
    if (validateApiKeyResponse != null) {
        return validateApiKeyResponse
    }

    return req.json().then( async (requestBody: any) => {

        if (requestBody["comment"] == null) {
            return NextResponse.json({"status": "error", "message": "request body comment is invalid"}, {status: 400})
        }
        const comment: string = requestBody["comment"]
    
        // make next.js api route source code: generate random nanoid for history
        const historyId: string = generateId()
    
        const client = new DynamoDBClient({ region: process.env.AWS_REGION });
        const input: PutItemCommandInput = {
            TableName: process.env.REVIEW_HISTORY_TABLE_NAME,
            Item: {
                "id": { S: historyId },
                "comment": { S: comment },
            },
        }

        const command = new PutItemCommand(input);
        try {
            const results = await client.send(command);
            console.log(results);

            return NextResponse.json({
                "status": "ok", 
                "id": historyId
            }, {status: 201})
          } catch (err) {
            console.error(err);
            return NextResponse.json({"status": "error", "message": "internal error"}, {status: 500})
        }
    }).catch(e => {
        return NextResponse.json({"status": "error", "message": "request body json is invalid"}, {status: 400})
    })
}