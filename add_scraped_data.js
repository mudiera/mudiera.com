const fs = require('fs');
const path = require('path');

const businessesPath = path.join(__dirname, 'businesses.json');

const newListings = [
  // Fashion
  {
    name: "Sabirah",
    category: "Fashion & Clothing",
    description: "Luxury occasion-wear and sustainable modest fashion. Founded by Deborah Latouche.",
    location: "London",
    contact: "Via website",
    website: "https://www.sabihah.london",
    instagram: "https://www.instagram.com/sabirah_collection"
  },
  {
    name: "Saeedah Haque",
    category: "Fashion & Clothing",
    description: "Streetwear abayas bridging Islamic tradition and modern utility. First abaya collaboration with Nike.",
    location: "North London",
    contact: "Via website",
    website: "https://www.saeedahhaque.com",
    instagram: "https://www.instagram.com/saeedahhaque"
  },
  {
    name: "Aab Collection",
    category: "Fashion & Clothing",
    description: "Premium modest fashion brand known for high-quality hijabs and contemporary clothing.",
    location: "Whitechapel, London",
    contact: "Via website",
    website: "https://aabcollection.com",
    instagram: "https://www.instagram.com/aabcollection"
  },
  {
    name: "Inayah",
    category: "Fashion & Clothing",
    description: "Modern modest fashion offering minimal and elegant designs for women.",
    location: "London",
    contact: "Via website",
    website: "https://www.inayah.com",
    instagram: "https://www.instagram.com/inayah_collection"
  },
  {
    name: "Sabihah London",
    category: "Fashion & Clothing",
    description: "Modest ready-to-wear clothing inspired by vintage and contemporary fashion.",
    location: "London",
    contact: "Via website",
    website: "https://www.sabihah.london",
    instagram: ""
  },
  
  // Food & Drinks
  {
    name: "The Great Chase",
    category: "Food & Drinks",
    description: "Fine dining halal restaurant with a dry bar and dedicated prayer room.",
    location: "Islington, London",
    contact: "Book via website",
    website: "https://www.thegreatchase.co.uk",
    instagram: "https://www.instagram.com/thegreatchase"
  },
  {
    name: "Etles Uyghur Restaurant",
    category: "Food & Drinks",
    description: "Authentic Uyghur cuisine from Xinjiang. Family-run and highly rated.",
    location: "Walthamstow & Finchley",
    contact: "020 3620 6978",
    website: "https://etles.co.uk",
    instagram: "https://www.instagram.com/etles.restaurant"
  },
  {
    name: "Panadera Bakery",
    category: "Food & Drinks",
    description: "Filipino bakery offering halal options, famous for sandos and pastries.",
    location: "Kentish Town, London",
    contact: "Via website",
    website: "https://www.panadera.co.uk",
    instagram: "https://www.instagram.com/panaderabakery_"
  },
  {
    name: "Berenjak",
    category: "Food & Drinks",
    description: "Persian restaurant invoking the style of rustic hole-in-the-wall kabab houses in Tehran.",
    location: "Soho & Borough",
    contact: "Via website",
    website: "https://berenjaklondon.com",
    instagram: "https://www.instagram.com/berenjaklondon"
  },

  // Health & Beauty
  {
    name: "Aveda Covent Garden (Privacy Suite)",
    category: "Health & Beauty",
    description: "Flagship salon offering a private 'Privacy Suite' specifically for guests who cover their hair.",
    location: "Covent Garden, London",
    contact: "020 7759 7355",
    website: "https://www.aveda.co.uk",
    instagram: ""
  },
  {
    name: "Beauty Kulture",
    category: "Health & Beauty",
    description: "Hijab-friendly salon with private areas, founded by Aba Ahmed.",
    location: "North London",
    contact: "Via website",
    website: "https://beautykulture.com",
    instagram: "https://www.instagram.com/beautykulture"
  },
  {
    name: "Maryam Hair and Beauty",
    category: "Health & Beauty",
    description: "Ladies-only salon providing a safe and comfortable environment for Muslim women.",
    location: "London",
    contact: "Via website",
    website: "https://maryamhairandbeauty.co.uk",
    instagram: ""
  },
  {
    name: "Hijama Healing London",
    category: "Health & Beauty",
    description: "Women-only clinic offering Hijama (cupping) therapy and holistic wellness.",
    location: "Canary Wharf, London",
    contact: "Via website",
    website: "https://hijamahealinglondon.co.uk",
    instagram: ""
  },
  
  // Community
  {
    name: "Muslim Women's Network UK",
    category: "Community & Education",
    description: "National charity campaigning for the rights of Muslim women and girls.",
    location: "London / National",
    contact: "Via website",
    website: "https://www.mwnuk.co.uk",
    instagram: "https://www.instagram.com/mwnuk"
  },
  {
    name: "Muslim Women Connect",
    category: "Community & Education",
    description: "Mentoring and networking organization connecting Muslim women across professional sectors.",
    location: "London",
    contact: "Via website",
    website: "https://muslimwomenconnect.com",
    instagram: "https://www.instagram.com/muslimwomenconnect"
  },
  {
    name: "Sisters Swim - Leyton",
    category: "Community & Education",
    description: "Women-only swimming sessions at Leyton Leisure Lagoon.",
    location: "Leyton, London",
    contact: "Check leisure centre schedule",
    website: "https://www.better.org.uk",
    instagram: ""
  }
];

// Read existing data
let data = { businesses: [] };
try {
  const fileContent = fs.readFileSync(businessesPath, 'utf8');
  data = JSON.parse(fileContent);
} catch (error) {
  console.log("Creating new database or error reading:", error.message);
}

// Merge and Deduplicate
let count = 0;
newListings.forEach(newItem => {
  // Normalize name for comparison (remove spaces, lowercase)
  const normName = newItem.name.toLowerCase().replace(/[^a-z0-9]/g, '');
  
  const exists = data.businesses.some(existing => {
    const existingNorm = existing.name.toLowerCase().replace(/[^a-z0-9]/g, '');
    return existingNorm.includes(normName) || normName.includes(existingNorm);
  });

  if (!exists) {
    // Generate a simple ID
    newItem.id = Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
    data.businesses.push(newItem);
    count++;
  } else {
    console.log(`Skipping duplicate: ${newItem.name}`);
  }
});

// Write back
fs.writeFileSync(businessesPath, JSON.stringify(data, null, 2));
console.log(`Successfully added ${count} new listings.`);
