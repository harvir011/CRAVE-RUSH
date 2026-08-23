// CraveRush Food Delivery Application - Main JavaScript Module

// Data Store - Famous Restaurant Partners
const RESTAURANTS = [
  {
    id: "mcd",
    name: "McDonald's",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80",
    rating: 4.4,
    reviews: "12k+",
    time: "20-25 mins",
    cuisines: "Burgers, Fries, Sides, Shakes",
    priceForTwo: "₹350 for two",
    isVerified: true,
    category: "Gourmet Burgers"
  },
  {
    id: "kfc",
    name: "KFC",
    image: "https://images.unsplash.com/photo-1513185158878-8d8c2a2a3da3?auto=format&fit=crop&w=600&q=80",
    rating: 4.3,
    reviews: "9.5k+",
    time: "25-30 mins",
    cuisines: "Fried Chicken, Burgers, Wings, Drinks",
    priceForTwo: "₹450 for two",
    isVerified: true,
    category: "Gourmet Burgers"
  },
  {
    id: "bk",
    name: "Burger King",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
    rating: 4.2,
    reviews: "8k+",
    time: "20-30 mins",
    cuisines: "Burgers, Whoppers, Onion Rings, Shakes",
    priceForTwo: "₹400 for two",
    isVerified: true,
    category: "Gourmet Burgers"
  },
  {
    id: "dominos",
    name: "Domino's Pizza",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
    rating: 4.5,
    reviews: "18k+",
    time: "25-35 mins",
    cuisines: "Artisanal Pizza, Garlic Bread, Lava Cake",
    priceForTwo: "₹500 for two",
    isVerified: true,
    category: "Artisanal Pizza"
  },
  {
    id: "subway",
    name: "Subway",
    image: "https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=600&q=80",
    rating: 4.3,
    reviews: "6k+",
    time: "20-25 mins",
    cuisines: "Healthy Bowls, Subs, Cookies, Iced Tea",
    priceForTwo: "₹350 for two",
    isVerified: true,
    category: "Healthy Bowls"
  },
  {
    id: "haldirams",
    name: "Haldiram's",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=600&q=80",
    rating: 4.4,
    reviews: "15k+",
    time: "30-40 mins",
    cuisines: "North Indian, Chaat, Gulab Jamun, Lassi",
    priceForTwo: "₹400 for two",
    isVerified: true,
    category: "Indian & Curry"
  },
  {
    id: "starbucks",
    name: "Starbucks Coffee",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80",
    rating: 4.6,
    reviews: "7k+",
    time: "15-20 mins",
    cuisines: "Frappuccinos, Espresso, Cheesecake, Croissants",
    priceForTwo: "₹600 for two",
    isVerified: true,
    category: "Refreshers & Drinks"
  },
  {
    id: "bbk",
    name: "Biryani By Kilo",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80",
    rating: 4.7,
    reviews: "11k+",
    time: "35-45 mins",
    cuisines: "Hyderabadi Biryani, Kebabs, Matka Phirni",
    priceForTwo: "₹650 for two",
    isVerified: true,
    category: "Biryani"
  },
  {
    id: "tacobell",
    name: "Taco Bell",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=600&q=80",
    rating: 4.3,
    reviews: "5k+",
    time: "20-25 mins",
    cuisines: "Tacos, Quesadillas, Nachos, Churros",
    priceForTwo: "₹400 for two",
    isVerified: true,
    category: "Sides & Starters"
  }
];

