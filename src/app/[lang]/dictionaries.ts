import 'server-only'
 
// https://nextjs.org/docs/app/building-your-application/routing/internationalization
// https://www.typescriptlang.org/docs/handbook/2/mapped-types.html
const dictionaries: {[key: string]: any} = {
    ja: () => import('@/dictionaries/ja.json').then((module) => module.default),
    en: () => import('@/dictionaries/en.json').then((module) => module.default),
}
export async function getDictionary(lang: string) : Promise<{[key: string]: any}> {
    return await dictionaries[lang]();
}
