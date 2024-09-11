// 샘플 상품 데이터
const products = {
  "new-vintage": [
    {
      img: "../assets/images/vintage-1.jpg",
      name: "Pale Clear Stay Fixer Multi Color Powder",
      price: "$14.92",
    },
    {
      img: "../assets/images/vintage-2.jpg",
      name: "Light Skin Stay Fixer Multi Color Powder",
      price: "$14.92",
    },
    {
      img: "../assets/images/vintage-3.jpg",
      name: "Satin Pink Stay Fixer Multi Color Powder",
      price: "$14.92",
    },
    {
      img: "../assets/images/vintage-4.png",
      name: "Defining Cover Conceal Fit Palette",
      price: "$14.77",
    },
    {
      img: "../assets/images/vintage-5.jpg",
      name: "Light Warm Mix Blurring Volume Blusher",
      price: "$6.15",
    },
    {
      img: "../assets/images/vintage-6.jpg",
      name: "Bright Spring Mix Blurring Volume Blusher",
      price: "$6.15",
    },
    {
      img: "../assets/images/vintage-7.jpg",
      name: "Mix Blurring Volume Highlighter",
      price: "$6.54",
    },
    {
      img: "../assets/images/vintage-8.jpg",
      name: "Stay Fixer Vegan Pact",
      price: "$16.92",
    },
    {
      img: "../assets/images/vintage-9.jpg",
      name: "Sheer Layering Dual Blusher",
      price: "$9.84",
    },
    {
      img: "../assets/images/vintage-10.jpg",
      name: "Mix Blurring Volume Shading",
      price: "$9.39",
    },
  ],
  "face-makeup": [
    {
      img: "../assets/images/face-1.jpg",
      name: "Water Velvet Cover Cushion",
      price: "$27.69",
    },
    {
      img: "../assets/images/face-2.jpg",
      name: "Water Glow Coating Cushion",
      price: "$18.50",
    },
    {
      img: "../assets/images/face-3.jpg",
      name: "Water Velvet Cover Foundation",
      price: "$19.73",
    },
    {
      img: "../assets/images/face-4.jpg",
      name: "Water Glow Coating Foundation",
      price: "$29.23",
    },
    {
      img: "../assets/images/face-5.png",
      name: "Defining Cover Concealer",
      price: "$8.38",
    },
    {
      img: "../assets/images/vintage-1.jpg",
      name: "Pale Clear Stay Fixer Multi Color Powder",
      price: "$14.92",
    },
    {
      img: "../assets/images/vintage-2.jpg",
      name: "Light Skin Stay Fixer Multi Color Powder",
      price: "$14.92",
    },
    {
      img: "../assets/images/vintage-3.jpg",
      name: "Satin Pink Stay Fixer Multi Color Powder",
      price: "$14.92",
    },
  ],
  "eye-makeup": [
    {
      img: "../assets/images/eye-1.png",
      name: "Blue Core Blurring Eyeshadow Palette",
      price: "$17.54",
    },
    {
      img: "../assets/images/eye-2.png",
      name: "Muted Coral Blurring Eyeshadow Palette",
      price: "$17.54",
    },
    {
      img: "../assets/images/eye-3.png",
      name: "Lazy Pink Blurring Eyeshadow Palette",
      price: "$17.54",
    },
    {
      img: "../assets/images/eye-4.png",
      name: "Lavender Blurring Eyeshadow Palette",
      price: "$17.54",
    },
    {
      img: "../assets/images/eye-5.png",
      name: "Vanilla Blurring Eyeshadow Palette",
      price: "$17.54",
    },
    {
      img: "../assets/images/eye-6.png",
      name: "Sunset Blurring Eyeshadow Palette",
      price: "$17.54",
    },
    {
      img: "../assets/images/eye-7.png",
      name: "Lively Blurring Eyeshadow Palette",
      price: "$17.54",
    },
    {
      img: "../assets/images/eye-8.png",
      name: "Cocoa Blurring Eyeshadow Palette",
      price: "$17.54",
    },
    {
      img: "../assets/images/eye-9.png",
      name: "Soda Coral Blurring Eyeshadow Palette",
      price: "$17.54",
    },
    {
      img: "../assets/images/eye-10.png",
      name: "Candy Coral Blurring Eyeshadow Palette",
      price: "$17.54",
    },
    {
      img: "../assets/images/eye-11.png",
      name: "High Pink Blurring Eyeshadow Palette",
      price: "$17.54",
    },
  ],
  "lip-makeup": [
    {
      img: "../assets/images/lip-1.jpg",
      name: "Beloved Peach Dewy Gel Glaze Stick",
      price: "$8.85",
    },
    {
      img: "../assets/images/lip-2.jpg",
      name: "Odd Lavender Dewy Gel Glaze Stick",
      price: "$8.85",
    },
    {
      img: "../assets/images/lip-3.jpg",
      name: "Coolish Berry Dewy Gel Glaze Stick",
      price: "$8.85",
    },
    {
      img: "../assets/images/lip-4.jpg",
      name: "Syrupy Coral Dewy Gel Glaze Stick",
      price: "$8.85",
    },
    {
      img: "../assets/images/lip-5.jpg",
      name: "Barely Beige Dewy Gel Glaze Stick",
      price: "$8.85",
    },
    {
      img: "../assets/images/lip-6.jpg",
      name: "Plum Brew Dewy Gel Glaze Stick",
      price: "$8.85",
    },
    {
      img: "../assets/images/lip-7.jpg",
      name: "Crushed Red Dewy Gel Glaze Stick",
      price: "$8.85",
    },
    {
      img: "../assets/images/lip-8.jpg",
      name: "Flare Dew Dewy Gel Glaze Stick",
      price: "$8.85",
    },
    {
      img: "../assets/images/lip-9.jpg",
      name: "Muted Percent Dewy Gel Glaze Stick",
      price: "$8.85",
    },
    {
      img: "../assets/images/lip-10.jpg",
      name: "Melted Pink Dewy Gel Glaze Stick",
      price: "$8.85",
    },
    {
      img: "../assets/images/lip-11.jpg",
      name: "Warming Coral Dewy Gel Glaze Stick",
      price: "$8.85",
    },
    {
      img: "../assets/images/lip-12.jpg",
      name: "Autumn Glaze Gel Glaze Stick",
      price: "$8.85",
    },
    {
      img: "../assets/images/lip-13.jpg",
      name: "Muted Plum Dewy Gel Glaze Stick",
      price: "$8.85",
    },
    {
      img: "../assets/images/lip-14.jpg",
      name: "Raspberry Puree Dewy Gel Glaze Stick",
      price: "$8.85",
    },
    {
      img: "../assets/images/lip-15.jpg",
      name: "Apricot Dude Dewy Gel Glaze Stick",
      price: "$8.85",
    },
  ],
  nail: [
    {
      img: "../assets/images/nail-1.jpg",
      name: "Nailgun Base Top",
      price: "$2.77",
    },
    {
      img: "../assets/images/nail-2.jpg",
      name: "Nailgun Gel Top",
      price: "$2.77",
    },
    {
      img: "../assets/images/nail-3.jpg",
      name: "Nailgun Matte Top",
      price: "$2.77",
    },
    {
      img: "../assets/images/nail-4.jpg",
      name: "Nailgun Pink Cuticle Oil",
      price: "$2.77",
    },
    {
      img: "../assets/images/nail-5.jpg",
      name: "Nail Care Pink Strengthener",
      price: "$3.46",
    },
    {
      img: "../assets/images/nail-6.jpg",
      name: "NNail Care Pink Nutrient",
      price: "$2.77",
    },
    {
      img: "../assets/images/nail-7.jpg",
      name: "Strong Growth Nail Strengthener",
      price: "$3.46",
    },
    {
      img: "../assets/images/nail-8.jpg",
      name: "Strong Growth Nail Strengthener",
      price: "$7.69",
    },
    {
      img: "../assets/images/nail-9.jpg",
      name: "Gel Nail Top Coat 8ml",
      price: "$6.23",
    },
    {
      img: "../assets/images/nail-10.jpg",
      name: "Nail Remover 100ml",
      price: "$1.92",
    },
    {
      img: "../assets/images/nail-11.jpg",
      name: "Perfect Nail Remover 260ml",
      price: "$3.08",
    },
    {
      img: "../assets/images/nail-12.jpg",
      name: "Nailgun Pink Cuticle Out Pen Remover",
      price: "$4.77",
    },
    {
      img: "../assets/images/nail-12.jpg",
      name: "Rich Growth Nail Balm",
      price: "$9.23",
    },
  ],
  tool: [
    {
      img: "../assets/images/tool-1.jpg",
      name: "Water Glow Coating Puff (5pcs)",
      price: "$6.15",
    },
    {
      img: "../assets/images/tool-2.jpg",
      name: "Spatula Wide Foundation Brush / Puff-Fit Brush",
      price: "$16.00",
    },
    {
      img: "../assets/images/tool-3.jpg",
      name: "Spatula Wide Foundation Brush",
      price: "$15.38",
    },
    {
      img: "../assets/images/tool-4.jpg",
      name: "Puff-Fit Brush",
      price: "$15.38",
    },
    {
      img: "../assets/images/tool-5.jpg",
      name: "LED Gel Nail Lamp",
      price: "$5.38",
    },
  ],
};

function loadProducts(category) {
  const productContainer = document.querySelector(".productContainer");
  productContainer.innerHTML = "";

  const selectedProducts = products[category];

  selectedProducts.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");

    productDiv.innerHTML = `
      <img src="${product.img}" alt="${product.name}">
      <div class="product-name">${product.name}</div>
      <div class="product-price">${product.price}</div>
    `;

    productContainer.appendChild(productDiv);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  loadProducts("nail");

  const initialTab = document.querySelector(
    '.categoryMenu li[data-category="nail"]'
  );
  if (initialTab) {
    initialTab.classList.add("active");
  }
});

document.querySelectorAll(".categoryMenu li").forEach((tab) => {
  tab.addEventListener("click", (event) => {
    const category = event.target.getAttribute("data-category");

    loadProducts(category);

    document.querySelectorAll(".categoryMenu li").forEach((tab) => {
      tab.classList.remove("active");
    });

    event.target.classList.add("active");
  });
});
