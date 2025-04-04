
export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  images: string[];
  sizes: number[];
  colors: string[];
  category: string;
  brand: string;
  isNew?: boolean;
  isFeatured?: boolean;
  rating?: number;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Air Max 270",
    price: 129.99,
    originalPrice: 149.99,
    description: "The Nike Air Max 270 delivers unrivaled comfort with a large Air unit and knit upper that gives you a supportive fit.",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2",
      "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb"
    ],
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
    colors: ["Black", "White", "Red"],
    category: "Running",
    brand: "Nike",
    isNew: true,
    isFeatured: true,
    rating: 4.7
  },
  {
    id: "2",
    name: "Ultraboost 4.0",
    price: 139.99,
    description: "Experience ultimate energy return with the Adidas Ultraboost. Responsive Boost cushioning and a Primeknit upper deliver superior comfort.",
    images: [
      "https://images.unsplash.com/photo-1576672843344-f01907a9d40c",
      "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb",
      "https://images.unsplash.com/photo-1605348532760-6753d2c43329"
    ],
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
    colors: ["Black", "Gray", "Blue"],
    category: "Running",
    brand: "Adidas",
    isFeatured: true,
    rating: 4.8
  },
  {
    id: "3",
    name: "Jordan 4 Retro",
    price: 219.99,
    description: "The Air Jordan 4 Retro delivers heritage style with premium materials and iconic details that pay homage to the original.",
    images: [
      "https://images.unsplash.com/photo-1600181516264-3ea807ff44b9",
      "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a"
    ],
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
    colors: ["Black", "White", "Red"],
    category: "Basketball",
    brand: "Nike",
    isNew: true,
    rating: 4.9
  },
  {
    id: "4",
    name: "Classic Leather",
    price: 79.99,
    description: "The Reebok Classic Leather features a soft leather upper and die-cut EVA midsole for superior cushioning and style.",
    images: [
      "https://images.unsplash.com/photo-1595341888016-a392ef81b7de",
      "https://images.unsplash.com/photo-1603808033192-082d6919d3e1",
      "https://images.unsplash.com/photo-1579338559194-a162d19bf842"
    ],
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
    colors: ["White", "Black", "Gum"],
    category: "Lifestyle",
    brand: "Reebok",
    rating: 4.5
  },
  {
    id: "5",
    name: "Old Skool",
    price: 69.99,
    description: "The Vans Old Skool is a classic skate shoe with the iconic side stripe and durable construction for everyday wear.",
    images: [
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
      "https://images.unsplash.com/photo-1606890658317-7d14490b76fd",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5"
    ],
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
    colors: ["Black", "White", "Blue"],
    category: "Skateboarding",
    brand: "Vans",
    rating: 4.6
  },
  {
    id: "6",
    name: "Chuck Taylor All Star",
    price: 59.99,
    description: "The Converse Chuck Taylor All Star is the original basketball shoe that's become a cultural icon with its timeless silhouette.",
    images: [
      "https://images.unsplash.com/photo-1607522370275-f14206abe5d3",
      "https://images.unsplash.com/photo-1494496195158-c3becb4f2475",
      "https://images.unsplash.com/photo-1463100099107-aa0980c362e6"
    ],
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
    colors: ["Black", "White", "Red"],
    category: "Lifestyle",
    brand: "Converse",
    rating: 4.4
  },
  {
    id: "7",
    name: "Air Force 1",
    price: 99.99,
    description: "The Nike Air Force 1 is a basketball classic that brings classic style, premium materials and Air cushioning for all-day comfort.",
    images: [
      "https://images.unsplash.com/photo-1600269452121-4f2416e55c28",
      "https://images.unsplash.com/photo-1606753930828-adce53e59138",
      "https://images.unsplash.com/photo-1605348532760-6753d2c43329"
    ],
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
    colors: ["White", "Black", "Red"],
    category: "Lifestyle",
    brand: "Nike",
    isFeatured: true,
    rating: 4.9
  },
  {
    id: "8",
    name: "Gel-Kayano 28",
    price: 159.99,
    description: "The ASICS Gel-Kayano 28 features advanced cushioning technology and a supportive fit for maximum comfort on long runs.",
    images: [
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa",
      "https://images.unsplash.com/photo-1539185441755-769473a23570",
      "https://images.unsplash.com/photo-1604671801908-6f0c6a092c05"
    ],
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
    colors: ["Blue", "Black", "Gray"],
    category: "Running",
    brand: "ASICS",
    isNew: true,
    rating: 4.7
  }
];

export const categories = [
  { id: "running", name: "Running" },
  { id: "basketball", name: "Basketball" },
  { id: "lifestyle", name: "Lifestyle" },
  { id: "skateboarding", name: "Skateboarding" },
  { id: "training", name: "Training" }
];

export const brands = [
  { id: "nike", name: "Nike" },
  { id: "adidas", name: "Adidas" },
  { id: "jordan", name: "Jordan" },
  { id: "reebok", name: "Reebok" },
  { id: "vans", name: "Vans" },
  { id: "converse", name: "Converse" },
  { id: "asics", name: "ASICS" }
];