// Expanded Data Store - Food Menu Items for ALL Restaurants
const DISHES = [
  // ---------- McDONALD'S ----------
  {
    id: "mcd-1",
    restaurantId: "mcd",
    restaurantName: "McDonald's",
    name: "McAloo Tikki Burger",
    category: "Gourmet Burgers",
    price: 89,
    rating: "4.8★ (2.4k)",
    time: "15 min",
    isVeg: true,
    tag: "🔥 Bestseller",
    description: "Indian spiced potato patty with crispy lettuce, sliced tomatoes, and signature creamy sauce.",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "mcd-2",
    restaurantId: "mcd",
    restaurantName: "McDonald's",
    name: "McVeggie Burger",
    category: "Gourmet Burgers",
    price: 119,
    rating: "4.7★ (1.9k)",
    time: "15 min",
    isVeg: true,
    tag: "Veg Classic",
    description: "Crispy vegetable patty made with peas, corn & carrots, topped with shredded lettuce and mayo.",
    image: "https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "mcd-3",
    restaurantId: "mcd",
    restaurantName: "McDonald's",
    name: "McChicken Burger",
    category: "Gourmet Burgers",
    price: 149,
    rating: "4.9★ (3.1k)",
    time: "15 min",
    isVeg: false,
    tag: "🔥 Crowd Favorite",
    description: "Crispy tender chicken patty served with creamy mayonnaise and fresh iceberg lettuce in a sesame bun.",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "mcd-4",
    restaurantId: "mcd",
    restaurantName: "McDonald's",
    name: "Chicken Maharaja Mac",
    category: "Gourmet Burgers",
    price: 239,
    rating: "4.95★ (4.2k)",
    time: "18 min",
    isVeg: false,
    tag: "👑 Royal Feast",
    description: "Double grilled chicken patties stacked with processed cheddar cheese, jalapenos, and habanero sauce.",
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "mcd-5",
    restaurantId: "mcd",
    restaurantName: "McDonald's",
    name: "Peri Peri French Fries (Large)",
    category: "Sides & Starters",
    price: 119,
    rating: "4.92★ (5.4k)",
    time: "10 min",
    isVeg: true,
    tag: "🍟 Spicy Side",
    description: "World famous crispy golden French fries tossed in spicy Peri Peri seasoning mix.",
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "mcd-6",
    restaurantId: "mcd",
    restaurantName: "McDonald's",
    name: "Veg Pizza McPuff (2 Pcs)",
    category: "Sides & Starters",
    price: 99,
    rating: "4.85★ (3.1k)",
    time: "10 min",
    isVeg: true,
    tag: "🍕 Crispy Snack",
    description: "Crispy baked puff filled with tomato sauce, mozzarella cheese, peas, carrots, and sweet corn.",
    image: "https://images.unsplash.com/photo-1619535860434-ba1d8fa12536?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "mcd-7",
    restaurantId: "mcd",
    restaurantName: "McDonald's",
    name: "McCafe Iced Cold Coffee",
    category: "Refreshers & Drinks",
    price: 169,
    rating: "4.88★ (2.2k)",
    time: "10 min",
    isVeg: true,
    tag: "🥤 Chilled Espresso",
    description: "Freshly brewed espresso shots blended with ice-cold milk and sweet chocolate syrup.",
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "mcd-8",
    restaurantId: "mcd",
    restaurantName: "McDonald's",
    name: "McFlurry Oreo & Fudge Dessert",
    category: "Desserts",
    price: 129,
    rating: "4.93★ (3.8k)",
    time: "10 min",
    isVeg: true,
    tag: "🍦 Sweet Treat",
    description: "Creamy soft-serve vanilla ice cream blended with crunchy Oreo cookie crumbles and hot chocolate fudge.",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80"
  },

  // ---------- KFC ----------
  {
    id: "kfc-1",
    restaurantId: "kfc",
    restaurantName: "KFC",
    name: "Zinger Crunch Burger",
    category: "Gourmet Burgers",
    price: 189,
    rating: "4.86★ (2.1k)",
    time: "20 min",
    isVeg: false,
    tag: "🔥 Hot & Crispy",
    description: "Signature extra crispy chicken fillet with spicy mayo and fresh lettuce in a toasted sesame bun.",
    image: "https://images.unsplash.com/photo-1513185158878-8d8c2a2a3da3?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "kfc-2",
    restaurantId: "kfc",
    restaurantName: "KFC",
    name: "4 Pc Hot & Crispy Chicken Bucket",
    category: "Gourmet Burgers",
    price: 449,
    rating: "4.92★ (3.5k)",
    time: "25 min",
    isVeg: false,
    tag: "🍗 Bucket Special",
    description: "4 pieces of KFC's signature secret recipe spicy fried chicken.",
    image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "kfc-3",
    restaurantId: "kfc",
    restaurantName: "KFC",
    name: "Crispy Chicken Wings (4 Pcs)",
    category: "Sides & Starters",
    price: 189,
    rating: "4.88★ (2.4k)",
    time: "15 min",
    isVeg: false,
    tag: "🍗 Wing-It",
    description: "Juicy chicken wings coated in KFC's crispy batter and tossed in chili seasoning.",
    image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "kfc-4",
    restaurantId: "kfc",
    restaurantName: "KFC",
    name: "Virgin Mojito Krush",
    category: "Refreshers & Drinks",
    price: 119,
    rating: "4.8★ (1.1k)",
    time: "5 min",
    isVeg: true,
    tag: "🥤 Chilled Soda",
    description: "Refreshing lemon and mint flavored sparkling soda drink.",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "kfc-5",
    restaurantId: "kfc",
    restaurantName: "KFC",
    name: "Chocolate Mud Pie",
    category: "Desserts",
    price: 109,
    rating: "4.89★ (1.4k)",
    time: "5 min",
    isVeg: true,
    tag: "🍰 Rich Fudge",
    description: "Decadent dark chocolate mud pie with cocoa crust and chocolate drizzle.",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80"
  },

  // ---------- BURGER KING ----------
  {
    id: "bk-1",
    restaurantId: "bk",
    restaurantName: "Burger King",
    name: "Veg Whopper Burger",
    category: "Gourmet Burgers",
    price: 179,
    rating: "4.82★ (2.9k)",
    time: "20 min",
    isVeg: true,
    tag: "🍔 King Whopper",
    description: "Flame-grilled signature veg patty topped with tomatoes, onion rings, pickles and mayo.",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "bk-2",
    restaurantId: "bk",
    restaurantName: "Burger King",
    name: "Chicken Whopper Burger",
    category: "Gourmet Burgers",
    price: 219,
    rating: "4.89★ (3.4k)",
    time: "20 min",
    isVeg: false,
    tag: "🔥 Flame Grilled",
    description: "Flame-grilled chicken patty with crunchy lettuce, onions, juicy tomatoes, and ketchup.",
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "bk-3",
    restaurantId: "bk",
    restaurantName: "Burger King",
    name: "Crispy King Onion Rings (8 Pcs)",
    category: "Sides & Starters",
    price: 139,
    rating: "4.85★ (1.9k)",
    time: "10 min",
    isVeg: true,
    tag: "🧅 Crispy Crunch",
    description: "Thick cut onion rings coated in golden batter and fried to perfection.",
    image: "https://images.unsplash.com/photo-1639024471283-03518883512d?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "bk-4",
    restaurantId: "bk",
    restaurantName: "Burger King",
    name: "Chocolate Thickshake",
    category: "Refreshers & Drinks",
    price: 149,
    rating: "4.91★ (2.2k)",
    time: "10 min",
    isVeg: true,
    tag: "🥤 Creamy Shake",
    description: "Rich and thick chocolate milkshake topped with whipped cream and cocoa dust.",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80"
  },

  // ---------- DOMINO'S PIZZA ----------
  {
    id: "dom-1",
    restaurantId: "dominos",
    restaurantName: "Domino's Pizza",
    name: "Wood-Fired Margherita Artisanal Pizza",
    category: "Artisanal Pizza",
    price: 349,
    rating: "4.95★ (2.4k)",
    time: "18 min",
    isVeg: true,
    tag: "🍕 Authentic Italy",
    description: "San Marzano tomato sauce, fresh mozzarella fior di latte, fresh basil leaves, and EVOO.",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "dom-2",
    restaurantId: "dominos",
    restaurantName: "Domino's Pizza",
    name: "Peppy Paneer Special Pizza",
    category: "Artisanal Pizza",
    price: 389,
    rating: "4.91★ (1.8k)",
    time: "20 min",
    isVeg: true,
    tag: "🧀 Cheese Burst",
    description: "Chunky paneer cubes, crisp capsicum, and spicy red paprika with double cheese crust.",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "dom-3",
    restaurantId: "dominos",
    restaurantName: "Domino's Pizza",
    name: "Chicken Dominator Pizza",
    category: "Artisanal Pizza",
    price: 549,
    rating: "4.94★ (2.8k)",
    time: "22 min",
    isVeg: false,
    tag: "🍗 Non-Veg Feast",
    description: "Loaded with double pepper barbecue chicken, peri-peri chicken, and grilled chicken sausage.",
    image: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "dom-4",
    restaurantId: "dominos",
    restaurantName: "Domino's Pizza",
    name: "Stuffed Garlic Breadsticks",
    category: "Sides & Starters",
    price: 159,
    rating: "4.89★ (4.1k)",
    time: "15 min",
    isVeg: true,
    tag: "🥖 Side Special",
    description: "Freshly baked garlic bread filled with melted mozzarella cheese and sweet corn.",
    image: "https://images.unsplash.com/photo-1619535860434-ba1d8fa12536?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "dom-5",
    restaurantId: "dominos",
    restaurantName: "Domino's Pizza",
    name: "Decadent Choco Lava Cake",
    category: "Desserts",
    price: 149,
    rating: "4.96★ (3.1k)",
    time: "10 min",
    isVeg: true,
    tag: "🍰 Sweet Tooth",
    description: "Warm chocolate cake filled with molten dark chocolate fudge center.",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80"
  },

  // ---------- SUBWAY ----------
  {
    id: "sub-1",
    restaurantId: "subway",
    restaurantName: "Subway",
    name: "Mediterranean Chicken Grain Bowl",
    category: "Healthy Bowls",
    price: 229,
    rating: "4.88★ (1.1k)",
    time: "12 min",
    isVeg: false,
    tag: "🥗 Healthy Choice",
    description: "Grilled herb chicken, quinoa, roasted chick peas, cherry tomatoes, and tzatziki dressing.",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "sub-2",
    restaurantId: "subway",
    restaurantName: "Subway",
    name: "Paneer Tikka Sub (15cm / 6 inch)",
    category: "Healthy Bowls",
    price: 219,
    rating: "4.85★ (1.9k)",
    time: "12 min",
    isVeg: true,
    tag: "🥪 Fresh Baked",
    description: "Tender paneer cubes marinated in tikka spices served with custom fresh veggies on Parmesan oregano bread.",
    image: "https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "sub-3",
    restaurantId: "subway",
    restaurantName: "Subway",
    name: "Lemon Iced Tea",
    category: "Refreshers & Drinks",
    price: 99,
    rating: "4.82★ (1.3k)",
    time: "5 min",
    isVeg: true,
    tag: "🍋 Chilled Tea",
    description: "Freshly brewed iced black tea infused with natural lemon juice and mint.",
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "sub-4",
    restaurantId: "subway",
    restaurantName: "Subway",
    name: "Double Chocolate Chip Cookie",
    category: "Desserts",
    price: 69,
    rating: "4.94★ (3.6k)",
    time: "5 min",
    isVeg: true,
    tag: "🍪 Fresh Baked",
    description: "Freshly baked soft and chewy cookie packed with dark chocolate chips.",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=600&q=80"
  },

  // ---------- HALDIRAM'S ----------
  {
    id: "hal-1",
    restaurantId: "haldirams",
    restaurantName: "Haldiram's",
    name: "Special Chole Bhature",
    category: "Indian & Curry",
    price: 179,
    rating: "4.92★ (4.5k)",
    time: "20 min",
    isVeg: true,
    tag: "🔥 Street Favorite",
    description: "Spicy chickpea curry served with two fluffy puffed bhaturas, pickled onions, and mint chutney.",
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "hal-2",
    restaurantId: "haldirams",
    restaurantName: "Haldiram's",
    name: "Royal Raj Kachori Chaat",
    category: "Sides & Starters",
    price: 149,
    rating: "4.95★ (3.2k)",
    time: "15 min",
    isVeg: true,
    tag: "👑 Chaat King",
    description: "Crispy giant kachori stuffed with sprouts, boiled potatoes, sweetened yogurt, and tangy tamarind chutney.",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "hal-3",
    restaurantId: "haldirams",
    restaurantName: "Haldiram's",
    name: "Special Pav Bhaji",
    category: "Sides & Starters",
    price: 159,
    rating: "4.89★ (2.8k)",
    time: "15 min",
    isVeg: true,
    tag: "🧈 Butter Special",
    description: "Mashed vegetable curry cooked in aromatic spices, topped with generous butter, served with toasted pavs.",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "hal-4",
    restaurantId: "haldirams",
    restaurantName: "Haldiram's",
    name: "Kesar Pista Badam Lassi",
    category: "Refreshers & Drinks",
    price: 99,
    rating: "4.93★ (3.4k)",
    time: "5 min",
    isVeg: true,
    tag: "🥤 Royal Drink",
    description: "Thick churned sweet yogurt drink flavored with saffron, pistachios, and almonds.",
    image: "https://images.unsplash.com/photo-1571006682858-a458b8a69288?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "hal-5",
    restaurantId: "haldirams",
    restaurantName: "Haldiram's",
    name: "Hot Gulab Jamun (2 Pcs)",
    category: "Desserts",
    price: 89,
    rating: "4.96★ (4.1k)",
    time: "5 min",
    isVeg: true,
    tag: "🍯 Warm Sweet",
    description: "Soft fried milk dumpling soaked in warm cardamom-scented sugar syrup.",
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=600&q=80"
  },

  // ---------- STARBUCKS COFFEE ----------
  {
    id: "sb-1",
    restaurantId: "starbucks",
    restaurantName: "Starbucks Coffee",
    name: "Java Chip Frappuccino",
    category: "Refreshers & Drinks",
    price: 299,
    rating: "4.9★ (2.8k)",
    time: "10 min",
    isVeg: true,
    tag: "🥤 Chilled Coffee",
    description: "Coffee blended with mocha sauce, frappuccino chips, milk and ice, topped with whipped cream.",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "sb-2",
    restaurantId: "starbucks",
    restaurantName: "Starbucks Coffee",
    name: "Caffe Latte (Tall)",
    category: "Refreshers & Drinks",
    price: 249,
    rating: "4.86★ (1.9k)",
    time: "10 min",
    isVeg: true,
    tag: "☕ Hot Espresso",
    description: "Rich espresso combined with steamed milk and a light layer of foam.",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "sb-3",
    restaurantId: "starbucks",
    restaurantName: "Starbucks Coffee",
    name: "New York Style Cheesecake",
    category: "Desserts",
    price: 299,
    rating: "4.95★ (2.1k)",
    time: "10 min",
    isVeg: true,
    tag: "🍰 Bakery Icon",
    description: "Dense, smooth and creamy cheesecake on a buttery Graham cracker crust.",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "sb-4",
    restaurantId: "starbucks",
    restaurantName: "Starbucks Coffee",
    name: "Butter Croissant",
    category: "Sides & Starters",
    price: 179,
    rating: "4.88★ (1.5k)",
    time: "10 min",
    isVeg: true,
    tag: "🥐 French Pastry",
    description: "Flaky, buttery French croissant baked fresh daily.",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "sush-1",
    restaurantId: "starbucks",
    restaurantName: "Starbucks Coffee",
    name: "Chef's Omakase Premium Sushi Platter",
    category: "Fresh Sushi",
    price: 599,
    rating: "4.98★ (950)",
    time: "20 min",
    isVeg: false,
    tag: "🍣 Fresh Catch",
    description: "12-piece chef selection featuring salmon nigiri, spicy tuna rolls, and avocado dragon roll.",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=600&q=80"
  },

  // ---------- BIRYANI BY KILO ----------
  {
    id: "bbk-1",
    restaurantId: "bbk",
    restaurantName: "Biryani By Kilo",
    name: "Hyderabadi Dum Chicken Biryani",
    category: "Biryani",
    price: 449,
    rating: "4.96★ (3.8k)",
    time: "35 min",
    isVeg: false,
    tag: "👑 Authentic Handi",
    description: "Slow-cooked long grain basmati rice with marinated chicken pieces and aromatic spices in a clay handi.",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "bbk-2",
    restaurantId: "bbk",
    restaurantName: "Biryani By Kilo",
    name: "Lucknowi Veg Dum Biryani",
    category: "Biryani",
    price: 379,
    rating: "4.89★ (1.9k)",
    time: "30 min",
    isVeg: true,
    tag: "🌱 Veg Handi",
    description: "Fresh garden vegetables cooked with saffron-infused basmati rice and mild royal spices.",
    image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "bbk-3",
    restaurantId: "bbk",
    restaurantName: "Biryani By Kilo",
    name: "Mutton Galouti Kebab (4 Pcs)",
    category: "Sides & Starters",
    price: 399,
    rating: "4.95★ (2.1k)",
    time: "25 min",
    isVeg: false,
    tag: "🍢 Melt in Mouth",
    description: "Finely minced mutton kebabs infused with 16 spices, cooked on a tawa.",
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "bbk-4",
    restaurantId: "bbk",
    restaurantName: "Biryani By Kilo",
    name: "Matka Kesar Phirni Dessert",
    category: "Desserts",
    price: 129,
    rating: "4.92★ (1.8k)",
    time: "10 min",
    isVeg: true,
    tag: "🏺 Traditional Matka",
    description: "Creamy ground rice pudding flavored with saffron, cardamom and topped with pistachios.",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80"
  },

  // ---------- TACO BELL ----------
  {
    id: "tb-1",
    restaurantId: "tacobell",
    restaurantName: "Taco Bell",
    name: "Crunchy Taco Supreme",
    category: "Sides & Starters",
    price: 149,
    rating: "4.75★ (1.1k)",
    time: "15 min",
    isVeg: false,
    tag: "🌮 Mexican Crunch",
    description: "Crispy corn taco shell stuffed with seasoned chicken, sour cream, cheese, and tomatoes.",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "tb-2",
    restaurantId: "tacobell",
    restaurantName: "Taco Bell",
    name: "Loaded Cheese Quesadilla",
    category: "Sides & Starters",
    price: 179,
    rating: "4.81★ (1.4k)",
    time: "15 min",
    isVeg: true,
    tag: "🧀 Cheesy Treat",
    description: "Warm grilled flour tortilla filled with double 3-cheese blend and creamy jalapeno sauce.",
    image: "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "tb-3",
    restaurantId: "tacobell",
    restaurantName: "Taco Bell",
    name: "Cinnamon Chocolate Churros",
    category: "Desserts",
    price: 119,
    rating: "4.87★ (1.6k)",
    time: "10 min",
    isVeg: true,
    tag: "🍫 Sweet Cinnamon",
    description: "Crispy fried churro sticks dusted with cinnamon sugar, served with warm chocolate dip.",
    image: "https://images.unsplash.com/photo-1624371414361-e670ef488916?auto=format&fit=crop&w=600&q=80"
  }
];

