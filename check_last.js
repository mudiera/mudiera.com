const fs = require('fs');
const data = JSON.parse(fs.readFileSync('businesses.json', 'utf8'));
console.log(JSON.stringify(data.businesses[data.businesses.length - 1], null, 2));
