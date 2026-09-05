const fs = require('node:fs/promises');
async function writeFile(path, content) {
  await fs.writeFile(path, content, 'utf8');
}
if (require.main === module)
  writeFile(
    process.argv[2] || __dirname + '/example.txt',
    process.argv[3] || 'Hello from asynchronous JavaScript!\n',
  ).catch((error) => {
    console.error(error.message);
    process.exitCode = 1;
  });
module.exports = writeFile;
