import fs from 'fs'; 
import {rtrim} from './trim';

export default async function read() {
    let codeSnippet = "";
    for await (const chunk of process.stdin) {
      codeSnippet += chunk;
    }
    const files = process.argv.slice(2)
    if (files.length == 0) {
      process.exit(2)
    }
    for (const f in files) {
      if (!fs.existsSync(files[f])) {
          process.stderr.write(`file ${files[f]} does not exists.`);
          process.exit(2);
      }
    }
    return {
      files,
      codeSnippet : rtrim(codeSnippet),
    }
  }