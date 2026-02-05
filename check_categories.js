const fs = require('fs');
const data = JSON.parse(fs.readFileSync('businesses.json', 'utf8'));
const categories = new Set();
data.businesses.forEach(b => categories.add(b.category));
console.log(Array.from(categories));
