import read from './modules/reader';
import loadConfig from './modules/config';
import mask from './modules/mask';
import {infoLog, errorLog} from './modules/logger';
async function main() {
    const data = await read();
    const config = loadConfig();
    // process all the data and write it back to stdout
    infoLog(data);
    infoLog(mask(config));
}

main();
