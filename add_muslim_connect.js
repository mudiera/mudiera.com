const fs = require('fs');

// New data sourced from Muslim Connect search results
const newEntries = [
    {
        name: "Bethnal Green Spa Experience",
        category: "Health & Beauty",
        description: "Spa offering women-only days and Turkish hammam experience",
        location: "Bethnal Green, London",
        source: "Muslim Connect",
        contact: "See website for women-only schedule"
    },
    {
        name: "The Organic Pharmacy Spa",
        category: "Health & Beauty",
        description: "All-natural, alcohol-free products with private treatment rooms available",
        location: "Chelsea, London",
        source: "Muslim Connect",
        contact: "Phone booking required for private rooms"
    },
    {
        name: "Jazz Panesar",
        category: "Health & Beauty",
        description: "Asian bridal hair and makeup artist catering to modern and traditional styles",
        location: "London",
        source: "Muslim Connect",
        contact: "Contact via website/socials"
    },
    {
        name: "Kajol R Paswwan",
        category: "Health & Beauty",
        description: "Specialized bridal makeup services and professional training",
        location: "London",
        source: "Muslim Connect",
        contact: "Contact via website"
    },
    {
        name: "Albay Bakery",
        category: "Food & Drinks",
        description: "Muslim-friendly bakery offering halal pastries and breads",
        location: "London",
        source: "Muslim Connect",
        contact: "Visit store"
    },
    {
        name: "Doga Patisserie",
        category: "Food & Drinks",
        description: "Halal-compliant patisserie serving cakes and desserts",
        location: "London",
        source: "Muslim Connect",
        contact: "Visit store"
    },
    {
        name: "Yasar Halim Patisserie",
        category: "Food & Drinks",
        description: "High-quality halal desserts and baked goods",
        location: "Harringay, London",
        source: "Muslim Connect",
        contact: "Visit store"
    },
    {
        name: "Prestige Patisserie",
        category: "Food & Drinks",
        description: "Halal-compliant baked goods and artisan desserts",
        location: "London",
        source: "Muslim Connect",
        contact: "Visit store"
    },
    {
        name: "Cake Box Tottenham",
        category: "Food & Drinks",
        description: "Egg-free and halal-compliant fresh cream cakes",
        location: "Tottenham, London",
        source: "Muslim Connect",
        contact: "Visit store"
    },
    {
        name: "Flame ‘Inn’ Karahi",
        category: "Food & Drinks",
        description: "Authentic halal Indian cuisine in a family-friendly setting",
        location: "London",
        source: "Muslim Connect",
        contact: "Visit restaurant"
    },
    {
        name: "Hajee Talib Fish & Chips",
        category: "Food & Drinks",
        description: "Traditional fish and chips cooked to halal standards",
        location: "London",
        source: "Muslim Connect",
        contact: "Visit restaurant"
    },
    {
        name: "Sammy’s Chicken n Shakes",
        category: "Food & Drinks",
        description: "Halal comfort food, chicken and shakes",
        location: "London",
        source: "Muslim Connect",
        contact: "Visit restaurant"
    },
    {
        name: "98 Sizzle",
        category: "Food & Drinks",
        description: "Casual dining serving high-quality halal sizzler dishes",
        location: "London",
        source: "Muslim Connect",
        contact: "Visit restaurant"
    },
    {
        name: "Toronto Crispy",
        category: "Food & Drinks",
        description: "Halal fried chicken and fast food",
        location: "London",
        source: "Muslim Connect",
        contact: "Visit restaurant"
    },
    {
        name: "Nordens Chartered Accountants",
        category: "Services",
        description: "Trusted accounting and financial services",
        location: "Redbridge, London",
        source: "Muslim Connect",
        contact: "Contact via website"
    },
    {
        name: "Remote Accounting Ltd",
        category: "Services",
        description: "Finance and accounting services for businesses and individuals",
        location: "Redbridge, London",
        source: "Muslim Connect",
        contact: "Contact via website"
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
console.log(`Added ${addedCount} new listings from Muslim Connect.`);
