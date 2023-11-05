import read from './modules/reader';
async function main() {
    const data = await read();
    // process all the data and write it back to stdout
    process.stdout.write(JSON.stringify(data));
}
  
main();
