import maskData from 'maskdata';

export default function mask(v: any) {
    
    return  maskData.maskJSON2(v, {
        passwordFields: ['OPENAI_API_KEY', 'GITHUB_TOKEN'],
    });
}