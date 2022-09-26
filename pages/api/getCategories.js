const categories = [
  {
    id: 1,
    title: "smartphones",
    img: "https://dummyjson.com/image/i/products/1/1.jpg",
  },
  {
    id: 2,
    title: "laptops",
    img: "https://dummyjson.com/image/i/products/6/thumbnail.png",
  },
  {
    id: 3,
    title: "fragrances",
    img: "https://dummyjson.com/image/i/products/11/thumbnail.jpg",
  },
  {
    id: 4,
    title: "skincare",
    img: "https://dummyjson.com/image/i/products/16/thumbnail.jpg",
  },
  {
    id: 5,
    title: "groceries",
    img: "https://dummyjson.com/image/i/products/21/thumbnail.png",
  },
  {
    id: 6,
    title: "home-decoration",
    img: "https://dummyjson.com/image/i/products/26/thumbnail.jpg",
  },
  {
    id: 7,
    title: "furniture",
    img: "https://dummyjson.com/image/i/products/31/thumbnail.jpg",
  },
  {
    id: 8,
    title: "tops",
    img: "https://dummyjson.com/image/i/products/36/thumbnail.jpg",
  },
  {
    id: 9,
    title: "womens-dresses",
    img: "https://dummyjson.com/image/i/products/41/thumbnail.webp",
  },
  {
    id: 10,
    title: "womens-shoes",
    img: "https://dummyjson.com/image/i/products/46/thumbnail.jpg",
  },
  {
    id: 11,
    title: "mens-shirts",
    img: "https://dummyjson.com/image/i/products/51/thumbnail.jpg",
  },
  {
    id: 12,
    title: "mens-shoes",
    img: "https://dummyjson.com/image/i/products/56/thumbnail.jpg",
  },
  {
    id: 13,
    title: "mens-watches",
    img: "https://dummyjson.com/image/i/products/61/thumbnail.jpg",
  },
  {
    id: 14,
    title: "womens-watches",
    img: "https://dummyjson.com/image/i/products/66/thumbnail.jpg",
  },
  {
    id: 15,
    title: "womens-bags",
    img: "https://dummyjson.com/image/i/products/71/thumbnail.jpg",
  },
  {
    id: 16,
    title: "womens-jewellery",
    img: "https://dummyjson.com/image/i/products/76/thumbnail.jpg",
  },
  {
    id: 17,
    title: "sunglasses",
    img: "https://dummyjson.com/image/i/products/81/thumbnail.jpg",
  },
  {
    id: 18,
    title: "automotive",
    img: "https://dummyjson.com/image/i/products/86/thumbnail.jpg",
  },
  {
    id: 19,
    title: "motorcycle",
    img: "https://dummyjson.com/image/i/products/91/thumbnail.jpg",
  },
  {
    id: 20,
    title: "lighting",
    img: "https://dummyjson.com/image/i/products/96/thumbnail.jpg",
  },
];

const handelar = async (req, res) => {
  res.send(categories);
};

export default handelar;
