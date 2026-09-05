const fs = require('node:fs/promises');
async function readFile(path) {
  return fs.readFile(path, 'utf8');
}
if (require.main === module) {
  readFile(process.argv[2] || __dirname + '/example.txt')
    .then(console.log)
    .catch((error) => {
      console.error(error.message);
      process.exitCode = 1;
    });
  // Synchronous work finishes first; the I/O callback waits for the event loop.
  let sum = 0;
  for (let i = 0; i < 1000000; i++) sum += i;
  console.log('Synchronous work finished:', sum);
}
module.exports = readFile;