// App State
let state = {
  cart: JSON.parse(localStorage.getItem("craverush_cart")) || [],
  appliedCoupon: null,
  discountAmount: 0,
  activeRestaurantFilter: "all",
  activeDishCategory: "All items",
  activeVegFilter: "all", // "all", "veg", "nonveg"
  searchQuery: "",
  user: JSON.parse(localStorage.getItem("craverush_user")) || null,
  location: localStorage.getItem("craverush_location") || "Sector 17, Chandigarh",
  activeOrder: JSON.parse(localStorage.getItem("craverush_active_order")) || null,
  trackingTimer: null
};

// DOM Elements
const loader = document.getElementById("loader");
const restaurantContainer = document.getElementById("restaurant-container");
const dishContainer = document.getElementById("dish-container");
const cartBadge = document.getElementById("cart-badge");
const cartDrawer = document.getElementById("cart-drawer");
const cartOverlay = document.getElementById("cart-drawer-overlay");
const cartItemsContainer = document.getElementById("cart-items-container");
const cartEmptyState = document.getElementById("cart-empty-state");
const cartSubtotalEl = document.getElementById("cart-subtotal");
const cartDiscountRow = document.getElementById("cart-discount-row");
const cartDiscountEl = document.getElementById("cart-discount");
const cartTotalEl = document.getElementById("cart-total");
const couponInput = document.getElementById("coupon-code");
const authModal = document.getElementById("auth-modal");
const trackingModal = document.getElementById("tracking-modal");
const aboutModal = document.getElementById("about-modal");
const restaurantMenuModal = document.getElementById("restaurant-menu-modal");
const toastContainer = document.getElementById("toast-container");
const userProfileContainer = document.getElementById("user-profile-container");

