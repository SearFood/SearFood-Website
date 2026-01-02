export interface Recipe {
  id: number;
  title: string;
  image: string;
  description: string;
  category: 'Masala' | 'Spice' | 'Other';
}

export const recipes: Recipe[] = [
  // --- Masalas ---
  {
    id: 1001,
    title: "Gujarati Chai Masala",
    image: "/logo.png",
    description: "Authentic Gujarati Chai Masala for a refreshing tea experience.",
    category: 'Masala'
  },
  {
    id: 1002,
    title: "Iyengar Rasam Powder",
    image: "/logo.png",
    description: "Traditional Iyengar style Rasam Powder.",
    category: 'Masala'
  },
  {
    id: 1003,
    title: "Iyengar Sambar Powder",
    image: "/logo.png",
    description: "Aromatic Iyengar Sambar Powder for authentic South Indian curry.",
    category: 'Masala'
  },
  {
    id: 1004,
    title: "Everyday Bhaji Masala",
    image: "/logo.png",
    description: "Versatile Bhaji Masala for your daily vegetable dishes.",
    category: 'Masala'
  },

  // --- Spices ---
  {
    id: 1,
    title: "Cumin Seeds (Jeera)",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/39/Seeds_of_Cumin.jpg",
    description: "Finest Premium Quality Cumin Seeds (Jeera) in various sizes starting from 100 gms (3.5 Oz) to 500 gms (1.1 lb) from Unjha (Gujarat) India.",
    category: 'Spice'
  },
  {
    id: 2,
    title: "Fenugreek Seeds (Methi)",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/16/Fenugreek_Seeds_01.jpg",
    description: "Finest Premium Quality Fenugreek Seeds (Methi) in 2 varieties comes in Various sizes starting from 100 gms (3.5 Oz) to 500 gms (1.1 lb) from Unjha (Gujarat) India",
    category: 'Spice'
  },
  {
    id: 3,
    title: "Fennel Seeds (Saunf)",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS18xhl34DHeLbKY_43HGiuiXFCAlYfKX8sBg&s",
    description: "Premium Quality Fennel Seeds (Saunf) comes in Various Sizes starting from 100 gms (3.5 Oz) to 500 gms (1.1 lb) from Unjha (Gujarat) India",
    category: 'Spice'
  },
  {
    id: 4,
    title: "Sesame Seeds",
    image: "https://rukminim2.flixcart.com/image/480/640/kgqvlow0/edible-seed/t/c/x/500-pouch-raw-shree-whole-original-imafww6ytwqgbcxq.jpeg?q=90",
    description: "Premium Quality Sesame Seeds (Til) comes in White Colour & Black starting from 100 gms (3.5 Oz) to 500 gms (1.1 lb) from Saurashtra (Gujarat) India",
    category: 'Spice'
  },
  {
    id: 5,
    title: "Pepper",
    image: "https://assets.clevelandclinic.org/transform/LargeFeatureImage/65ddb397-7835-4b21-b30b-d123be3cb5c8/blackPepper-185067429-770x533-1_jpg",
    description: "Pepper is procured from the Iduki Hills of Kerala. The flavour and spice factor is higher compared to Pepper of other regions. White Pepper, Black Pepper & its respective Powder in Various sizes are packed in Pet Bottles.",
    category: 'Spice'
  },
  {
    id: 6,
    title: "Cloves",
    image: "https://thespiceway.com/cdn/shop/files/Cloves.webp?v=1755527798",
    description: "Cloves are procured from Spice capital of India. Apart from flavour, health benefits are abundant in Cloves. Various sizes of Cloves available in Pet Bottles.",
    category: 'Spice'
  },
  {
    id: 7,
    title: "Cinnamon",
    image: "https://static.toiimg.com/thumb/imgsize-23456,msid-107264619,width-600,resizemode-4/107264619.jpg",
    description: "Cinnamon is procured from Srilanka, Kerala & North Eastern part of India. Srilankan Cinnamon contains more fragrance compared to Indian counterpart. Various sizes are available.",
    category: 'Spice'
  },
  {
    id: 8,
    title: "Cardamom (Elaichi)",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw0_V32zsrNkbG3xdFG7EwGVReUIhRJrdcfQ&s",
    description: "We procure only the best quality of Cardamom. We sell only 8MM variety of Cardamom. Elaichi which can be used to enhance flavour in any items. We bringout from 50gms (1.85 Oz) to 500 gms (1.1 lb)",
    category: 'Spice'
  },
  {
    id: 13,
    title: "Star Anise",
    image: "https://media.post.rvohealth.io/wp-content/uploads/2020/08/star-anise-732x549-thumbnail-732x549.jpg",
    description: "Star Anise - Used as digestive spice. Premium Quality is available in 50gms to 500 gms or more for retail.",
    category: 'Spice'
  },
  {
    id: 901,
    title: "Mustard Seeds (Rai)",
    image: "/logo.png",
    description: "Premium quality small black Mustard seeds.",
    category: 'Spice'
  },
  {
    id: 902,
    title: "Lakadong Turmeric Powder",
    image: "/logo.png",
    description: "High curcumin content Lakadong Turmeric powder.",
    category: 'Spice'
  },
  {
    id: 903,
    title: "Cinnamon - Processed",
    image: "/logo.png",
    description: "Processed Cinnamon quills for easy use.",
    category: 'Spice'
  },
  {
    id: 904,
    title: "Raw Cinnamon",
    image: "/logo.png",
    description: "Raw, unrefined Cinnamon bark.",
    category: 'Spice'
  }
];
