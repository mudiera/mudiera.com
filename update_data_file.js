const fs = require('fs');

try {
  const dataFile = fs.readFileSync('lib/data.ts', 'utf8');
  const lines = dataFile.split('\n');
  
  // Find the index where businesses export starts
  const businessIndex = lines.findIndex(line => line.trim().startsWith('export const businesses = ['));
  
  if (businessIndex === -1) {
    console.error('Could not find businesses export');
    process.exit(1);
  }

  const topPart = lines.slice(0, businessIndex).join('\n');
  const newBusinesses = fs.readFileSync('new_businesses.json', 'utf8');

  const newContent = `${topPart}\nexport const businesses = ${newBusinesses};\n`;

  fs.writeFileSync('lib/data.ts', newContent);
  console.log('Successfully updated lib/data.ts');

} catch (error) {
  console.error('Error:', error);
}
