const fs = require('fs');
const XLSX = require('xlsx');

// File paths
const EXISTING_FILE = 'businesses.json';
const NEW_JSON_FILE = 'new_businesses.json';
const EXCEL_FILE = 'London muslim owned buisnesses.xlsx';

function loadExisting() {
    if (fs.existsSync(EXISTING_FILE)) {
        const content = fs.readFileSync(EXISTING_FILE, 'utf8');
        const json = JSON.parse(content);
        // Filter out the previously imported ones to start fresh
        return (json.businesses || []).filter(b => b.source !== 'Excel Import');
    }
    return [];
}

function loadExcel() {
    if (!fs.existsSync(EXCEL_FILE)) return [];
    
    const workbook = XLSX.readFile(EXCEL_FILE);
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    // header: 1 gives array of arrays
    const rows = XLSX.utils.sheet_to_json(sheet, { header: 1 });
    
    const businesses = [];
    
    rows.forEach((row, index) => {
        if (!row || row.length === 0) return;
        
        let category = (row[0] || 'Uncategorized').toString().trim();
        let name = (row[1] || '').toString().trim();
        if (!name) return; // Name is mandatory
        
        // Skip Header Row
        const lowerName = name.toLowerCase();
        if (lowerName === 'name' || lowerName === 'brand name' || lowerName === 'business' || lowerName === 'buisness') return;
        if (category.toLowerCase() === 'category') return;

        let description = (row[2] || '').toString().trim();
        let location = (row[3] || 'London').toString().trim();
        let rawContact = (row[4] || '').toString().trim();
        let instaHandle = (row[5] || '').toString().trim();
        
        // Clean Contact - "email addresses only for email address"
        let contact = '';
        const emailMatch = rawContact.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/);
        if (emailMatch) {
            contact = emailMatch[0];
        }
        
        // Process Instagram
        let instagram = '';
        if (instaHandle && instaHandle.toLowerCase() !== 'unknown') {
            if (instaHandle.startsWith('@')) {
                instagram = 'https://www.instagram.com/' + instaHandle.substring(1);
            } else if (instaHandle.includes('instagram.com')) {
                instagram = instaHandle;
            } else if (!instaHandle.includes(' ')) { // Avoid sentences
                 instagram = 'https://www.instagram.com/' + instaHandle;
            }
        }
        
        // Check for website in contact field if it's a URL?
        let website = '';
        if (rawContact.includes('http') || rawContact.includes('www.')) {
             const urlMatch = rawContact.match(/(https?:\/\/[^\s]+)|(www\.[^\s]+)/);
             if (urlMatch) {
                 website = urlMatch[0];
                 if (!website.startsWith('http')) website = 'https://' + website;
             }
        }

        // Final Filter Check
        // "dont include anything that doesnt contain real data"
        if (!contact && !instagram && !website) {
            return; // Skip this entry
        }
        
        businesses.push({
            name: name,
            category: category,
            description: description,
            location: location,
            contact: contact, // Only email
            source: 'Excel Import',
            website: website,
            instagram: instagram
        });
    });
    
    return businesses;
}

function merge() {
    const existing = loadExisting();
    const excelData = loadExcel();
    
    // Create a map of existing names for deduplication
    const existingNames = new Set(existing.map(b => b.name.toLowerCase().trim()));
    
    let addedCount = 0;
    
    excelData.forEach(item => {
        if (!existingNames.has(item.name.toLowerCase().trim())) {
            // Assign ID
            item.id = (existing.length + 1 + addedCount).toString(); // simple increment
            existing.push(item);
            existingNames.add(item.name.toLowerCase().trim());
            addedCount++;
        }
    });
    
    // Re-assign IDs sequentially to be clean
    existing.forEach((item, index) => {
        item.id = (index + 1).toString();
    });
    
    const output = {
        businesses: existing
    };
    
    fs.writeFileSync('businesses.json', JSON.stringify(output, null, 2));
    console.log(`Merged complete. Total businesses: ${existing.length}. Added ${addedCount} new businesses from Excel.`);
}

merge();
