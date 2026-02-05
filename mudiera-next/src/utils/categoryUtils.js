export const subcategories = {
  'Health & Beauty': [
    { name: 'Hijama & Cupping', keywords: ['hijama', 'cupping', 'wet cupping', 'dry cupping'] },
    { name: 'Spa & Massage', keywords: ['spa', 'massage', 'hammam', 'sauna', 'relax'] },
    { name: 'Skincare', keywords: ['skin', 'face', 'facial', 'serum', 'oil', 'cream', 'balm'] },
    { name: 'Hair & Salon', keywords: ['hair', 'salon', 'cut', 'style', 'colour', 'dye'] },
    { name: 'Makeup', keywords: ['makeup', 'cosmetic', 'lipstick', 'foundation', 'beauty'] },
    { name: 'Fitness & Swimming', keywords: ['swim', 'pool', 'gym', 'fitness', 'yoga', 'pilates'] }
  ],
  'Food & Drinks': [
    { name: 'Restaurants', keywords: ['restaurant', 'dining', 'grill', 'curry', 'indian', 'persian', 'cuisine'] },
    { name: 'Cafes & Tea', keywords: ['cafe', 'coffee', 'tea', 'latte', 'breakfast', 'brunch'] },
    { name: 'Bakery & Desserts', keywords: ['bakery', 'cake', 'dessert', 'pastry', 'sweet', 'cookie'] },
    { name: 'Fast Food', keywords: ['burger', 'chicken', 'chips', 'pizza', 'fast food'] }
  ],
  'Shopping': [
    { name: 'Halal Meat', keywords: ['meat', 'butcher', 'poultry', 'lamb', 'beef'] },
    { name: 'Fashion & Clothing', keywords: ['clothing', 'abaya', 'hijab', 'dress', 'fashion', 'wear'] },
    { name: 'Gifts & Home', keywords: ['gift', 'candle', 'home', 'decor', 'scent'] }
  ],
  'Services': [
    { name: 'Financial', keywords: ['accountant', 'tax', 'finance', 'money'] },
    { name: 'Events & Catering', keywords: ['catering', 'event', 'wedding', 'party', 'decor'] },
    { name: 'Professional', keywords: ['consult', 'design', 'web', 'marketing', 'legal'] }
  ],
  'Travel': [
    { name: 'Retreats', keywords: ['retreat', 'wellness', 'getaway'] },
    { name: 'Tours & Guides', keywords: ['tour', 'guide', 'walk', 'sightseeing'] },
    { name: 'Group Travel', keywords: ['group', 'trip', 'adventure'] }
  ]
};

export function mapCategory(sourceCategory) {
  if (sourceCategory === 'Fashion & Clothing') return 'Shopping';
  if (sourceCategory === 'Coaching') return 'Services';
  if (sourceCategory === 'Female Fitness') return 'Services';
  if (sourceCategory === 'Travel & Tourism') return 'Services';
  if (sourceCategory === 'Travel') return 'Services';
  if (sourceCategory === 'Community & Education') return 'Community';
  return sourceCategory;
}
