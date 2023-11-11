export interface ReviewerAppConfig {
    OPENAI_API_KEY: string
    GITHUB_TOKEN: string
}
export default function loadConfig() :ReviewerAppConfig {
    if (process.env.OPENAI_API_KEY == undefined || process.env.OPENAI_API_KEY == "") {
        console.log("env OPENAI_API_KEY should be set")
        process.exit(2)
    }
    return {
        OPENAI_API_KEY: `${process.env.OPENAI_API_KEY}`,
        GITHUB_TOKEN: `${process.env.GITHUB_TOKEN}`,
    }
}

