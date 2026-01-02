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
    image: "/gujarati-chai-masala.jpg",
    description: "Traditional Gujarati Chai Masala is a aromatic spice blend rooted in Gujarat’s culinary heritage. Influenced by Ayurveda, it combines ginger, cardamom, cloves, pepper, and cinnamon. Historically prepared in homes, it was valued for digestion and warmth, creating a gently spiced, comforting chai enjoyed across generations.",
    category: 'Masala'
  },
  {
    id: 1002,
    title: "Iyengar Rasam Powder",
    image: "/iyengar-rasam-powder.png",
    description: "Rasam is a soulful dish from South India, cherished for generations. In Iyengar families, this sacred recipe has been passed down through centuries, prepared with handpicked spices and lentils. Rooted in Ayurvedic wisdom, it is designed to aid digestion and provide essential benefits for overall well-being.",
    category: 'Masala'
  },
  {
    id: 1003,
    title: "Iyengar Sambar Powder",
    image: "/iyengar-sambar-powder.png",
    description: "Traditional Iyengar Sambar Powder is a finely balanced blend rooted in temple kitchens of Tamil Nadu. Made with roasted lentils, spices, and no onion or garlic, it delivers pure, aromatic flavor true to Iyengar culinary tradition.",
    category: 'Masala'
  },
  {
    id: 1004,
    title: "Everyday Bhaji Masala",
    image: "/everyday-bhaji-masala.jpg",
    description: "Versatile, all-in-one Bhaji Masala is a common spice blend used in a wide variety of vegetable dishes. It enhances natural flavors, adds balanced spice, and makes everyday cooking simple, quick, and delicious.",
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
    image: "https://www.organicgyaan.com/cdn/shop/files/Small-Mustard-Seeds.jpg?v=1721395851&width=1214",
    description: "Premium quality small black Mustard seeds.",
    category: 'Spice'
  },
  {
    id: 902,
    title: "Lakadong Turmeric Powder",
    image: "https://www.pahariroots.co.in/storage/2023/06/lakadong-turmeric.webp",
    description: "High curcumin content Lakadong Turmeric powder.",
    category: 'Spice'
  },
  {
    id: 903,
    title: "Cinnamon - Processed",
    image: "https://thottamfarmfresh.com/wp-content/uploads/2022/07/Ceylon-cinnamon.webp",
    description: "Processed Cinnamon quills for easy use.",
    category: 'Spice'
  },
  {
    id: 904,
    title: "Raw Cinnamon",
    image: "https://tiimg.tistatic.com/fp/1/007/950/a-grade-natural-pure-dried-raw-cinnamon-stick-with-high-nutritious-value-472.jpg",
    description: "Raw, unrefined Cinnamon bark.",
    category: 'Spice'
  }
];