// Initialization
document.addEventListener("DOMContentLoaded", () => {
  // Hide loader after loading window
  setTimeout(() => {
    if (loader) {
      loader.classList.add("loader-hidden");
      document.documentElement.classList.remove("is-loading");
    }
  }, 1000);

  // Initialize UI Renderers
  renderRestaurants();
  renderDishes();
  updateCartUI();
  updateUserUI();

  // Setup Event Listeners
  setupEventListeners();

  // Check for active order tracking
  if (state.activeOrder) {
    startOrderTrackingTimer();
  }
});

// ---------- RENDERERS ---------- //

function renderRestaurants() {
  if (!restaurantContainer) return;

  const query = state.searchQuery.toLowerCase();
  const filtered = RESTAURANTS.filter(r => {
    const matchesCategory = state.activeRestaurantFilter === "all" || r.category === state.activeRestaurantFilter;
    const matchesSearch = r.name.toLowerCase().includes(query) || r.cuisines.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    restaurantContainer.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--muted-3);">
        <i class="fa-solid fa-store-slash" style="font-size: 36px; margin-bottom: 12px; display: block;"></i>
        <p>No verified restaurant partners found matching "${state.searchQuery}".</p>
      </div>
    `;
    return;
  }

  restaurantContainer.innerHTML = filtered.map(r => `
    <div class="restaurant-card">
      <div class="restaurant-media">
        <img src="${r.image}" alt="${r.name}" loading="lazy">
        ${r.isVerified ? `<span class="verified-tag"><i class="fa-solid fa-circle-check"></i> Verified</span>` : ''}
      </div>
      <div class="restaurant-body">
        <div class="restaurant-title">
          <h3>${r.name}</h3>
          <span class="rating-badge"><i class="fa-solid fa-star"></i> ${r.rating}</span>
        </div>
        <div class="restaurant-meta">
          <span><i class="fa-solid fa-clock"></i> ${r.time}</span>
          <span>•</span>
          <span>${r.priceForTwo}</span>
        </div>
        <p class="restaurant-cuisines">${r.cuisines}</p>
        <button class="browse-menu-btn" onclick="openRestaurantMenu('${r.id}')">
          <i class="fa-solid fa-utensils"></i> Browse Menu
        </button>
      </div>
    </div>
  `).join("");
}

function renderDishes() {
  if (!dishContainer) return;

  const query = state.searchQuery.toLowerCase();
  const filtered = DISHES.filter(d => {
    const matchesCat = state.activeDishCategory === "All items" || d.category === state.activeDishCategory;
    const matchesVeg = state.activeVegFilter === "all" || 
                      (state.activeVegFilter === "veg" && d.isVeg) || 
                      (state.activeVegFilter === "nonveg" && !d.isVeg);
    const matchesSearch = d.name.toLowerCase().includes(query) || d.restaurantName.toLowerCase().includes(query) || d.category.toLowerCase().includes(query);
    return matchesCat && matchesVeg && matchesSearch;
  });

  if (filtered.length === 0) {
    dishContainer.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 50px; color: var(--muted-3);">
        <i class="fa-solid fa-bowl-rice" style="font-size: 42px; margin-bottom: 14px; display: block;"></i>
        <p>No dishes found matching your selection.</p>
      </div>
    `;
    return;
  }

  dishContainer.innerHTML = filtered.map(d => {
    const cartItem = state.cart.find(item => item.id === d.id);
    const quantity = cartItem ? cartItem.quantity : 0;

    return `
      <div class="dish-card">
        <div class="dish-media">
          <img src="${d.image}" alt="${d.name}" loading="lazy">
          <span class="dish-tag">${d.tag}</span>
        </div>
        <div class="dish-body">
          <div class="dish-header">
            <span class="diet-icon ${d.isVeg ? 'veg' : 'non-veg'}" title="${d.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}"></span>
            <span class="dish-cat">${d.restaurantName} • ${d.category}</span>
          </div>
          <h3>${d.name}</h3>
          <p class="dish-desc">${d.description}</p>
          <div class="dish-meta">
            <span class="rating"><i class="fa-solid fa-star"></i> ${d.rating}</span>
            <span><i class="fa-solid fa-clock"></i> ${d.time}</span>
          </div>
          <div class="dish-footer">
            <span class="dish-price">₹${d.price}</span>
            ${quantity === 0 ? `
              <button class="add-cart-btn" onclick="addToCart('${d.id}')">
                <i class="fa-solid fa-plus"></i> ADD
              </button>
            ` : `
              <div class="cart-stepper">
                <button onclick="updateQuantity('${d.id}', -1)">-</button>
                <span>${quantity}</span>
                <button onclick="updateQuantity('${d.id}', 1)">+</button>
              </div>
            `}
          </div>
        </div>
      </div>
    `;
  }).join("");
}

