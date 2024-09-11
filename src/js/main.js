new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 3000,
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

//tabMenu
document.addEventListener("DOMContentLoaded", function () {
  const mainProduct = document.querySelector(".main_product");
  const tabs = document.querySelectorAll(".tab");

  // 상품 데이터
  const products = {
    vintage: [
      {
        imgSrc: "../assets/images/vintage-1.jpg",
        name: "Pale Clear Stay Fixer Multi Color Powder",
        price: "$14.92",
      },
      {
        imgSrc: "../assets/images/vintage-2.jpg",
        name: "Light Skin Stay Fixer Multi Color Powder",
        price: "$14.92",
      },
      {
        imgSrc: "../assets/images/vintage-3.jpg",
        name: "Satin Pink Stay Fixer Multi Color Powder",
        price: "$14.92",
      },
      {
        imgSrc: "../assets/images/vintage-4.png",
        name: "Defining Cover Conceal Fit Palette",
        price: "$14.77",
      },
      {
        imgSrc: "../assets/images/vintage-5.jpg",
        name: "Light Warm Mix Blurring Volume Blusher",
        price: "$6.15",
      },
      {
        imgSrc: "../assets/images/vintage-6.jpg",
        name: "Bright Spring Mix Blurring Volume Blusher",
        price: "$6.15",
      },
      {
        imgSrc: "../assets/images/vintage-7.jpg",
        name: "Mix Blurring Volume Highlighter",
        price: "$6.54",
      },
      {
        imgSrc: "../assets/images/vintage-8.jpg",
        name: "Stay Fixer Vegan Pact",
        price: "$16.92",
      },
    ],
    eyeshadow: [
      {
        imgSrc: "../assets/images/eye-1.png",
        name: "Blue Core Blurring Eyeshadow Palette",
        price: "$17.54",
      },
      {
        imgSrc: "../assets/images/eye-2.png",
        name: "Muted Coral Blurring Eyeshadow Palette",
        price: "$17.54",
      },
      {
        imgSrc: "../assets/images/eye-3.png",
        name: "Lazy Pink Blurring Eyeshadow Palette",
        price: "$17.54",
      },
      {
        imgSrc: "../assets/images/eye-4.png",
        name: "Lavender Blurring Eyeshadow Palette",
        price: "$17.54",
      },
      {
        imgSrc: "../assets/images/eye-5.png",
        name: "Vanilla Blurring Eyeshadow Palette",
        price: "$17.54",
      },
      {
        imgSrc: "../assets/images/eye-6.png",
        name: "Sunset Blurring Eyeshadow Palette",
        price: "$17.54",
      },
      {
        imgSrc: "../assets/images/eye-7.png",
        name: "Lively Blurring Eyeshadow Palette",
        price: "$17.54",
      },
      {
        imgSrc: "../assets/images/eye-8.png",
        name: "Cocoa Blurring Eyeshadow Palette",
        price: "$17.54",
      },
    ],
    dewy: [
      {
        imgSrc: "../assets/images/lip-1.jpg",
        name: "Beloved Peach Dewy Gel Glaze Stick",
        price: "$8.85",
      },
      {
        imgSrc: "../assets/images/lip-2.jpg",
        name: "Odd Lavender Dewy Gel Glaze Stick",
        price: "$8.85",
      },
      {
        imgSrc: "../assets/images/lip-3.jpg",
        name: "Coolish Berry Dewy Gel Glaze Stick",
        price: "$8.85",
      },
      {
        imgSrc: "../assets/images/lip-4.jpg",
        name: "Syrupy Coral Dewy Gel Glaze Stick",
        price: "$8.85",
      },
      {
        imgSrc: "../assets/images/lip-5.jpg",
        name: "Barely Beige Dewy Gel Glaze Stick",
        price: "$8.85",
      },
      {
        imgSrc: "../assets/images/lip-6.jpg",
        name: "Plum Brew Dewy Gel Glaze Stick",
        price: "$8.85",
      },
      {
        imgSrc: "../assets/images/lip-7.jpg",
        name: "Crushed Red Dewy Gel Glaze Stick",
        price: "$8.85",
      },
      {
        imgSrc: "../assets/images/lip-8.jpg",
        name: "Flare Dew Dewy Gel Glaze Stick",
        price: "$8.85",
      },
    ],
    cushion: [
      {
        imgSrc: "../assets/images/face-1.jpg",
        name: "Water Velvet Cover Cushion",
        price: "$27.69",
      },
      {
        imgSrc: "../assets/images/face-2.jpg",
        name: "Water Glow Coating Cushion",
        price: "$18.50",
      },
      {
        imgSrc: "../assets/images/face-3.jpg",
        name: "Water Velvet Cover Foundation",
        price: "$19.73",
      },
      {
        imgSrc: "../assets/images/face-4.jpg",
        name: "Water Glow Coating Foundation",
        price: "$29.23",
      },
    ],
  };

  tabs[0].classList.add("active");
  renderProducts("vintage");

  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      tabs.forEach((t) => t.classList.remove("active"));
      this.classList.add("active");

      const tabName = this.getAttribute("data-tab");
      renderProducts(tabName);
    });
  });

  function renderProducts(category) {
    mainProduct.innerHTML = "";

    const productList = products[category];

    const container1 = document.createElement("div");
    const container2 = document.createElement("div");
    container1.classList.add("productContainer_01");
    container2.classList.add("productContainer_02");

    productList.forEach((product, index) => {
      const productBox = createProductBox(product);

      if (index < 4) {
        container1.appendChild(productBox);
      } else {
        container2.appendChild(productBox);
      }
    });

    mainProduct.appendChild(container1);
    if (productList.length > 4) {
      mainProduct.appendChild(container2);
    }
  }

  function createProductBox(product) {
    const productBox = document.createElement("div");
    productBox.classList.add("productBox");

    const imgWrap = document.createElement("div");
    imgWrap.classList.add("imgWrap");

    const img = document.createElement("img");
    img.src = product.imgSrc;
    img.alt = product.name;
    imgWrap.appendChild(img);

    const textWrap = document.createElement("div");
    textWrap.classList.add("textWrap");

    const name = document.createElement("p");
    name.classList.add("name");
    name.textContent = product.name;

    const price = document.createElement("p");
    price.classList.add("price");
    price.textContent = product.price;

    textWrap.appendChild(name);
    textWrap.appendChild(price);

    productBox.appendChild(imgWrap);
    productBox.appendChild(textWrap);

    return productBox;
  }
});

