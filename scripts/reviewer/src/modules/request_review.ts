
import OpenAI from 'openai';
import {ChatCompletionMessageParam, ChatCompletionRole} from 'openai/resources/index';
import {ReviewerAppConfig} from './config';

export function generateChatCompletionMessages(q: string) :Array<ChatCompletionMessageParam>{
    const role: ChatCompletionRole = 'user'
    return [
        {
            content: q,
            role,
        } as ChatCompletionMessageParam,
    ]
}
// ChatGPT API にコードレビュー依頼のリクエストをして結果を受け取る
export default async function requestReview(config: ReviewerAppConfig, messages: Array<ChatCompletionMessageParam>) :Promise<String|null>{
    const openai = new OpenAI({
        apiKey: config.OPENAI_API_KEY,
    });
    const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
            {
                role: 'system',
                content: `
                You must respect the following rules:
                1. Please gather all necessary information from the internet as much as possible.
                2. Answer in Japanese and you don't have to use honorifics.
              `,
            },
            ...messages,
        ],
    });

    const reply = response.choices[0].message.content;
    return reply ?? null;
}