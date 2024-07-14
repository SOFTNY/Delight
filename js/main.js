//Logo scroll scale
gsap.to(".main_content", {
  scrollTrigger: {
    trigger: ".main_content", // 스크롤을 감지할 대상의 selector를 정확히 지정해야 합니다.
    start: "top", // trigger 요소의 상단이 viewport의 중앙에 도달했을 때 애니메이션 시작
    end: "bottom", // trigger 요소의 하단이 viewport의 중앙에 도달했을 때 애니메이션 종료
    scrub: 1, // 스크롤 반영 여부
    //markers: true, // 디버깅용 마커 활성화
  },
  scale: 0.5, // 로고 크기를 50%로 축소
  y: "65%", // y 방향으로 50%만큼 이동 (가운데에서 아래쪽으로 이동)
  ease: "none", // 애니메이션의 속도 곡선
});

const products = [
  { id: '07', name: 'Soda Coral Blurring Eye Palette', colors: 19, price: "9,900", discount: '29%', imgSrc: '../img/shadowPalette_01.jpg' },
  { id: '08', name: 'Candy Coral Blurring Eye Palette', colors: 19, price: "9,900", discount: '29%', imgSrc: '../img/shadowPalette_02.jpg' },
  { id: '10', name: 'Rage Pink Blurring Eye Palette', colors: 19, price: "9,900", discount: '29%', imgSrc: '../img/shadowPalette_03.jpg' },
  { id: '04', name: 'Lavender Blurring Eye Palette', colors: 19, price: "9,900", discount: '29%', imgSrc: '../img/shadowPalette_04.jpg' }
];

const productContainer = document.getElementById('productContainer');

products.forEach(product => {
  const productHTML = `
    <div class="product_container">
      <div class="imgBox">
        <img src="${product.imgSrc}" alt="${product.name}" />
      </div>
      <div class="textBox">
        <div class="name">
          ${product.id} ${product.name} ${product.colors}COLOR
        </div>
        <div class="price">
          <span class="discount">${product.discount}</span> ${product.price}원
        </div>
      </div>
    </div>
  `;
  productContainer.innerHTML += productHTML;
});