function updateCartUI() {
  // Update badge count
  const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  const badges = document.querySelectorAll(".cart-badge");
  badges.forEach(badge => {
    badge.textContent = totalItems;
    badge.style.display = totalItems > 0 ? "flex" : "none";
  });

  // Render items in cart drawer
  if (!cartItemsContainer) return;

  if (state.cart.length === 0) {
    cartItemsContainer.innerHTML = "";
    if (cartEmptyState) cartEmptyState.style.display = "block";
  } else {
    if (cartEmptyState) cartEmptyState.style.display = "none";
    cartItemsContainer.innerHTML = state.cart.map(item => `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" class="cart-item-img">
        <div class="cart-item-info">
          <h4>${item.name}</h4>
          <span class="cart-item-price">₹${item.price * item.quantity}</span>
        </div>
        <div class="cart-stepper">
          <button onclick="updateQuantity('${item.id}', -1)">-</button>
          <span>${item.quantity}</span>
          <button onclick="updateQuantity('${item.id}', 1)">+</button>
        </div>
      </div>
    `).join("");
  }

  // Calculate Bill
  const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  let discount = 0;

  if (state.appliedCoupon === "CRAVE50") {
    discount = Math.min(Math.round(subtotal * 0.5), 150);
  } else if (state.appliedCoupon === "WELCOME100") {
    discount = Math.min(100, subtotal);
  }
  state.discountAmount = discount;

  const deliveryFee = subtotal > 0 ? (subtotal >= 499 ? 0 : 49) : 0;
  const taxes = subtotal > 0 ? Math.round(subtotal * 0.05) : 0;
  const grandTotal = Math.max(0, subtotal - discount + deliveryFee + taxes);

  if (cartSubtotalEl) cartSubtotalEl.textContent = `₹${subtotal}`;
  if (cartDiscountRow && cartDiscountEl) {
    if (discount > 0) {
      cartDiscountRow.style.display = "flex";
      cartDiscountEl.textContent = `-₹${discount}`;
    } else {
      cartDiscountRow.style.display = "none";
    }
  }
  if (cartTotalEl) cartTotalEl.textContent = `₹${grandTotal}`;

  // Persist to local storage
  localStorage.setItem("craverush_cart", JSON.stringify(state.cart));
}

function updateUserUI() {
  const desktopContainer = document.getElementById("user-profile-container");
  const mobileContainer = document.getElementById("mobile-profile-container");

  const renderProfileHTML = (isMobile) => {
    if (state.user) {
      const initials = state.user.name ? state.user.name.charAt(0).toUpperCase() : "U";
      if (isMobile) {
        return `
          <div class="mobile-profile-info">
            <span class="user-avatar">${initials}</span>
            <div>
              <strong>${state.user.name || 'Account'}</strong>
              <span class="mobile-profile-email">${state.user.email || ''}</span>
            </div>
          </div>
          <div class="mobile-profile-actions">
            <button onclick="openAuthModal()" class="btn btn-solid btn-sm">Account</button>
            <button onclick="logoutUser()" class="btn btn-ghost btn-sm logout-btn-text"><i class="fa-solid fa-arrow-right-from-bracket"></i> Logout</button>
          </div>
        `;
      } else {
        return `
          <div class="user-profile-btn" onclick="openAuthModal()">
            <span class="user-avatar">${initials}</span>
            <span>${state.user.name || 'Account'}</span>
          </div>
        `;
      }
    } else {
      if (isMobile) {
        return `
          <button class="btn btn-solid" onclick="openAuthModal()" style="width: 100%; padding: 12px; font-weight: 600;">
            <i class="fa-regular fa-user"></i> Sign In / Sign Up
          </button>
        `;
      } else {
        return `
          <button class="btn btn-ghost" onclick="openAuthModal()" style="padding:10px 20px; font-size:14px;">
            <i class="fa-regular fa-user"></i> Sign in
          </button>
        `;
      }
    }
  };

  if (desktopContainer) desktopContainer.innerHTML = renderProfileHTML(false);
  if (mobileContainer) mobileContainer.innerHTML = renderProfileHTML(true);
}

