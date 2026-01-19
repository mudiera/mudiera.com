const fs = require('fs');

const oldData = JSON.parse(fs.readFileSync('businesses.json', 'utf8'));
const newData = [];

oldData.forEach((item, index) => {
    // Normalize keys
    const name = item['Brand Name'] || item['name'] || '';
    if (!name) return;

    let description = item['Description / Speciality'] || item['description'] || '';
    let location = item['Location'] || item['location'] || 'London';
    let contact = item['Contact'] || item['contact'] || '';
    let source = item['Source'] || item['source'] || '';
    
    // Attempt to extract category if not present
    let category = item['category'] || 'Health & Beauty'; // Default as most are H&B
    
    // Simple heuristic for category if description contains keywords
    const d = description.toLowerCase();
    if (d.includes('food') || d.includes('restaurant') || d.includes('cafe') || d.includes('kebab')) category = 'Food & Drinks';
    else if (d.includes('fashion') || d.includes('clothing') || d.includes('abaya')) category = 'Shopping';
    else if (d.includes('event') || d.includes('retreat')) category = 'Events';
    else if (d.includes('community') || d.includes('charity')) category = 'Community';
    else if (d.includes('service') || d.includes('consultant')) category = 'Services';

    // Attempt to extract website/instagram from Source or Contact
    let website = '';
    let instagram = '';
    
    if (source.toLowerCase().includes('instagram') || contact.toLowerCase().includes('instagram')) {
        // We don't have the actual link, but we can set a flag or try to parse
        // For now, leave empty unless we have a specific URL
    }

    newData.push({
        id: (index + 1).toString(),
        name: name,
        category: category,
        description: description,
        location: location,
        contact: contact,
        source: source,
        website: website,
        instagram: instagram
    });
});

fs.writeFileSync('businesses.json', JSON.stringify(newData, null, 2));
console.log('Merged ' + newData.length + ' businesses into businesses.json');
