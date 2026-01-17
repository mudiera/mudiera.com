const fs = require('fs');
const path = require('path');

const businessesPath = path.join(__dirname, 'businesses.json');
const dataPath = path.join(__dirname, 'lib', 'data.ts');

try {
  const businessesRaw = JSON.parse(fs.readFileSync(businessesPath, 'utf8'));

  const newBusinesses = businessesRaw.map((b, index) => {
    let category = 'Health & Beauty';
    const desc = (b['Description / Speciality'] || '').toLowerCase();
    
    if (desc.includes('tea') || desc.includes('food') || desc.includes('dining') || desc.includes('cafe')) category = 'Food & Drink';
    else if (desc.includes('clothing') || desc.includes('fashion') || desc.includes('hijab') || desc.includes('wear')) category = 'Fashion';
    
    return {
      id: (index + 1).toString(),
      name: b['Brand Name'],
      category: category,
      description: b['Description / Speciality'] || '',
      location: b['Location'] || 'London',
    };
  });

  let dataContent = fs.readFileSync(dataPath, 'utf8');

  // Find the articles array
  const articlesMatch = dataContent.match(/export const articles = \[([\s\S]*?)\];/);
  if (!articlesMatch) {
    console.error('Could not find articles array');
    process.exit(1);
  }

  const articlesBlock = articlesMatch[0];

  const newContent = `${articlesBlock}

export const businesses = ${JSON.stringify(newBusinesses, null, 2)};
`;

  fs.writeFileSync(dataPath, newContent);
  console.log('lib/data.ts updated successfully');
} catch (error) {
  console.error('Error updating data:', error);
}
