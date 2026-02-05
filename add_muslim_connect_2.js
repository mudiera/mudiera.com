const fs = require('fs');

// Additional data sourced from Muslim Connect search results (Women/Ladies specific)
const newEntries = [
    {
        name: "Ummah Catering",
        category: "Services",
        description: "Halal catering service specializing in high-quality food and event decorations",
        location: "Walthamstow, London",
        source: "Muslim Connect",
        contact: "Visit Unit 30, Walthamstow Business Centre"
    },
    {
        name: "Zam Zam Halal Meat & Poultry",
        category: "Shopping",
        description: "Premier halal meat shop offering fresh poultry and meat",
        location: "Newham, London",
        source: "Muslim Connect",
        contact: "Visit 855 Romford Rd"
    },
    {
        name: "Nimat Halal Meat",
        category: "Shopping",
        description: "Trusted local halal meat provider",
        location: "Newham, London",
        source: "Muslim Connect",
        contact: "Visit 29 Barking Rd"
    },
    {
        name: "Online Meat Shop",
        category: "Shopping",
        description: "High-quality halal meat provider with online services",
        location: "Newham, London",
        source: "Muslim Connect",
        contact: "Visit 328 High Street North"
    },
    {
        name: "Leyton Leisure Lagoon",
        category: "Health & Beauty",
        description: "Hosts weekly 'Sisters Swim' sessions for women only",
        location: "Waltham Forest, London",
        source: "Muslim Connect",
        contact: "Check schedule for Sisters Swim"
    },
    {
        name: "Camberwell Leisure Centre",
        category: "Health & Beauty",
        description: "Offers swimming pool sessions closed to all but women",
        location: "Southwark, London",
        source: "Muslim Connect",
        contact: "Check schedule for women-only sessions"
    },
    {
        name: "Clissold Leisure Centre",
        category: "Health & Beauty",
        description: "Faith and culturally sensitive swimming lessons for children and women",
        location: "Hackney, London",
        source: "Muslim Connect",
        contact: "Inquire about culturally sensitive lessons"
    },
    {
        name: "Oasis Sports Centre",
        category: "Health & Beauty",
        description: "Provides modest family swimming sessions",
        location: "Camden, London",
        source: "Muslim Connect",
        contact: "Check family swim schedule"
    },
    {
        name: "Aspire Centre",
        category: "Health & Beauty",
        description: "Swim groups specifically for community-led Muslim women",
        location: "Southfields, London",
        source: "Muslim Connect",
        contact: "Inquire about Muslim women groups"
    },
    {
        name: "Berenjak London",
        category: "Food & Drinks",
        description: "Authentic Persian cuisine with halal options",
        location: "Soho, London",
        source: "Muslim Connect",
        contact: "Visit restaurant"
    }
];

// Load existing
const filePath = 'businesses.json';
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
const existing = data.businesses;

// Deduplicate and Add
let addedCount = 0;
const existingNames = new Set(existing.map(b => b.name.toLowerCase().trim()));

newEntries.forEach(entry => {
    if (!existingNames.has(entry.name.toLowerCase().trim())) {
        // Generate new ID
        entry.id = (existing.length + 1).toString();
        existing.push(entry);
        existingNames.add(entry.name.toLowerCase().trim());
        addedCount++;
    }
});

// Save
fs.writeFileSync(filePath, JSON.stringify({ businesses: existing }, null, 2));
console.log(`Added ${addedCount} new listings from Muslim Connect (Batch 2).`);
