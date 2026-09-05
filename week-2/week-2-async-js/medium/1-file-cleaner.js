const fs = require('node:fs/promises');
async function cleanFile(path) {
  const text = await fs.readFile(path, 'utf8');
  const cleaned = text.trim().replace(/\s+/g, ' ');
  await fs.writeFile(path, cleaned, 'utf8');
  return cleaned;
}
if (require.main === module)
  cleanFile(process.argv[2] || __dirname + '/example.txt')
    .then(console.log)
    .catch((error) => {
      console.error(error.message);
      process.exitCode = 1;
    });
module.exports = cleanFile;
