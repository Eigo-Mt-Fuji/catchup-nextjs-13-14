import read from './modules/reader';
import loadConfig from './modules/config';
import mask from './modules/mask';
import {infoLog, errorLog} from './modules/logger';
import requestReview,{ generateChatCompletionMessages } from './modules/request_review';
async function main() {
    const data = await read();
    const config = loadConfig();
    const messages = generateChatCompletionMessages(data.codeSnippet);
    const reply = await requestReview(config, messages)
    console.log(reply);
}

main();
