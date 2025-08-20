export interface Product {
  id: string;
  title: string;
  price: string;
  originalPrice?: string;
  image: string;
  category: string;
  description: string;
  features: string[];
  specifications: Record<string, string>;
  isNew?: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    title: "Premium Stainless Steel Soap Dispenser",
    price: "₹89.99",
    originalPrice: "₹109.99",
    image: "/lovable-uploads/a11e4138-9c9d-4721-bff2-48da52d5ce99.png",
    category: "Kitchen Accessories",
    description: "Elevate your kitchen sink area with this premium stainless steel soap dispenser. Featuring a sleek brushed finish and ergonomic pump design, it combines style with functionality. The large capacity reservoir reduces refill frequency while the durable construction ensures long-lasting performance.",
    features: [
      "Premium 304 stainless steel construction",
      "Brushed finish resists fingerprints and water spots",
      "Large 12oz capacity reduces refill frequency",
      "Ergonomic pump with smooth operation",
      "Easy-fill top design",
      "Leak-proof seal technology",
      "Matches modern kitchen fixtures"
    ],
    specifications: {
      "Material": "304 Stainless Steel",
      "Capacity": "12 oz (355ml)",
      "Height": "8.5 inches",
      "Base Diameter": "3.2 inches",
      "Finish": "Brushed Stainless",
      "Pump Type": "Push-down",
      "Warranty": "5 years"
    },
    isNew: true
  },
  {
    id: "2",
    title: "Nested Storage Container Set - Ocean Blue",
    price: "₹45.99",
    originalPrice: "₹65.99",
    image: "/lovable-uploads/678b3b33-2f62-4422-b62d-724ba30e2b4a.png",
    category: "Storage Solutions",
    description: "Keep your kitchen organized with this beautiful 6-piece nested storage container set. The vibrant ocean blue color adds a pop of personality to your pantry while the airtight seals keep food fresh longer. Perfect for storing leftovers, meal prep, or organizing dry goods.",
    features: [
      "6-piece nested design saves 50% storage space",
      "Airtight silicone seals keep food fresh",
      "Microwave safe (without lids)",
      "Dishwasher safe for easy cleaning",
      "BPA-free food-grade plastic",
      "Clear graduated sizes",
      "Stack and nest for compact storage"
    ],
    specifications: {
      "Material": "BPA-Free Plastic",
      "Set Includes": "6 containers with lids",
      "Sizes": "0.5L, 0.8L, 1.2L, 1.8L, 2.5L, 3.2L",
      "Temperature Range": "-20°F to 250°F",
      "Seal Type": "Silicone Airtight",
      "Dishwasher Safe": "Yes",
      "Warranty": "2 years"
    }
  },
  {
    id: "3",
    title: "Professional Milk Frother with Red Handle",
    price: "₹79.99",
    image: "/lovable-uploads/7e8c635b-496e-4f1e-85a7-1833f23dcca5.png",
    category: "Kitchen Gadgets",
    description: "Create café-quality beverages at home with this professional-grade milk frother. The powerful motor and precision-engineered whisk create perfect microfoam for lattes, cappuccinos, and hot chocolates. The ergonomic red handle provides comfort during extended use.",
    features: [
      "Professional-grade motor for consistent results",
      "Precision stainless steel whisk",
      "Ergonomic soft-grip handle",
      "Creates perfect microfoam in 30 seconds",
      "Works with all milk types",
      "Easy one-button operation",
      "Compact storage design"
    ],
    specifications: {
      "Power": "15W Motor",
      "Whisk Material": "Stainless Steel",
      "Handle": "Soft-Grip Silicone",
      "Battery": "2 AA (included)",
      "Dimensions": "10 x 3 x 3 inches",
      "Weight": "8 oz",
      "Warranty": "3 years"
    },
    isNew: true
  },
  {
    id: "4",
    title: "Premium Cutting Board with Marble Background",
    price: "₹129.99",
    originalPrice: "₹159.99",
    image: "/lovable-uploads/cd7b36e8-54eb-4793-b30e-4577fd291a06.png",
    category: "Cutting Tools",
    description: "This premium cutting board combines functionality with stunning aesthetics. The deep purple surface is knife-friendly and naturally antimicrobial, while the elegant marble background makes it perfect for serving. Ideal for both food preparation and presentation.",
    features: [
      "Knife-friendly composite surface",
      "Natural antimicrobial properties",
      "Non-slip bottom for safety",
      "Stain and odor resistant",
      "Easy to clean and maintain",
      "Dual-purpose: prep and serving",
      "Elegant marble aesthetic"
    ],
    specifications: {
      "Material": "Composite & Natural Marble",
      "Dimensions": "12 x 16 x 0.5 inches",
      "Surface": "Purple Composite",
      "Base": "Carrara Marble Pattern",
      "Care": "Hand wash recommended",
      "Food Safe": "Yes",
      "Warranty": "10 years"
    }
  },
  {
    id: "5",
    title: "Stainless Steel Paper Towel Holder",
    price: "₹34.99",
    image: "/lovable-uploads/9461e761-7dac-46a9-b623-bab4f8a2159c.png",
    category: "Kitchen Organization",
    description: "Keep your paper towels organized and easily accessible with this sleek stainless steel holder. The weighted base provides stability while the spring-loaded arm holds rolls securely. The modern design complements any kitchen décor.",
    features: [
      "Heavy-duty stainless steel construction",
      "Weighted base prevents tipping",
      "Spring-loaded arm for easy loading",
      "Fits standard and mega rolls",
      "Tear-assist design",
      "Non-slip base pads",
      "Modern minimalist design"
    ],
    specifications: {
      "Material": "Brushed Stainless Steel",
      "Base Dimensions": "6 x 6 inches",
      "Height": "13 inches",
      "Weight": "2.5 lbs",
      "Fits Rolls": "Up to 11 inches",
      "Base Pads": "Non-slip rubber",
      "Warranty": "5 years"
    }
  },
  {
    id: "6",
    title: "Adjustable Vacuum Pump with Blue Accents",
    price: "₹59.99",
    originalPrice: "₹79.99",
    image: "/lovable-uploads/32ac6790-0dc7-4a00-ba01-c7330561fc36.png",
    category: "Food Preservation",
    description: "Extend the life of your food with this innovative vacuum pump system. The adjustable pressure settings work with various container types, while the ergonomic blue accents make operation comfortable and intuitive. Perfect for sous vide preparation and food storage.",
    features: [
      "Adjustable vacuum pressure settings",
      "Compatible with multiple container types",
      "Ergonomic blue silicone grips",
      "One-handed operation",
      "Built-in pressure gauge",
      "Extends food freshness up to 5x",
      "Easy-release valve"
    ],
    specifications: {
      "Material": "Stainless Steel & Silicone",
      "Pump Type": "Manual Vacuum",
      "Pressure Range": "0-25 inHg",
      "Compatible": "Most vacuum containers",
      "Dimensions": "8 x 4 x 4 inches",
      "Weight": "1.2 lbs",
      "Warranty": "3 years"
    }
  },
  {
    id: "7",
    title: "Ergonomic Vegetable Brush with Curved Handle",
    price: "₹19.99",
    image: "/lovable-uploads/7c02af64-68dd-4615-93e9-5b7e437f2ef2.png",
    category: "Cleaning Tools",
    description: "Make vegetable cleaning effortless with this ergonomically designed brush. The curved handle provides optimal grip angle while the firm bristles effectively remove dirt and residue. The sleek design looks great hanging in your kitchen.",
    features: [
      "Ergonomic curved handle design",
      "Firm natural bristles",
      "Comfortable grip texture",
      "Hangs for easy storage",
      "Works on all vegetables",
      "Long-lasting construction",
      "Easy to clean"
    ],
    specifications: {
      "Handle Material": "Ergonomic Polymer",
      "Bristles": "Natural Fiber",
      "Length": "6 inches",
      "Width": "2 inches",
      "Curve Angle": "15 degrees",
      "Hanging Loop": "Yes",
      "Warranty": "1 year"
    }
  },
  {
    id: "8",
    title: "Professional Mandoline Slicer with Safety Guard",
    price: "₹149.99",
    originalPrice: "₹199.99",
    image: "/lovable-uploads/54142ba1-7805-4e70-a710-2f395ac25de6.png",
    category: "Cutting Tools",
    description: "Achieve professional-quality cuts with this precision mandoline slicer. Features adjustable thickness settings, multiple cutting options, and an integrated safety guard. The stainless steel blades ensure clean cuts every time.",
    features: [
      "Precision stainless steel blades",
      "Adjustable thickness from 1-9mm",
      "Multiple cutting patterns",
      "Integrated safety hand guard",
      "Non-slip base for stability",
      "Easy blade adjustment",
      "Compact storage design"
    ],
    specifications: {
      "Blade Material": "Japanese Stainless Steel",
      "Cutting Surface": "12 x 5 inches",
      "Thickness Range": "1-9mm",
      "Cutting Options": "Straight, Julienne, Waffle",
      "Safety Features": "Hand guard, Non-slip base",
      "Storage": "Foldable design",
      "Warranty": "5 years"
    },
    isNew: true
  },
  {
    id: "9",
    title: "Glass Spice Container with Grid Organizer",
    price: "₹89.99",
    image: "/lovable-uploads/1402a35f-cf08-4b25-ac82-d734c52c7088.png",
    category: "Storage Solutions",
    description: "Organize your spices in style with this premium glass container featuring a precision grid organizer. The airtight seal preserves freshness while the clear design lets you see contents at a glance. Perfect for spice enthusiasts and professional chefs.",
    features: [
      "Premium borosilicate glass construction",
      "Precision stainless steel grid",
      "Airtight silicone seal",
      "12 individual compartments",
      "Clear visibility of contents",
      "Easy-pour design",
      "Stackable for multiple units"
    ],
    specifications: {
      "Material": "Borosilicate Glass",
      "Grid": "Stainless Steel",
      "Compartments": "12 sections",
      "Capacity": "8 oz total",
      "Dimensions": "8 x 8 x 2 inches",
      "Seal Type": "Food-grade silicone",
      "Warranty": "3 years"
    }
  },
  {
    id: "10",
    title: "Stackable Storage Baskets - Pink Set",
    price: "₹39.99",
    originalPrice: "₹54.99",
    image: "/lovable-uploads/9c54fc18-1a08-4b68-a90b-90e083592c02.png",
    category: "Organization",
    description: "Add a pop of color to your kitchen organization with these cheerful pink storage baskets. The perforated design provides ventilation for produce while the stackable design maximizes space efficiency. Perfect for fruits, vegetables, or general storage.",
    features: [
      "Vibrant pink color brightens any space",
      "Perforated design for air circulation",
      "Stackable for space efficiency",
      "Comfortable carry handles",
      "Easy-clean smooth surface",
      "Versatile multi-purpose use",
      "Lightweight yet durable"
    ],
    specifications: {
      "Material": "BPA-Free Plastic",
      "Set Includes": "3 stackable baskets",
      "Dimensions": "12 x 8 x 6 inches each",
      "Color": "Bright Pink",
      "Handles": "Integrated carry handles",
      "Ventilation": "Perforated sides",
      "Warranty": "2 years"
    }
  }
];

export const categories = [
  "All Products",
  "Storage Solutions",
  "Kitchen Accessories",
  "Kitchen Gadgets",
  "Cutting Tools",
  "Kitchen Organization",
  "Food Preservation",
  "Cleaning Tools",
  "Organization"
];