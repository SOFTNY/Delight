document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".tab");
    const productTop = document.querySelector(".product_top");
    const productBottom = document.querySelector(".product_bottom");

    const products = {
        vintage: [
            {
                imgSrc: "../img/vintage_01.jpg",
                altText: "shadowPalette_01",
                name: "[1999 Vintage] Wake Make Soft Blurring Eye Palette 19COLOR",
                discount: "32%",
                price: "22,800원",
            },
            {
                imgSrc: "../img/vintage_02.jpg",
                altText: "shadowPalette_02",
                name: "[1999 Vintage] Wake Make Soft Blurring Eye Palette 19COLOR",
                discount: "32%",
                price: "22,800원",
            },
            {
                imgSrc: "../img/vintage_03.jpg",
                altText: "shadowPalette_03",
                name: "[1999 Vintage] Wake Make Soft Blurring Eye Palette 19COLOR",
                discount: "32%",
                price: "22,800원",
            },
            {
                imgSrc: "../img/vintage_04.jpg",
                altText: "shadowPalette_04",
                name: "[1999 Vintage] Wake Make Soft Blurring Eye Palette 19COLOR",
                discount: "32%",
                price: "22,800원",
            },
            {
                imgSrc: "../img/vintage_05.jpg",
                altText: "shadowPalette_05",
                name: "[1999 Vintage] Wake Make Soft Blurring Eye Palette 19COLOR",
                discount: "32%",
                price: "22,800원",
            },
            {
                imgSrc: "../img/vintage_06.jpg",
                altText: "shadowPalette_06",
                name: "[1999 Vintage] Wake Make Soft Blurring Eye Palette 19COLOR",
                discount: "32%",
                price: "22,800원",
            },
            {
                imgSrc: "../img/vintage_07.jpg",
                altText: "shadowPalette_07",
                name: "[1999 Vintage] Wake Make Soft Blurring Eye Palette 19COLOR",
                discount: "32%",
                price: "22,800원",
            },
            {
                imgSrc: "../img/vintage_08.jpg",
                altText: "shadowPalette_08",
                name: "[1999 Vintage] Wake Make Soft Blurring Eye Palette 19COLOR",
                discount: "32%",
                price: "22,800원",
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
