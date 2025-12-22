export interface Recipe {
  id: number;
  title: string;
  image: string;
  description: string;
}

export const recipes: Recipe[] = [
  // --- Spices ---
  {
    id: 1,
    title: "Cumin Seeds (Jeera)",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=600",
    description: "Finest Premium Quality Cumin Seeds (Jeera) in various sizes starting from 100 gms (3.5 Oz) to 500 gms (1.1 lb) from Unjha (Gujarat) India."
  },
  {
    id: 2,
    title: "Fenugreek Seeds (Methi)",
    image: "https://images.unsplash.com/photo-1605307374026-6668d227b613?auto=format&fit=crop&q=80&w=600",
    description: "Finest Premium Quality Fenugreek Seeds (Methi) in 2 varieties comes in Various sizes starting from 100 gms (3.5 Oz) to 500 gms (1.1 lb) from Unjha (Gujarat) India"
  },
  {
    id: 3,
    title: "Fennel Seeds (Saunf)",
    image: "https://images.unsplash.com/photo-1627485744474-569d6c703080?auto=format&fit=crop&q=80&w=600", // Green seeds close match
    description: "Premium Quality Fennel Seeds (Saunf) comes in Various Sizes starting from 100 gms (3.5 Oz) to 500 gms (1.1 lb) from Unjha (Gujarat) India"
  },
  {
    id: 4,
    title: "Sesame Seeds",
    image: "https://images.unsplash.com/photo-1549557404-5f564177d9c6?auto=format&fit=crop&q=80&w=600",
    description: "Premium Quality Sesame Seeds (Til) comes in White Colour & Black starting from 100 gms (3.5 Oz) to 500 gms (1.1 lb) from Saurashtra (Gujarat) India"
  },
  {
    id: 5,
    title: "Pepper",
    image: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&q=80&w=600",
    description: "Pepper is procured from the Iduki Hills of Kerala. The flavour and spice factor is higher compared to Pepper of other regions. White Pepper, Black Pepper & its respective Powder in Various sizes are packed in Pet Bottles."
  },
  {
    id: 6,
    title: "Cloves",
    image: "https://images.unsplash.com/photo-1518590629738-958b439c27b0?auto=format&fit=crop&q=80&w=600",
    description: "Cloves are procured from Spice capital of India. Apart from flavour, health benefits are abundant in Cloves. Various sizes of Cloves available in Pet Bottles."
  },
  {
    id: 7,
    title: "Cinnamon",
    image: "https://images.unsplash.com/photo-1555673033-0c33a943725b?auto=format&fit=crop&q=80&w=600",
    description: "Cinnamon is procured from Srilanka, Kerala & North Eastern part of India. Srilankan Cinnamon contains more fragrance compared to Indian counterpart. Various sizes are available."
  },
  {
    id: 8,
    title: "Cardamom (Elaichi)",
    image: "https://images.unsplash.com/photo-1601362758141-8656722d7658?auto=format&fit=crop&q=80&w=600",
    description: "We procure only the best quality of Cardamom. We sell only 8MM variety of Cardamom. Elaichi which can be used to enhance flavour in any items. We bringout from 50gms (1.85 Oz) to 500 gms (1.1 lb)"
  },
  {
    id: 13,
    title: "Star Anise",
    image: "https://images.unsplash.com/photo-1599909619163-c603a1168926?auto=format&fit=crop&q=80&w=600",
    description: "Star Anise - Used as digestive spice. Premium Quality is available in 50gms to 500 gms or more for retail."
  },
  {
    id: 14,
    title: "Bhut Jalokia (Ghost Pepper)",
    image: "https://images.unsplash.com/photo-1588667825008-b1317578adbd?auto=format&fit=crop&q=80&w=600",
    description: "Bhut Jalokia (Ghost Pepper) powder is procured from Nagaland and Assam from India. These are the spiciest chilli powder in the world with Scoville Units of 1,041,427 SHU"
  },

  // --- Seasonings ---
  {
    id: 101,
    title: "Seasoning - Oregano",
    image: "https://images.unsplash.com/photo-1558223637-2996d9cc48da?auto=format&fit=crop&q=80&w=600",
    description: "Origano has been air dried, crushed and bottled. Origano has been harvested from our farm 100 kms from Pune using Natural(Organic) Manner."
  },
  {
    id: 102,
    title: "Seasoning - Pink Salt & Lemon Rind",
    image: "https://images.unsplash.com/photo-1518099719488-842245f78864?auto=format&fit=crop&q=80&w=600",
    description: "Pure Himalayan Pink Salt has been infused with Lemon Rind with certain amount of ratio. This can be used as seasoning in any Meat during prepreparation or as any seasoning on top of fruits"
  },
  {
    id: 103,
    title: "Seasoning - Garlic Salt",
    image: "https://images.unsplash.com/photo-1627485265433-2868cb530f24?auto=format&fit=crop&q=80&w=600",
    description: "Pure Garlic Powder & Himalayan Pink Salt has combined in certain ratio. Three variations are there with 90:10, 80:20 & 65:35 of Pink Salt & Garlic powder combination respectively"
  },
  {
    id: 104,
    title: "Seasoning - Kashmiri Chilli Flakes",
    image: "https://images.unsplash.com/photo-1579482967667-33235b0266e7?auto=format&fit=crop&q=80&w=600",
    description: "Kashmiri Chillies brings colour and flavour to the food cooked or garnished. Spicyness factor is comparatively less around 2000 Scoville Heat Units(SHU). We sell two varieties - De-seeded & with seeds"
  },
  {
    id: 105,
    title: "Seasoning - Himalayan Pink Salt & Chilli powder",
    image: "https://images.unsplash.com/photo-1626425143343-431525656113?auto=format&fit=crop&q=80&w=600",
    description: "Widely used seasoning in the tropical part for seasoning the fruits while eating raw. It adds flavour to the food."
  },
  {
    id: 106,
    title: "Seasoning - Parsley",
    image: "https://images.unsplash.com/photo-1525385133512-2f346b384390?auto=format&fit=crop&q=80&w=600",
    description: "Parsley has been air dried, crushed and bottled. Parsley has been harvested from our farm 100 kms from Pune using Natural(Organic) Manner."
  },
  {
    id: 107,
    title: "Seasoning - Rosemary",
    image: "https://images.unsplash.com/photo-1596798030232-a587eb0985c7?auto=format&fit=crop&q=80&w=600",
    description: "Rosemary has been air dried, crushed and bottled. Rosemary has been harvested from our farm 100 kms from Pune using Natural(Organic) Manner."
  },
  {
    id: 11,
    title: "Seasoning - Thyme",
    image: "https://images.unsplash.com/photo-1606346903248-be224660bd2e?auto=format&fit=crop&q=80&w=600",
    description: "Thyme has been air dried, crushed and bottled. Thyme has been harvested from our farm 100 kms from Pune using Natural(Organic) Manner."
  },
  {
    id: 12,
    title: "Seasoning - Basil",
    image: "https://images.unsplash.com/photo-1618375531912-867984bdfbc8?auto=format&fit=crop&q=80&w=600",
    description: "Basil has been air dried, crushed and bottled. Basil has been harvested from our farm 100 kms from Pune using Natural(Organic) Manner. Basil has lots of health benefits and can be infused in Tea."
  },
  {
    id: 15,
    title: "Seasoning - Flavoured Salt - Pink Salt, Lemon & Thyme",
    image: "https://images.unsplash.com/photo-1599313264423-f2268c1995e9?auto=format&fit=crop&q=80&w=600", // mixed seasoning
    description: "Fresh Thyme are infused in Himalayan Pink Salt along with Lemon Rind. These can be added for great flavour in Pasta and Pizzas. Fresh Thyme are used for infusion"
  },
  {
    id: 16,
    title: "Seasoning - Flavoured Salt - Pink Salt & Rosemary",
    image: "https://images.unsplash.com/photo-1596798030232-a587eb0985c7?auto=format&fit=crop&q=80&w=600", // rosemary focused
    description: "Fresh Rosemary leaves are infused in Himalayan Pink Salt. These can be added for great flavour in Pasta and Pizzas."
  },
  {
    id: 17,
    title: "Seasoning - Flavoured Salt - Pink Salt & Oregano",
    image: "https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&q=80&w=600", // oregano focused
    description: "Fresh Oregano are infused in Himalayan Pink Salt. These infusion brings out beautiful flavour to the salt which can be used in Pizzas & Pastas."
  },

  // --- Dehydrated ---
  {
    id: 9,
    title: "Dehydrated Garlic",
    image: "https://images.unsplash.com/photo-1600109913075-812e9b812328?auto=format&fit=crop&q=80&w=600",
    description: "We sell dehydrated Garlic items include Garlic Powder, Garlic Cloves, Garlic Minced & Garlic Granules with 5% of Moisture Level. In Ideal Condition the flavours will stay for atleast an year."
  },
  {
    id: 10,
    title: "Dehydrated Onion",
    image: "https://plus.unsplash.com/premium_photo-1669837581896-1c2018835267?auto=format&fit=crop&q=80&w=600",
    description: "We sell dehydrated Onion items include White Onion Powder, White Onion Flakes, Pink Onion Powder & PInk Onion Flakes with 5% of Moisture Level. In Ideal Condition the flavours will stay for atleast an year."
  },

  // --- Herbal Teas ---
  {
    id: 201,
    title: "Herbal Tea - Turmeric & Ginger",
    image: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&q=80&w=600",
    description: "Lakadong Turmeric Powder and Dry Ginger Powder mixed Tea Bags. These Tea can be infused in the hot water for 7-9 mins or with Milk. Honey/Sugar can be added as sweetner."
  },
  {
    id: 202,
    title: "Herbal Tea - Ashwaganda, Turmeric & LemonGrass",
    image: "https://images.unsplash.com/photo-1563911892437-1c2969a91812?auto=format&fit=crop&q=80&w=600", // Lemongrass tea
    description: "Ashwaganda, Turmeric and Lemon Grass Herbal tea is good for health to built immune system. Each Tea bags can be had either by infusing in hot water for 7 - 10 mins or with MIlk."
  },
  {
    id: 203,
    title: "Herbal Tea - 9 Spices Immunity Booster",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&q=80&w=600", // Spiced tea
    description: "Turmeric, Ginger Powder, Cinnamon Powder, Pepper Powder, Salt, Mint Leaves, Asafoetida, Ajwain, Basil - Immunity Booster along with Honey/Sugar infused in hotwater for 10 mins."
  },
  {
    id: 204,
    title: "Herbal Tea - Moringa Powder",
    image: "https://images.unsplash.com/photo-1505253818610-1845bb08a65f?auto=format&fit=crop&q=80&w=600",
    description: "Moringa oleifera - Morning leaves powder is prepared from 100% Organic and grounded into fine powder. These powder comes in two format in 250 gms, 500 gms pet bottle and in Tea sachets."
  },

  // --- Others ---
  {
    id: 301,
    title: "Wooden Spatula Set",
    image: "https://images.unsplash.com/photo-1592683935639-6d814ec95d10?auto=format&fit=crop&q=80&w=600",
    description: "6 Set of Wooden Spatula Set, Roller Pins are made from Neem Wood. The Neem tree has medicinal value and for long durability."
  },
  {
    id: 302,
    title: "Areca Leaves Disposable Plates",
    image: "https://images.unsplash.com/photo-1603507963283-3c9780007353?auto=format&fit=crop&q=80&w=600",
    description: "Areca Leaves disposable plates are biodegradable and environment friendly. These plates can withstand without loosing its shape even hot substance or liquid is poured upto 3 hrs. once opened these needs to be sealed properly and kept in a dry place away from moisture."
  }
];