//palette section
document.addEventListener("DOMContentLoaded", function () {
  const products = [
    {
      imgSrc: "../assets/images/eye-1.png",
      altText: "eye-1",
      name: "Blue Core Blurring Eyeshadow Palette",
      price: "$17.54",
    },
    {
      imgSrc: "../assets/images/eye-2.png",
      altText: "eye-2",
      name: "Muted Coral Blurring Eyeshadow Palette",
      price: "$17.54",
    },
    {
      imgSrc: "../assets/images/eye-3.png",
      altText: "eye-3",
      name: "Lazy Pink Blurring Eyeshadow Palette",
      price: "$17.54",
    },
    {
      imgSrc: "../assets/images/eye-4.png",
      altText: "eye-4",
      name: "Lavender Blurring Eyeshadow Palette",
      price: "$17.54",
    },
  ];

  const paletteProductsContainer = document.getElementById("paletteProducts");

  function renderProducts(products) {
    products.forEach((product) => {
      const productBox = document.createElement("div");
      productBox.className = "productBox";

      const imgWrap = document.createElement("div");
      imgWrap.className = "imgWrap";
      const img = document.createElement("img");
      img.src = product.imgSrc;
      img.alt = product.altText;
      imgWrap.appendChild(img);

      const textWrap = document.createElement("div");
      textWrap.className = "textWrap";

      const name = document.createElement("p");
      name.className = "name";
      name.textContent = product.name;

      const price = document.createElement("p");
      price.className = "price";
      price.textContent = product.price;

      textWrap.appendChild(name);
      textWrap.appendChild(price);

      productBox.appendChild(imgWrap);
      productBox.appendChild(textWrap);

      paletteProductsContainer.appendChild(productBox);
    });
  }

  renderProducts(products);
});
