
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
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
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
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
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
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
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
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
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
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
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
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
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
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
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
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
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