document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tab");
  const productTop = document.querySelector(".product_top");
  const productBottom = document.querySelector(".product_bottom");

  const products = {
    vintage: [
      {
        imgSrc: "../img/vintage_01.jpg",
        altText: "vintage_01",
        name: "Water Glow Coating Cushion",
        discount: "35%",
        price: "19,800원",
      },
      {
        imgSrc: "../img/vintage_02.jpg",
        altText: "vintage_02",
        name: "Stay Fixer Multi-Color Powder 3 Colors",
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
    ],
    eyeshadow: [
      {
        imgSrc: "../img/shadowPalette_01.jpg",
        altText: "shadowPalette_01",
        name: "[1999 Vintage] Wake Make Soft Blurring Eye Palette 19COLOR",
        discount: "32%",
        price: "22,800원",
      },
      {
        imgSrc: "../img/shadowPalette_02.jpg",
        altText: "shadowPalette_02",
        name: "[1999 Vintage] Wake Make Soft Blurring Eye Palette 19COLOR",
        discount: "32%",
        price: "22,800원",
      },
      {
        imgSrc: "../img/shadowPalette_03.jpg",
        altText: "shadowPalette_03",
        name: "[1999 Vintage] Wake Make Soft Blurring Eye Palette 19COLOR",
        discount: "32%",
        price: "22,800원",
      },
      {
        imgSrc: "../img/shadowPalette_04.jpg",
        altText: "shadowPalette_04",
        name: "[1999 Vintage] Wake Make Soft Blurring Eye Palette 19COLOR",
        discount: "32%",
        price: "22,800원",
      },
      {
        imgSrc: "../img/shadowPalette_05.jpg",
        altText: "shadowPalette_05",
        name: "[1999 Vintage] Wake Make Soft Blurring Eye Palette 19COLOR",
        discount: "32%",
        price: "22,800원",
      },
      {
        imgSrc: "../img/shadowPalette_06.jpg",
        altText: "shadowPalette_06",
        name: "[1999 Vintage] Wake Make Soft Blurring Eye Palette 19COLOR",
        discount: "32%",
        price: "22,800원",
      },
      {
        imgSrc: "../img/shadowPalette_07.jpg",
        altText: "shadowPalette_07",
        name: "[1999 Vintage] Wake Make Soft Blurring Eye Palette 19COLOR",
        discount: "32%",
        price: "22,800원",
      },
      {
        imgSrc: "../img/shadowPalette_08.jpg",
        altText: "shadowPalette_08",
        name: "[1999 Vintage] Wake Make Soft Blurring Eye Palette 19COLOR",
        discount: "32%",
        price: "22,800원",
      },
    ],
    dewy: [
      {
        imgSrc: "../img/lip_01.jpg",
        altText: "lip_01",
        name: "[1999 Vintage] Wake Make Soft Blurring Eye Palette 19COLOR",
        discount: "32%",
        price: "22,800원",
      },
      {
        imgSrc: "../img/lip_02.jpg",
        altText: "lip_02",
        name: "[1999 Vintage] Wake Make Soft Blurring Eye Palette 19COLOR",
        discount: "32%",
        price: "22,800원",
      },
      {
        imgSrc: "../img/lip_03.jpg",
        altText: "lip_03",
        name: "[1999 Vintage] Wake Make Soft Blurring Eye Palette 19COLOR",
        discount: "32%",
        price: "22,800원",
      },
      {
        imgSrc: "../img/lip_04.jpg",
        altText: "lip_04",
        name: "[1999 Vintage] Wake Make Soft Blurring Eye Palette 19COLOR",
        discount: "32%",
        price: "22,800원",
      },
      {
        imgSrc: "../img/lip_05.jpg",
        altText: "lip_05",
        name: "[1999 Vintage] Wake Make Soft Blurring Eye Palette 19COLOR",
        discount: "32%",
        price: "22,800원",
      },
      {
        imgSrc: "../img/lip_06.jpg",
        altText: "lip_06",
        name: "[1999 Vintage] Wake Make Soft Blurring Eye Palette 19COLOR",
        discount: "32%",
        price: "22,800원",
      },
      {
        imgSrc: "../img/lip_07.jpg",
        altText: "lip_07",
        name: "[1999 Vintage] Wake Make Soft Blurring Eye Palette 19COLOR",
        discount: "32%",
        price: "22,800원",
      },
      {
        imgSrc: "../img/lip_08.jpg",
        altText: "lip_08",
        name: "[1999 Vintage] Wake Make Soft Blurring Eye Palette 19COLOR",
        discount: "32%",
        price: "22,800원",
      },
    ],
    cushion: [
      {
        imgSrc: "../img/cushion_01.jpg",
        altText: "cushion_01",
        name: "[1999 Vintage] Wake Make Soft Blurring Eye Palette 19COLOR",
        discount: "32%",
        price: "22,800원",
      },
      {
        imgSrc: "../img/cushion_02.jpg",
        altText: "cushion_02",
        name: "[1999 Vintage] Wake Make Soft Blurring Eye Palette 19COLOR",
        discount: "32%",
        price: "22,800원",
      },
      {
        imgSrc: "../img/cushion_03.jpg",
        altText: "cushion_03",
        name: "[1999 Vintage] Wake Make Soft Blurring Eye Palette 19COLOR",
        discount: "32%",
        price: "22,800원",
      },
      {
        imgSrc: "../img/cushion_04.jpg",
        altText: "cushion_04",
        name: "[1999 Vintage] Wake Make Soft Blurring Eye Palette 19COLOR",
        discount: "32%",
        price: "22,800원",
      },
    ],
  };

  //tab
  tabs[0].classList.add("active");
  renderProducts(products[tabs[0].getAttribute("data-tab")]);

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
    productTop.innerHTML = "";
    productBottom.innerHTML = "";

    selectedProducts.slice(0, 4).forEach((product) => {
      const productContainer = createProductContainer(product);
      productTop.appendChild(productContainer);
    });

    selectedProducts.slice(4).forEach((product) => {
      const productContainer = createProductContainer(product);
      productBottom.appendChild(productContainer);
    });
  }

  function createProductContainer(product) {
    const productContainer = document.createElement("div");
    productContainer.className = "product_container";

    const imgBox = document.createElement("div");
    imgBox.className = "imgBox";

    const img = document.createElement("img");
    img.src = product.imgSrc;
    img.alt = product.altText;

    imgBox.appendChild(img);

    const textBox = document.createElement("div");
    textBox.className = "textBox";

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

    textBox.appendChild(name);
    textBox.appendChild(price);

    productContainer.appendChild(imgBox);
    productContainer.appendChild(textBox);

    return productContainer;
  }
});


//mainBrandStory - swiper
let swiper = new Swiper(".mySwiper", {
  slidesPerView: 1.5,
  spaceBetween: 20,

  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
});

document.querySelectorAll('.mySwiper').forEach(function (target) {
  let swp = target.swiper;

  target.addEventListener('mouseenter', function () {
    swp.autoplay.stop();
  });

  target.addEventListener('mouseleave', function () {
    swp.autoplay.start();
  });
});