// ---------- CART LOGIC ---------- //

function addToCart(dishId) {
  const dish = DISHES.find(d => d.id === dishId);
  if (!dish) return;

  const existing = state.cart.find(item => item.id === dishId);
  if (existing) {
    existing.quantity += 1;
  } else {
    state.cart.push({ ...dish, quantity: 1 });
  }

  showToast(`Added "${dish.name}" to your bag!`);
  updateCartUI();
  renderDishes();

  // If restaurant menu modal is open, refresh it as well
  if (document.getElementById("restaurant-menu-modal").classList.contains("active")) {
    const activeRestId = dish.restaurantId;
    openRestaurantMenu(activeRestId);
  }
}

function updateQuantity(dishId, change) {
  const item = state.cart.find(i => i.id === dishId);
  if (!item) return;

  item.quantity += change;
  if (item.quantity <= 0) {
    state.cart = state.cart.filter(i => i.id !== dishId);
    showToast(`Removed from bag.`);
  }

  updateCartUI();
  renderDishes();

  // Refresh restaurant menu modal if active
  if (document.getElementById("restaurant-menu-modal").classList.contains("active")) {
    const dish = DISHES.find(d => d.id === dishId);
    if (dish) openRestaurantMenu(dish.restaurantId);
  }
}

function applyCoupon() {
  const code = couponInput ? couponInput.value.trim().toUpperCase() : "";
  if (!code) {
    showToast("Please enter a valid coupon code.");
    return;
  }

  if (code === "CRAVE50" || code === "WELCOME100") {
    state.appliedCoupon = code;
    showToast(`Coupon "${code}" applied successfully! 🎉`);
    updateCartUI();
  } else {
    showToast("Invalid coupon code. Try CRAVE50 or WELCOME100.");
  }
}

// ---------- RESTAURANT MENU MODAL ---------- //

function openRestaurantMenu(restaurantId) {
  const restaurant = RESTAURANTS.find(r => r.id === restaurantId);
  if (!restaurant) return;

  const restaurantDishes = DISHES.filter(d => d.restaurantId === restaurantId);
  const modalContent = document.getElementById("restaurant-menu-content");
  if (!modalContent) return;

  modalContent.innerHTML = `
    <div class="modal-header">
      <div>
        <h3>${restaurant.name}</h3>
        <p style="font-size:13px; color:var(--muted-3); margin-top:2px;">${restaurant.cuisines}</p>
      </div>
      <button class="close-btn" onclick="closeModal('restaurant-menu-modal')"><i class="fa-solid fa-xmark"></i></button>
    </div>
    <div class="modal-body">
      <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:20px; padding:12px; background:var(--paper); border-radius:var(--radius-sm);">
        <span class="rating-badge"><i class="fa-solid fa-star"></i> ${restaurant.rating} (${restaurant.reviews})</span>
        <span style="font-size:13.5px; color:var(--muted-1);"><i class="fa-solid fa-clock"></i> ${restaurant.time}</span>
        <span style="font-size:13.5px; color:var(--muted-1);">${restaurant.priceForTwo}</span>
      </div>
      <h4 style="font-family:var(--font-display); font-size:18px; margin-bottom:16px;">Full Menu (${restaurantDishes.length} Items)</h4>
      <div style="display:flex; flex-direction:column; gap:16px;">
        ${restaurantDishes.length > 0 ? restaurantDishes.map(d => {
          const cartItem = state.cart.find(item => item.id === d.id);
          const qty = cartItem ? cartItem.quantity : 0;
          return `
            <div style="display:flex; gap:16px; padding:12px; border:1px solid var(--line); border-radius:16px; background:var(--card); align-items:center;">
              <img src="${d.image}" alt="${d.name}" style="width:76px; height:76px; border-radius:12px; object-fit:cover;">
              <div style="flex:1;">
                <div style="display:flex; align-items:center; gap:6px; margin-bottom:4px;">
                  <span class="diet-icon ${d.isVeg ? 'veg' : 'non-veg'}"></span>
                  <strong style="font-size:15px; font-family:var(--font-body);">${d.name}</strong>
                </div>
                <p style="font-size:12.5px; color:var(--muted-3); margin-bottom:4px;">${d.description}</p>
                <span style="font-family:var(--font-display); font-weight:700; color:var(--chili); font-size:16px;">₹${d.price}</span>
              </div>
              <div>
                ${qty === 0 ? `
                  <button class="add-cart-btn btn-sm" onclick="addToCart('${d.id}')">+ ADD</button>
                ` : `
                  <div class="cart-stepper">
                    <button onclick="updateQuantity('${d.id}', -1)">-</button>
                    <span>${qty}</span>
                    <button onclick="updateQuantity('${d.id}', 1)">+</button>
                  </div>
                `}
              </div>
            </div>
          `;
        }).join("") : `
          <div style="text-align:center; padding:30px; color:var(--muted-3);">
            <p>Menu updating for ${restaurant.name}...</p>
          </div>
        `}
      </div>
    </div>
  `;

  openModal("restaurant-menu-modal");
}

// ---------- CHECKOUT & ORDER TRACKING ---------- //

function proceedToCheckout() {
  if (state.cart.length === 0) {
    showToast("Your food bag is empty!");
    return;
  }

  // If user not signed in, prompt login
  if (!state.user) {
    showToast("Please sign in to complete your food order.");
    openAuthModal();
    return;
  }

  // Redirect to the dedicated checkout page
  window.location.href = "checkout.html";
}

