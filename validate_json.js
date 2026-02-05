const fs = require('fs');
try {
    const data = fs.readFileSync('businesses.json', 'utf8');
    JSON.parse(data);
    console.log('JSON is valid');
} catch (e) {
    console.error('JSON is invalid', e);
    process.exit(1);
}
