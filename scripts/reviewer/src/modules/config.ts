export default function loadConfig() {
    return {
        OPENAI_API_KEY: `${process.env.OPENAI_API_KEY}`,
        GITHUB_TOKEN: `${process.env.GITHUB_TOKEN}`,
    }
}

