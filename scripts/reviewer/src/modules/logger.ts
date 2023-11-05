import pino from "pino";
const logger = pino()
export function infoLog(msg: any) {
    logger.info(msg)
}
export function errorLog(msg: any) {
    logger.error(msg)
}