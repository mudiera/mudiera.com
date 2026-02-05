const fs = require('fs');
const Papa = require('json2csv').parse;

const json = JSON.parse(fs.readFileSync('businesses.json', 'utf8'));
const businesses = json.businesses || [];

// Define fields for CSV
const fields = ['id', 'name', 'category', 'location', 'description', 'contact', 'source', 'website', 'instagram'];
const opts = { fields };

try {
    const csv = Papa(businesses, opts);
    fs.writeFileSync('cleaned_directory.csv', csv);
    console.log('CSV created successfully: cleaned_directory.csv');
} catch (err) {
    console.error(err);
}
