import { NextResponse } from "next/server"

export function validateApiKey(req: Request): NextResponse|null {
    // make next.js api route source code: get x-api-key header from request header 
    const xApiKey: string|null = req.headers.get("x-api-key")
    if (xApiKey == null) {
        return NextResponse.json({"status": "error", "message": "x-api-key header is required"}, {status: 401})
    }

    // make next.js api route source code: check x-api-key header is allowed value
    const configApiKey = process.env.API_KEY
    if (xApiKey != configApiKey ) {
        return NextResponse.json({"status": "error", "message": "x-api-key header is invalid"}, {status: 401})
    }
    return null
}