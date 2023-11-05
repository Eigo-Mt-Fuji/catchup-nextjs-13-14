export interface ReviewerAppConfig {
    OPENAI_API_KEY: string
    GITHUB_TOKEN: string
}
export default function loadConfig() :ReviewerAppConfig {
    return {
        OPENAI_API_KEY: `${process.env.OPENAI_API_KEY}`,
        GITHUB_TOKEN: `${process.env.GITHUB_TOKEN}`,
    }
}

