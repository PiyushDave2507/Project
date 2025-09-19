 const productData = [
  {
    "id": 1,
    "name": "Wireless Bluetooth Headphones",
    "category": "Electronics",
    "price": 2499,
    "stock": 56,
    "rating": 4.5,
    "image": "/images/shopping.webp",
    "description": "Noise-cancelling over-ear headphones with deep bass and 20 hours battery life."
  },
  {
    "id": 2,
    "name": "Smart Fitness Band",
    "category": "Electronics",
    "price": 1999,
    "stock": 80,
    "rating": 4.2,
    "image": "/images/fitness band.webp",
    "description": "Track your steps, heart rate, sleep and calories with this stylish fitness band."
  },
  {
    "id": 3,
    "name": "Men's Cotton T-Shirt",
    "category": "Fashion",
    "price": 799,
    "stock": 120,
    "rating": 4.0,
    "image": "/images/Men's Cotton T-Shirt.webp",
    "description": "Soft and breathable cotton t-shirt perfect for casual wear."
  },
  {
    "id": 4,
    "name": "Women's Summer Dress",
    "category": "Fashion",
    "price": 1499,
    "stock": 70,
    "rating": 4.4,
    "image": "/images/Women's Summer Dress.webp",
    "description": "Lightweight floral dress with a comfortable fit and modern design."
  },
  {
    "id": 5,
    "name": "Casual Sneakers",
    "category": "Footwear",
    "price": 2299,
    "stock": 50,
    "rating": 4.1,
    "image": "/images/Casual Sneakers.webp",
    "description": "Trendy lace-up sneakers suitable for daily casual wear."
  },
  {
    "id": 6,
    "name": "Leather Wallet",
    "category": "Accessories",
    "price": 999,
    "stock": 150,
    "rating": 4.6,
    "image": "/images/Leather Wallet.webp",
    "description": "Premium genuine leather wallet with multiple card slots and coin pocket."
  },
  {
    "id": 7,
    "name": "Laptop Backpack",
    "category": "Bags",
    "price": 1899,
    "stock": 60,
    "rating": 4.3,
    "image": "/images/Laptop Backpack.webp",
    "description": "Spacious water-resistant laptop backpack with USB charging port."
  },
  {
    "id": 8,
    "name": "Wireless Mouse",
    "category": "Electronics",
    "price": 699,
    "stock": 200,
    "rating": 4.1,
    "image": "/images/Wireless Mouse.webp",
    "description": "Ergonomic wireless mouse with silent clicks and adjustable DPI."
  },
  {
    "id": 9,
    "name": "Ceramic Coffee Mug",
    "category": "Home & Kitchen",
    "price": 349,
    "stock": 300,
    "rating": 4.7,
    "image": "/images/Ceramic Coffee Mug.webp",
    "description": "Stylish 350ml ceramic coffee mug, microwave and dishwasher safe."
  },
  {
    "id": 10,
    "name": "Wooden Study Table",
    "category": "Furniture",
    "price": 4999,
    "stock": 25,
    "rating": 4.5,
    "image": "/images/Wooden Study Table.webp",
    "description": "Compact wooden study table with storage drawers and smooth finish."
  },
  {
    "id": 11,
    "name": "Stainless Steel Water Bottle",
    "category": "Home & Kitchen",
    "price": 599,
    "stock": 140,
    "rating": 4.3,
    "image": "/images/Stainless Steel Water Bottle.webp",
    "description": "750ml insulated stainless steel bottle keeps drinks hot or cold for hours."
  },
  {
    "id": 12,
    "name": "Gaming Keyboard",
    "category": "Electronics",
    "price": 2899,
    "stock": 35,
    "rating": 4.6,
    "image": "/images/Gaming Keyboard.webp",
    "description": "Mechanical gaming keyboard with RGB backlighting and anti-ghosting keys."
  },
  {
    "id": 13,
    "name": "Bluetooth Speaker",
    "category": "Electronics",
    "price": 1599,
    "stock": 75,
    "rating": 4.4,
    "image": "/images/Bluetooth Speaker.webp",
    "description": "Portable waterproof Bluetooth speaker with 10 hours playback time."
  },
  {
    "id": 14,
    "name": "LED Table Lamp",
    "category": "Home & Kitchen",
    "price": 1299,
    "stock": 90,
    "rating": 4.2,
    "image": "/images/LED Table Lamp.webp",
    "description": "Energy-efficient LED lamp with adjustable brightness and touch controls."
  },
  {
    "id": 15,
    "name": "Yoga Mat",
    "category": "Sports",
    "price": 799,
    "stock": 110,
    "rating": 4.5,
    "image": "/images/Yoga Mat.webp",
    "description": "Non-slip yoga mat with carrying strap, ideal for workouts and meditation."
  },
  {
    "id": 16,
    "name": "Men's Analog Watch",
    "category": "Accessories",
    "price": 2599,
    "stock": 40,
    "rating": 4.1,
    "image": "/images/Men's Analog Watch.webp",
    "description": "Stylish analog wristwatch with stainless steel strap and date display."
  },
  {
    "id": 17,
    "name": "Women's Handbag",
    "category": "Bags",
    "price": 1899,
    "stock": 55,
    "rating": 4.4,
    "image": "/images/Women's Handbag.webp",
    "description": "Elegant handbag with spacious compartments and premium PU leather finish."
  },
  {
    "id": 18,
    "name": "Running Shoes",
    "category": "Footwear",
    "price": 2799,
    "stock": 65,
    "rating": 4.3,
    "image": "/images/Running Shoes.webp",
    "description": "Lightweight and comfortable running shoes with shock-absorbing sole."
  },
  {
    "id": 19,
    "name": "Cotton Bed Sheet Set",
    "category": "Home & Kitchen",
    "price": 1499,
    "stock": 85,
    "rating": 4.5,
    "image": "/images/Cotton Bed Sheet Set.webp",
    "description": "Soft cotton bedsheet set with 2 pillow covers, king size."
  },
  {
    "id": 20,
    "name": "Tabletop Plant",
    "category": "Home Decor",
    "price": 699,
    "stock": 100,
    "rating": 4.6,
    "image": "/images/Tabletop Plant.webp",
    "description": "Artificial tabletop plant to bring a refreshing vibe to your space."
  },
  {
    "id": 21,
    "name": "Digital Alarm Clock",
    "category": "Electronics",
    "price": 899,
    "stock": 130,
    "rating": 4.2,
    "image": "/images/Digital Alarm Clock.jpg",
    "description": "Compact digital clock with large LED display and snooze feature."
  },
  {
    "id": 22,
    "name": "Cookware Set",
    "category": "Home & Kitchen",
    "price": 3499,
    "stock": 45,
    "rating": 4.5,
    "image": "/images/Cookware Set.webp",
    "description": "5-piece non-stick cookware set for all your daily cooking needs."
  },
  {
    "id": 23,
    "name": "Slim Fit Jeans",
    "category": "Fashion",
    "price": 1999,
    "stock": 75,
    "rating": 4.3,
    "image": "/images/Slim Fit Jeans.webp",
    "description": "Comfortable stretchable slim-fit jeans for men."
  },
  {
    "id": 24,
    "name": "Sunglasses",
    "category": "Accessories",
    "price": 899,
    "stock": 95,
    "rating": 4.1,
    "image": "/images/Sunglasses.webp",
    "description": "UV protected stylish sunglasses suitable for all occasions."
  },
  {
    "id": 25,
    "name": "Smart LED Bulb",
    "category": "Electronics",
    "price": 699,
    "stock": 160,
    "rating": 4.4,
    "image": "/images/smart LED Bulb.webp",
    "description": "Color-changing smart bulb with app and voice assistant control."
  },
  {
    "id": 26,
    "name": "Kitchen Storage Jars",
    "category": "Home & Kitchen",
    "price": 499,
    "stock": 220,
    "rating": 4.6,
    "image": "/images/Kitchen Storage Jars.webp",
    "description": "Set of 6 airtight jars to store pulses, snacks, and spices."
  },
  {
    "id": 27,
    "name": "Foldable Study Chair",
    "category": "Furniture",
    "price": 2599,
    "stock": 30,
    "rating": 4.3,
    "image": "/images/Foldable Study Chair.webp",
    "description": "Ergonomic foldable study chair with cushioned seat and backrest."
  },
  {
    "id": 28,
    "name": "Electric Kettle",
    "category": "Home & Kitchen",
    "price": 1299,
    "stock": 90,
    "rating": 4.4,
    "image": "/images/Electric Kettle.webp",
    "description": "1.5L electric kettle with auto shut-off and boil dry protection."
  },
  {
    "id": 29,
    "name": "Cotton Bath Towel",
    "category": "Home & Kitchen",
    "price": 699,
    "stock": 150,
    "rating": 4.2,
    "image": "/images/Cotton Bed Sheet Set.webp",
    "description": "Super absorbent and quick-dry cotton bath towel, 100% cotton."
  },
  {
    "id": 30,
    "name": "Wireless Earbuds",
    "category": "Electronics",
    "price": 2199,
    "stock": 60,
    "rating": 4.3,
    "image": "/images/Wireless Earbuds.webp",
    "description": "Compact wireless earbuds with noise cancellation and fast charging case."
  }
]

export default productData;