function openOrderTracking() {
  if (!state.activeOrder) {
    showToast("No active orders right now.");
    return;
  }

  const content = document.getElementById("tracking-modal-content");
  if (!content) return;

  const step = state.activeOrder.statusStep;
  const progressPercent = ((step - 1) / 3) * 100;

  content.innerHTML = `
    <div class="modal-header">
      <div>
        <h3>Live Order Tracker</h3>
        <p style="font-size:13px; color:var(--muted-3);">Order #${state.activeOrder.orderId}</p>
      </div>
      <button class="close-btn" onclick="closeModal('tracking-modal')"><i class="fa-solid fa-xmark"></i></button>
    </div>
    <div class="modal-body">
      <div class="tracking-container">
        <div class="tracking-status-badge">
          <i class="fa-solid fa-bolt"></i>
          <span>${getStatusTitle(step)}</span>
        </div>

        <p style="font-size:14px; color:var(--muted-1); margin-bottom:20px;">
          Estimated delivery time: <strong style="color:var(--chili); font-size:18px;">${state.activeOrder.estimatedMinutes} mins</strong>
        </p>

        <div class="timeline">
          <div class="timeline-progress" style="width: calc(${progressPercent}% - 40px);"></div>
          
          <div class="timeline-step ${step >= 1 ? (step === 1 ? 'active' : 'completed') : ''}">
            <div class="step-icon"><i class="fa-solid fa-receipt"></i></div>
            <span class="step-label">Order Placed</span>
          </div>
          <div class="timeline-step ${step >= 2 ? (step === 2 ? 'active' : 'completed') : ''}">
            <div class="step-icon"><i class="fa-solid fa-fire-burner"></i></div>
            <span class="step-label">Preparing</span>
          </div>
          <div class="timeline-step ${step >= 3 ? (step === 3 ? 'active' : 'completed') : ''}">
            <div class="step-icon"><i class="fa-solid fa-motorcycle"></i></div>
            <span class="step-label">On the Way</span>
          </div>
          <div class="timeline-step ${step >= 4 ? 'completed active' : ''}">
            <div class="step-icon"><i class="fa-solid fa-house-chimney"></i></div>
            <span class="step-label">Delivered</span>
          </div>
        </div>

        <div class="rider-card">
          <div class="rider-avatar">🛵</div>
          <div style="flex:1;">
            <strong>Rider Alex Vance</strong>
            <span style="display:block; font-size:12px; color:var(--muted-3);">EV Fast Fleet • 4.9★ Rating</span>
          </div>
          <button class="btn btn-ghost btn-sm" onclick="showToast('Calling Rider Alex...')">
            <i class="fa-solid fa-phone"></i> Call
          </button>
        </div>

        <div style="margin-top:24px; text-align:left; padding:16px; background:var(--paper); border-radius:14px; border:1px solid var(--line);">
          <strong style="font-size:14px; display:block; margin-bottom:8px;">Order Summary (${state.activeOrder.items.length} items)</strong>
          ${state.activeOrder.items.map(i => `
            <div style="display:flex; justify-content:space-between; font-size:13.5px; color:var(--muted-1); margin-bottom:4px;">
              <span>${i.quantity}x ${i.name}</span>
              <span>₹${i.price * i.quantity}</span>
            </div>
          `).join("")}
          <div style="display:flex; justify-content:space-between; font-weight:700; font-size:15px; margin-top:8px; border-top:1px solid var(--line); padding-top:8px;">
            <span>Total Paid</span>
            <span>₹${state.activeOrder.total}</span>
          </div>
        </div>
      </div>
    </div>
  `;

  openModal("tracking-modal");
}

function getStatusTitle(step) {
  switch (step) {
    case 1: return "Order Received by Kitchen";
    case 2: return "Chef is Firing Up Your Meal 🔥";
    case 3: return "Rider Picked Up & On the Way 🛵";
    case 4: return "Order Delivered! Enjoy Your Meal 😋";
    default: return "Processing Order";
  }
}

function startOrderTrackingTimer() {
  if (state.trackingTimer) clearInterval(state.trackingTimer);

  state.trackingTimer = setInterval(() => {
    if (!state.activeOrder) {
      clearInterval(state.trackingTimer);
      return;
    }

    if (state.activeOrder.statusStep < 4) {
      state.activeOrder.statusStep += 1;
      state.activeOrder.estimatedMinutes = Math.max(0, state.activeOrder.estimatedMinutes - 5);
      localStorage.setItem("craverush_active_order", JSON.stringify(state.activeOrder));

      // Refresh tracking modal if open
      if (document.getElementById("tracking-modal").classList.contains("active")) {
        openOrderTracking();
      }

      showToast(`Order Status Update: ${getStatusTitle(state.activeOrder.statusStep)}`);
    } else {
      clearInterval(state.trackingTimer);
    }
  }, 10000); // Progresses every 10 seconds for demo
}

// ---------- AUTHENTICATION LOGIC ---------- //

function openAuthModal() {
  renderAuthModal();
  openModal("auth-modal");
}

// Decide whether the auth modal shows the sign in/up forms or the
// logged-in account panel (with the logout button), and fills it in.
function renderAuthModal() {
  const accountView = document.getElementById("account-view");
  const authFormsWrap = document.getElementById("auth-forms-wrap");
  if (!accountView || !authFormsWrap) return;

  if (state.user) {
    const initials = state.user.name ? state.user.name.charAt(0).toUpperCase() : "U";

    const avatarEl = document.getElementById("account-avatar-lg");
    const nameEl = document.getElementById("account-name");
    const emailEl = document.getElementById("account-email");
    const infoNameEl = document.getElementById("account-info-name");
    const infoEmailEl = document.getElementById("account-info-email");

    if (avatarEl) avatarEl.textContent = initials;
    if (nameEl) nameEl.textContent = state.user.name || "Account";
    if (emailEl) emailEl.textContent = state.user.email || "";
    if (infoNameEl) infoNameEl.textContent = state.user.name || "—";
    if (infoEmailEl) infoEmailEl.textContent = state.user.email || "—";

    accountView.style.display = "block";
    authFormsWrap.style.display = "none";
  } else {
    accountView.style.display = "none";
    authFormsWrap.style.display = "block";
    switchAuthTab("signin");
  }
}

// Logs the current user out, clears saved session, and refreshes the UI.
function logoutUser() {
  state.user = null;
  localStorage.removeItem("craverush_user");

  updateUserUI();
  closeModal("auth-modal");
  showToast("You've been logged out. See you soon! 👋");
}

function switchAuthTab(tab) {
  const signinForm = document.getElementById("signin-form");
  const signupForm = document.getElementById("signup-form");
  const tabBtns = document.querySelectorAll(".auth-tab");

  tabBtns.forEach(btn => btn.classList.remove("active"));
  if (tab === "signin") {
    tabBtns[0].classList.add("active");
    if (signinForm) signinForm.style.display = "block";
    if (signupForm) signupForm.style.display = "none";
  } else {
    tabBtns[1].classList.add("active");
    if (signinForm) signinForm.style.display = "none";
    if (signupForm) signupForm.style.display = "block";
  }
}

function handleSignIn(e) {
  e.preventDefault();
  const email = document.getElementById("signin-email").value;
  const name = email.split("@")[0] || "User";

  state.user = { name, email };
  localStorage.setItem("craverush_user", JSON.stringify(state.user));

  updateUserUI();
  renderAuthModal();
  closeModal("auth-modal");
  showToast(`Welcome back, ${name}! 👋`);
}

function handleSignUp(e) {
  e.preventDefault();
  const name = document.getElementById("signup-name").value;
  const email = document.getElementById("signup-email").value;

  state.user = { name, email };
  localStorage.setItem("craverush_user", JSON.stringify(state.user));

  updateUserUI();
  renderAuthModal();
  closeModal("auth-modal");
  showToast(`Account created! Welcome to CraveRush, ${name}! 🎉`);
}

// ---------- ABOUT MODAL ---------- //

