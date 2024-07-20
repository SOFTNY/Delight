document.addEventListener("DOMContentLoaded", function () {
  const mainProduct = document.querySelector(".main_product");

  const products = {
    vintage: [
      {
        imgSrc: "../img/vintage_01.jpg",
        altText: "vintage_01",
        name: "Stay Fixer Multi-Color Powder 3Colors",
        discount: "35%",
        price: "19,800원",
      },
      {
        imgSrc: "../img/vintage_02.jpg",
        altText: "vintage_02",
        name: "Water Glow Coating Cushion",
        discount: "25%",
        price: "26,800원",
      },
      {
        imgSrc: "../img/vintage_03.jpg",
        altText: "vintage_03",
        name: "Water Velvet Cover Foundation",
        discount: "30%",
        price: "26,600원",
      },
      {
        imgSrc: "../img/vintage_04.jpg",
        altText: "vintage_04",
        name: "Defining Cover Concealer 6 Colors",
        discount: "25%",
        price: "10,900원",
      },
      {
        imgSrc: "../img/vintage_05.jpg",
        altText: "vintage_05",
        name: "Stay Fixer Pact Vegan",
        discount: "",
        price: "22,000원",
      },
      {
        imgSrc: "../img/vintage_06.jpg",
        altText: "vintage_06",
        name: "Mix Blurring Volume Blusher 2 Colors",
        discount: "50%",
        price: "8,000원",
      },
      {
        imgSrc: "../img/vintage_07.jpg",
        altText: "vintage_07",
        name: "Mix Blurring Volume Highlighter 2 Colors",
        discount: "50%",
        price: "8,500원",
      },
      {
        imgSrc: "../img/vintage_08.jpg",
        altText: "vintage_08",
        name: "Sheer Layering Dual Blusher 7 Colors",
        discount: "25%",
        price: "14,200원",
      },
      {
        imgSrc: "../img/vintage_09.jpg",
        altText: "vintage_09",
        name: "Glitz Longwear Stick Shadow 8COLOR",
        discount: "10%",
        price: "15,300원",
      },
      {
        imgSrc: "../img/vintage_10.jpg",
        altText: "vintage_10",
        name: "Strong Volume Lash Ampoule",
        discount: "30%",
        price: "9,800원",
      },
    ],
    face: [
      {
        imgSrc: "../img/cushion_01.jpg",
        altText: "cushion_01",
        name: "Water Velvet Cover Cushion",
        discount: "",
        price: "36,000원",
      },
      {
        imgSrc: "../img/cushion_02.jpg",
        altText: "cushion_02",
        name: "Water Glow Coating Cushion",
        discount: "25%",
        price: "26,800원",
      },
      {
        imgSrc: "../img/cushion_03.jpg",
        altText: "cushion_03",
        name: "Water Velvet Cover Foundation",
        discount: "30%",
        price: "26,600원",
      },
      {
        imgSrc: "../img/cushion_04.jpg",
        altText: "cushion_04",
        name: "Defining Cover Concealer 6 Colors",
        discount: "25%",
        price: "10,900원",
      },
    ],
    eye: [
      {
        imgSrc: "../img/shadowPalette_01.jpg",
        altText: "shadowPalette_01",
        name: "Soda Coral Blurring Eye Palette 19 COLOR",
        discount: "32%",
        price: "22,800원",
      },
      {
        imgSrc: "../img/shadowPalette_02.jpg",
        altText: "shadowPalette_02",
        name: "Candy Coral Blurring Eye Palette 19 COLOR",
        discount: "32%",
        price: "22,800원",
      },
      {
        imgSrc: "../img/shadowPalette_03.jpg",
        altText: "shadowPalette_03",
        name: "Lazy Pink Blurring Eye Palette 19 COLOR",
        discount: "32%",
        price: "22,800원",
      },
      {
        imgSrc: "../img/shadowPalette_04.jpg",
        altText: "shadowPalette_04",
        name: "Lavender Blurring Eye Palette 19 COLOR",
        discount: "32%",
        price: "22,800원",
      },
      {
        imgSrc: "../img/shadowPalette_05.jpg",
        altText: "shadowPalette_05",
        name: "Sunset Blurring Eye Palette 19 COLOR",
        discount: "32%",
        price: "22,800원",
      },
      {
        imgSrc: "../img/shadowPalette_06.jpg",
        altText: "shadowPalette_06",
        name: "Lively Blurring Eye Palette 19 COLOR",
        discount: "32%",
        price: "22,800원",
      },
      {
        imgSrc: "../img/shadowPalette_07.jpg",
        altText: "shadowPalette_07",
        name: "Mute Coral Blurring Eye Palette 19 COLOR",
        discount: "32%",
        price: "22,800원",
      },
      {
        imgSrc: "../img/shadowPalette_08.jpg",
        altText: "shadowPalette_08",
        name: "Cocoa Blurring Eye Palette 19 COLOR",
        discount: "32%",
        price: "22,800원",
      },
      {
        imgSrc: "../img/shadowPalette_09.jpg",
        altText: "shadowPalette_09",
        name: "Vanilla Blurring Eye Palette 19COLOR",
        discount: "32%",
        price: "22,800원",
      },
      {
        imgSrc: "../img/shadowPalette_10.jpg",
        altText: "shadowPalette_10",
        name: "Bluecore Blurring Eye Palette 19COLOR",
        discount: "32%",
        price: "22,800원",
      },
      {
        imgSrc: "../img/shadowPalette_11.jpg",
        altText: "shadowPalette_11",
        name: "High Pink Blurring Eye Palette 19COLOR",
        discount: "32%",
        price: "22,800원",
      },
    ],
    lip: [
      {
        imgSrc: "../img/lip_01.jpg",
        altText: "lip_01",
        name: "Spicy Martini Dewy Gel Maxi Gloss",
        discount: "35%",
        price: "9,000원",
      },
      {
        imgSrc: "../img/lip_02.jpg",
        altText: "lip_02",
        name: "Slow Dance Dewy Gel Maxi Gloss",
        discount: "35%",
        price: "9,000원",
      },
      {
        imgSrc: "../img/lip_03.jpg",
        altText: "lip_03",
        name: "Love Bay Dewy Gel Maxi Gloss",
        discount: "35%",
        price: "9,000원",
      },
      {
        imgSrc: "../img/lip_04.jpg",
        altText: "lip_04",
        name: "Flirting Dewy Gel Maxi Gloss",
        discount: "35%",
        price: "9,000원",
      },
      {
        imgSrc: "../img/lip_05.jpg",
        altText: "lip_05",
        name: "Tanned Girl Dewy Gel Maxi Gloss",
        discount: "35%",
        price: "9,000원",
      },
      {
        imgSrc: "../img/lip_06.jpg",
        altText: "lip_06",
        name: "Malibu Dewy Gel Maxi Gloss",
        discount: "35%",
        price: "9,000원",
      },
      {
        imgSrc: "../img/lip_07.jpg",
        altText: "lip_07",
        name: "Cherrymore Dewy Gel Maxi Gloss",
        discount: "35%",
        price: "9,000원",
      },
      {
        imgSrc: "../img/lip_08.jpg",
        altText: "lip_08",
        name: "Hunted Dewy Gel Maxi Gloss",
        discount: "35%",
        price: "9,000원",
      },
    ],
    nail: [
      {
        imgSrc: "../img/nail_01.jpg",
        altText: "nail_01",
        name: "[1999 Vintage] Wake Make Soft Blurring Eye Palette 19COLOR",
        discount: "32%",
        price: "22,800원",
      },
      {
        imgSrc: "../img/nail_02.jpg",
        altText: "nail_02",
        name: "[1999 Vintage] Wake Make Soft Blurring Eye Palette 19COLOR",
        discount: "32%",
        price: "22,800원",
      },
      {
        imgSrc: "../img/nail_03.jpg",
        altText: "nail_03",
        name: "[1999 Vintage] Wake Make Soft Blurring Eye Palette 19COLOR",
        discount: "32%",
        price: "22,800원",
      },
      {
        imgSrc: "../img/nail_04.jpg",
        altText: "nail_04",
        name: "[1999 Vintage] Wake Make Soft Blurring Eye Palette 19COLOR",
        discount: "32%",
        price: "22,800원",
      },
      {
        imgSrc: "../img/nail_05.jpg",
        altText: "nail_05",
        name: "[1999 Vintage] Wake Make Soft Blurring Eye Palette 19COLOR",
        discount: "32%",
        price: "22,800원",
      },
      {
        imgSrc: "../img/nail_06.jpg",
        altText: "nail_06",
        name: "[1999 Vintage] Wake Make Soft Blurring Eye Palette 19COLOR",
        discount: "32%",
        price: "22,800원",
      },
      {
        imgSrc: "../img/nail_07.jpg",
        altText: "nail_07",
        name: "[1999 Vintage] Wake Make Soft Blurring Eye Palette 19COLOR",
        discount: "32%",
        price: "22,800원",
      },
      {
        imgSrc: "../img/nail_08.jpg",
        altText: "nail_08",
        name: "[1999 Vintage] Wake Make Soft Blurring Eye Palette 19COLOR",
        discount: "32%",
        price: "22,800원",
      },
      {
        imgSrc: "../img/nail_09.jpg",
        altText: "nail_09",
        name: "[1999 Vintage] Wake Make Soft Blurring Eye Palette 19COLOR",
        discount: "32%",
        price: "22,800원",
      },
      {
        imgSrc: "../img/nail_10.jpg",
        altText: "nail_10",
        name: "[1999 Vintage] Wake Make Soft Blurring Eye Palette 19COLOR",
        discount: "32%",
        price: "22,800원",
      },
      {
        imgSrc: "../img/nail_11.jpg",
        altText: "nail_11",
        name: "[1999 Vintage] Wake Make Soft Blurring Eye Palette 19COLOR",
        discount: "32%",
        price: "22,800원",
      },
      {
        imgSrc: "../img/nail_12.jpg",
        altText: "nail_12",
        name: "[1999 Vintage] Wake Make Soft Blurring Eye Palette 19COLOR",
        discount: "32%",
        price: "22,800원",
      },
    ],
    tool: [
      {
        imgSrc: "../img/tool_01.jpg",
        altText: "tool_01",
        name: "Spachula Wide Foundation Brush / Puff-Fit Brush",
        discount: "20%",
        price: "20,800원",
      },
      {
        imgSrc: "../img/tool_02.jpg",
        altText: "tool_02",
        name: "Spachula Wide Foundation Brush",
        discount: "",
        price: "20,000원",
      },
      {
        imgSrc: "../img/tool_03.jpg",
        altText: "tool_03",
        name: "Puff-Fit Brush",
        discount: "",
        price: "20,000원",
      },
      {
        imgSrc: "../img/tool_04.jpg",
        altText: "tool_04",
        name: "LED Gel Nail Lamp",
        discount: "",
        price: "7,000원",
      },
    ],
  };

  renderProducts(products.lip);

  const tabs = document.querySelectorAll(".tab");
  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      tabs.forEach((t) => t.classList.remove("active"));
      this.classList.add("active");

      const tabName = this.getAttribute("data-tab");
      const selectedProducts = products[tabName];

      renderProducts(selectedProducts);
    });
  });

  function renderProducts(selectedProducts) {
    mainProduct.innerHTML = "";

    const productContainer = document.createElement("div");
    productContainer.className = "product_container";

    selectedProducts.forEach((product) => {
      const productBox = createProductBox(product);
      productContainer.appendChild(productBox);
    });

    mainProduct.appendChild(productContainer);
  }

  function createProductBox(product) {
    const productBox = document.createElement("div");
    productBox.className = "productBox";

    const productImg = document.createElement("div");
    productImg.className = "product_img";
    const img = document.createElement("img");
    img.src = product.imgSrc;
    img.alt = product.altText;
    productImg.appendChild(img);

    const productText = document.createElement("div");
    productText.className = "product_text";
    const name = document.createElement("div");
    name.className = "name";
    name.textContent = product.name;

    const price = document.createElement("div");
    price.className = "price";
    const discount = document.createElement("span");
    discount.className = "discount";
    discount.textContent = product.discount;
    const priceText = document.createTextNode(` ${product.price}`);

    price.appendChild(discount);
    price.appendChild(priceText);
    productText.appendChild(name);
    productText.appendChild(price);

    productBox.appendChild(productImg);
    productBox.appendChild(productText);

    return productBox;
  }
});
