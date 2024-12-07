// models/itemModel.js

const items = [
    {
      id: 1,
      title: "Summer T-Shirt",
      description: "A light and comfortable t-shirt perfect for summer.",
      price: 26450,
      color: "Blue",
      size: "M",
      img: "/dress01.webp",
      additionalImages: [
        "/dress02.webp",
        "/dress03.webp",
        "/dress04.webp",
        "/dress05.webp",
        "/dress06.webp",
        "/dress07.webp",
        "/dress08.webp"
      ],
      trendImage: "/dress01.webp"
    },
    {
      id: 2,
      title: "Denim Jeans",
      description: "Classic blue denim jeans with a comfortable fit.",
      price: 3400.00,
      color: "Blue",
      size: "32",
      img: "/dress02.webp",
      additionalImages: [
        "/uploads/dress02.webp",
        "/uploads/dress02.webp",
        "/uploads/dress02.webp"
      ],
      trendImage: "/dress02.webp"
    },
    {
      id: 3,
      title: "Stylish Jacket",
      description: "A warm jacket for cool evenings.",
      price: 4500.00,
      color: "Black",
      size: "L",
      img: "/dress03.webp",
      trendImage: "/dress03.webp"
    }
  ];
  
  module.exports = items;
  