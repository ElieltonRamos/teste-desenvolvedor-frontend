import * as fs from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const readFile = async () => {
  const filePath = join(__dirname, '../coverage/coverage-summary.json');
  const jsonFile = await fs.readFile(filePath, 'utf-8');
  const coverageFile = JSON.parse(jsonFile)
  return coverageFile;
};

const test = await readFile();
const actualCovarage = test.total.statements.pct;
const expectedCovarage = 80;
if (actualCovarage < expectedCovarage) {
  throw Error(`Coverage is ${actualCovarage}%, expected ${expectedCovarage}%`);
}
console.log(`Coverage is ${actualCovarage}%`);