const products = [
  {
    name: "TATA HARRIER",
    image: "/images/harrier.jpg",
    description:
      "The new harrier with youthful styles combines with a commanding presence that sets it apart. It embodies a dynamic and fearless aura which demands a second look when cruising down the road.",
    brand: "TATA",
    category: "SUV",
    price: 1754100,
    countInStock: 3,
    rating: 0,
    numReviews: 0,
    id: 1,
  },
  {
    name: "TATA NEXON",
    image: "/images/nexon.jpg",
    description:
      "The Tata Nexon gets a massive makeover, with loads of changes inside and outside! It is easily one of the better options in the subcompact SUV space.",
    brand: "TATA",
    category: "SUV",
    price: 1010000,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
    id: 2,
  },
  {
    name: "TATA ALTROZ",
    image: "/images/ALTROZ.jpeg",
    description:
      "The Tata Altroz is the only hatchback in India offered with a diesel engine. The price of the Tata Altroz starts at Rs 6.60 Lakh and goes up to Rs 10.74 Lakh",
    brand: "TATA",
    category: "HATCHBACK",
    price: 666000,
    countInStock: 0,
    rating: 0,
    numReviews: 0,
    id: 3,
  },
  {
    name: "TATA SAFARI",
    image: "/images/safari.jpg",
    description:
      "The new safari showcases an artistic sensibility that’s sophisticated, assertive and way ahead of its time,A highly-intuitive Companion thats build to take on surprises and make your driving truly seamless.",
    brand: "TATA",
    category: "SUV",
    price: "1222019",
    countInStock: 10,
    rating: 0,
    numReviews: 0,
    id: 4,
  },
  {
    name: "TATA TIGOR",
    image: "/images/tigor.jpeg",
    description:
      "The new Tigor offers comprehensive safety with best in segment* Global NCAP 4-star rating.It ensures that all occupants are safe and stress free , no matter what the road throws at them.",
    brand: "TATA",
    category: "HATCHBACK",
    price: "6.30 - 8.90 Lakh",
    countInStock: 7,
    rating: 0,
    numReviews: 0,
    id: 5,
  },
  {
    name: "TATA PUNCH",
    image: "/images/punch.png",
    description:
      "The PUNCH loves to entertain just like you. It has state-of-the-art-technology that keeps you connected and will give your already thrilling drive experience, that advanced touch.",
    brand: "TATA",
    category: "HATCHBACK",
    price: "5.00- 8.90 Lakh",
    countInStock: 0,
    rating: 0,
    numReviews: 0,
    id: 6,
  },
  {
    name: "MAHINDRA BOLERO_NEO",
    image: "/images/BOLERO_NEO.webp",
    description:
      "The PUNCH loves to entertain just like you. It has state-of-the-art-technology that keeps you connected and will give your already thrilling drive experience, that advanced touch.",
    brand: "MAHINDRA",
    category: "SUV",
    price: "7.00.00- 13.90 Lakh",
    countInStock: 2,
    rating: 5,
    numReviews: 16,
    id: 7,
  },
  {
    name: "MAHINDRA SCORPIO",
    image: "/images/SCORPIO.webp",
    description:
      "The PUNCH loves to entertain just like you. It has state-of-the-art-technology that keeps you connected and will give your already thrilling drive experience, that advanced touch.",
    brand: "MAHINDRA",
    category: "SUV",
    price: "10.00- 18.90 Lakh",
    countInStock: 2,
    rating: 5,
    numReviews: 16,
    id: 8,
  },
  {
    name: "MAHINDRA THAR",
    image: "/images/THAR.webp",
    description:
      "The PUNCH loves to entertain just like you. It has state-of-the-art-technology that keeps you connected and will give your already thrilling drive experience, that advanced touch.",
    brand: "MAHINDRA",
    category: "HEAVY DUTY",
    price: "13.00- 25.90 Lakh",
    countInStock: 2,
    rating: 5,
    numReviews: 16,
    id: 9,
  },
  {
    name: "MAHINDRA SCORPIOn",
    image: "/images/SCORPIOn.webp",
    description:
      "The PUNCH loves to entertain just like you. It has state-of-the-art-technology that keeps you connected and will give your already thrilling drive experience, that advanced touch.",
    brand: "MAHINDRA",
    category: "SUV",
    price: "14.00- 18.90 Lakh",
    countInStock: 2,
    rating: 5,
    numReviews: 16,
    id: 10,
  },
  {
    name: "MAHINDRA XUV700",
    image: "/images/XUV700.webp",
    description:
      "The PUNCH loves to entertain just like you. It has state-of-the-art-technology that keeps you connected and will give your already thrilling drive experience, that advanced touch.",
    brand: "MAHINDRA",
    category: "SUV",
    price: "14.00- 24.90 Lakh",
    countInStock: 2,
    rating: 5,
    numReviews: 16,
    id: 11,
  },
  {
    name: "MAHINDRA XUV400",
    image: "/images/XUV400.webp",
    description:
      "The PUNCH loves to entertain just like you. It has state-of-the-art-technology that keeps you connected and will give your already thrilling drive experience, that advanced touch.",
    brand: "MAHINDRA",
    category: "SUV",
    price: "9.00- 17.90 Lakh",
    countInStock: 2,
    rating: 5,
    numReviews: 16,
    id: 12,
  },
  {
    name: "MAHINDRA XUV300",
    image: "/images/XUV300.webp",
    description:
      "The PUNCH loves to entertain just like you. It has state-of-the-art-technology that keeps you connected and will give your already thrilling drive experience, that advanced touch.",
    brand: "MAHINDRA",
    category: "SUV",
    price: "7.00- 13.90 Lakh",
    countInStock: 2,
    rating: 5,
    numReviews: 16,
    id: 13,
  },
  {
    name: "NEXON EV",
    image: "/images/NEXON_EV.webp",
    description:
      "The PUNCH loves to entertain just like you. It has state-of-the-art-technology that keeps you connected and will give your already thrilling drive experience, that advanced touch.",
    brand: "TATA",
    category: "ELECTRIC (EV)",
    price: "10.00- 13.90 Lakh",
    countInStock: 2,
    rating: 5,
    numReviews: 16,
    id: 13,
  },
  {
    name: "TESLA EV",
    image: "/images/TESLA_EV.webp",
    description:
      "The PUNCH loves to entertain just like you. It has state-of-the-art-technology that keeps you connected and will give your already thrilling drive experience, that advanced touch.",
    brand: "TESLA",
    category: "ELECTRIC (EV)",
    price: "30.00- 40.90 Lakh",
    countInStock: 2,
    rating: 5,
    numReviews: 16,
    id: 13,
  },
  {
    name: "MAHINDRA TRUCK",
    image: "/images/MAHINDRA_TRUCK.webp",
    description:
      "The PUNCH loves to entertain just like you. It has state-of-the-art-technology that keeps you connected and will give your already thrilling drive experience, that advanced touch.",
    brand: "MAHINDRA",
    category: "HEAVY DUTY",
    price: "30.00- 40.90 Lakh",
    countInStock: 2,
    rating: 5,
    numReviews: 16,
    id: 13,
  },

  {
    name: "HYUNDAI VERNA",
    image: "/images/VERNA.webp",
    description:
      "The PUNCH loves to entertain just like you. It has state-of-the-art-technology that keeps you connected and will give your already thrilling drive experience, that advanced touch.",
    brand: "HYUNDAI",
    category: "SEDAN",
    price: "12.00- 16.90 Lakh",
    countInStock: 2,
    rating: 5,
    numReviews: 16,
    id: 13,
  },
  {
    name: "TOYOTA INNOVA",
    image: "/images/INNOVA.jpg",
    description:
      "The PUNCH loves to entertain just like you. It has state-of-the-art-technology that keeps you connected and will give your already thrilling drive experience, that advanced touch.",
    brand: "TOYOTA",
    category: "MUV",
    price: "25.00- 34.90 Lakh",
    countInStock: 2,
    rating: 5,
    numReviews: 16,
    id: 13,
  },
]

export default products