function openAboutModal() {
  openModal("about-modal");
}

// ---------- HELPER UTILITIES ---------- //

function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
}

function toggleCartDrawer(open) {
  if (cartDrawer && cartOverlay) {
    if (open) {
      cartDrawer.classList.add("active");
      cartOverlay.classList.add("active");
      document.body.style.overflow = "hidden";
    } else {
      cartDrawer.classList.remove("active");
      cartOverlay.classList.remove("active");
      document.body.style.overflow = "";
    }
  }
}

function showToast(message) {
  if (!toastContainer) return;

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<i class="fa-solid fa-bag-shopping"></i> <span>${message}</span>`;
  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(20px)";
    setTimeout(() => toast.remove(), 350);
  }, 3000);
}

// ---------- EVENT LISTENERS SETUP ---------- //

function setupEventListeners() {
  // Cart Drawer open/close (desktop and mobile cart buttons)
  const cartBtns = document.querySelectorAll(".cart-btn, #open-cart-btn");
  cartBtns.forEach(btn => btn.addEventListener("click", () => toggleCartDrawer(true)));

  const closeCartBtn = document.getElementById("close-cart-btn");
  if (closeCartBtn) closeCartBtn.addEventListener("click", () => toggleCartDrawer(false));
  if (cartOverlay) cartOverlay.addEventListener("click", () => toggleCartDrawer(false));

  // Hamburger and Mobile Drawer accessibility and events
  const menuToggle = document.getElementById("menu-toggle");
  const burger = document.querySelector(".burger");
  
  if (menuToggle && burger) {
    menuToggle.addEventListener("change", () => {
      const isOpen = menuToggle.checked;
      burger.setAttribute("aria-expanded", isOpen ? "true" : "false");
      
      if (isOpen) {
        document.body.classList.add("menu-open-scroll-lock");
      } else {
        document.body.classList.remove("menu-open-scroll-lock");
      }
    });

    // Close menu when pressing Escape
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && menuToggle.checked) {
        menuToggle.checked = false;
        menuToggle.dispatchEvent(new Event("change"));
      }
    });

    // Close menu when clicking outside of nav
    document.addEventListener("click", (e) => {
      if (menuToggle.checked) {
        const headerNav = document.querySelector("nav");
        if (headerNav && !headerNav.contains(e.target)) {
          menuToggle.checked = false;
          menuToggle.dispatchEvent(new Event("change"));
        }
      }
    });

    // Close menu when clicking any nav link inside drawer
    const drawerLinks = document.querySelectorAll(".mobile-nav-links a, .nav-links-list a");
    drawerLinks.forEach(link => {
      link.addEventListener("click", () => {
        menuToggle.checked = false;
        menuToggle.dispatchEvent(new Event("change"));
      });
    });
  }

  // Sync Theme Toggle checkboxes
  const themeToggle = document.getElementById("theme-toggle");
  const themeToggleMobile = document.getElementById("theme-toggle-mobile");
  if (themeToggle && themeToggleMobile) {
    const savedTheme = localStorage.getItem("craverush_theme");
    if (savedTheme === "dark") {
      themeToggle.checked = true;
      themeToggleMobile.checked = true;
    }
    
    const handleThemeChange = (e) => {
      const isDark = e.target.checked;
      themeToggle.checked = isDark;
      themeToggleMobile.checked = isDark;
      localStorage.setItem("craverush_theme", isDark ? "dark" : "light");
    };

    themeToggle.addEventListener("change", handleThemeChange);
    themeToggleMobile.addEventListener("change", handleThemeChange);
  }

  // Sync Veg Preference Toggle checkboxes
  const vegSwitch = document.getElementById("veg-only-toggle");
  const vegSwitchMobile = document.getElementById("veg-only-toggle-mobile");
  if (vegSwitch && vegSwitchMobile) {
    vegSwitchMobile.addEventListener("change", (e) => {
      vegSwitch.checked = e.target.checked;
      toggleVegOnly(e.target.checked);
    });
  }

  // Global Search input
  const searchInput = document.getElementById("global-search");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      state.searchQuery = e.target.value;
      renderRestaurants();
      renderDishes();
    });
  }

  // Category Pills
  const catPills = document.querySelectorAll(".cat-pill");
  catPills.forEach(pill => {
    pill.addEventListener("click", () => {
      catPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      state.activeDishCategory = pill.dataset.cat || "All items";
      renderDishes();
    });
  });

  // Veg/Non-Veg Filter (dropdown in the menu filter bar)
  const vegToggle = document.getElementById("veg-toggle");
  if (vegToggle) {
    vegToggle.value = state.activeVegFilter;
    vegToggle.addEventListener("change", (e) => {
      applyVegFilter(e.target.value);
    });
  }

  // Sync the header veg-only switch with any saved preference on load
  syncVegSwitch(state.activeVegFilter);

  // Show the delivery address that was saved from a previous visit
  updateLocationUI();
}

// ---------- VEG / NON-VEG PREFERENCE ---------- //

// Called by the header's Veg-Only switch (on = veg only, off = show all).
function toggleVegOnly(isChecked) {
  applyVegFilter(isChecked ? "veg" : "all");
}

// Single source of truth for changing the veg/non-veg preference -
// keeps the header switch and the menu-page dropdown in sync.
function applyVegFilter(filter) {
  state.activeVegFilter = filter;

  syncVegSwitch(filter);

  const vegSelect = document.getElementById("veg-toggle");
  if (vegSelect) vegSelect.value = filter;

  renderDishes();
}

// The header switch is binary (Veg Only on/off), so it reflects "veg"
// as checked and both "all" and "nonveg" as unchecked.
function syncVegSwitch(filter) {
  const vegSwitch = document.getElementById("veg-only-toggle");
  if (vegSwitch) vegSwitch.checked = filter === "veg";
  const vegSwitchMobile = document.getElementById("veg-only-toggle-mobile");
  if (vegSwitchMobile) vegSwitchMobile.checked = filter === "veg";
}

// ---------- DELIVERY ADDRESS ---------- //

// Picking a saved/popular address from the location modal.
function setLocation(address) {
  state.location = address;
  localStorage.setItem("craverush_location", address);

  updateLocationUI();
  closeModal("location-modal");
  showToast(`Delivery location set to ${address}`);
}

// Typing a custom address into the location modal's input field.
function selectCustomLocation() {
  const input = document.getElementById("custom-location-input");
  if (!input) return;

  const value = input.value.trim();
  if (!value) {
    showToast("Please enter an address, sector, or landmark");
    return;
  }

  setLocation(value);
  input.value = "";
}

// Reflects the saved delivery address in the header on every page.
function updateLocationUI() {
  const label = document.getElementById("current-location-text");
  if (label) label.textContent = state.location;
}
