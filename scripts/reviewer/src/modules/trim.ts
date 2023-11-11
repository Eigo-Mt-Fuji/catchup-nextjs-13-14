export function rtrim(str: string) : string {
    return str.replace(/\r?\n$/g, "")
}
