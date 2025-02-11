document.addEventListener("DOMContentLoaded", () => {
  const refurbishedPhones = [
    {
      name: "Apple iPhone 14 - Refurbished",
      img: "./assets/Images/phone1.webp",
      badge: "₹42,801 OFF",
      sale: "Valentine's Day Sale",
      rating: 4.5,
      price: "₹37,099",
      discount: "₹79,900",
      off: "-42%"
    },
    {
      name: "Apple iPhone 12 - Refurbished",
      img: "./assets/Images/phone2.webp",
      badge: "₹30,700 OFF",
      sale: "Valentine's Day Sale",
      rating: 4.5,
      price: "₹23,799",
      discount: "₹54,499",
      off: "-56%"
    },
    {
      name: "Apple iPhone 11 - Refurbished",
      img: "./assets/Images/phone3.webp",
      badge: "₹21,400 OFF",
      sale: "Valentine's Day Sale",
      rating: 5,
      price: "₹18,099",
      discount: "₹39,499",
      off: "- 54%"
    },
    {
      name: "Vivo X70 Pro - Refurbished",
      img: "./assets/Images/phone4.webp",
      badge: "₹22,401 OFF",
      sale: "Flash Sale",
      rating: 4.5,
      price: "₹23,099",
      discount: "₹45,500",
      off: "- 49%"
    },
    {
      name: "Vivo X70 Pro - Refurbished",
      img: "./assets/Images/phone5.webp",
      badge: "₹22,401 OFF",
      sale: "Valentine's Day Sale",
      rating: 4.5,
      price: "₹23,099",
      discount: "₹45,500",
      off: "- 54%"
    },
    {
      name: "Samsung Galaxy Z Fold5 - Refurbished",
      img: "./assets/Images/phone6.webp",
      badge: "₹71,800 OFF",
      sale: "Valentine's Day Sale",
      rating: 5,
      price: "₹81,099",
      discount: "₹1,51,899",
      off: "- 47%"
    }
  ];

  const refurbishedPhonesContainer = document.querySelector("#refurbishedPhonesCarousel");
  refurbishedPhones.forEach(phone => {
    const card = document.createElement("div");
    card.classList.add("card", "position-relative", "mx-2");
    card.style.minWidth = "18rem";
    card.style.maxWidth = "18rem";

    const img = document.createElement("img");
    img.src = phone.img;
    img.alt = phone.name;
    img.classList.add("card-img-top", "rephone-img");

    const logo = document.createElement("img");
    logo.src = "./assets/Images/casihfyphonelogo.webp";
    logo.alt = "Cashify Assured";
    logo.classList.add("cashify-logo");

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const badge = document.createElement("p");
    badge.classList.add("card-badge");
    badge.textContent = phone.badge;

    const title = document.createElement("h5");
    title.classList.add("card-title");
    title.textContent = phone.name;

    const button = document.createElement("button");
    button.classList.add("btn", "btn-sm");
    button.textContent = phone.sale;

    const rating = document.createElement("span");
    rating.classList.add("rating");
    rating.innerHTML = `${phone.rating} <img class="rating-img" src="./assets/Images/star.webp">`;

    const priceInfo = document.createElement("p");
    priceInfo.classList.add("mb-1");
    priceInfo.innerHTML = `
      <span class="card-off">${phone.off}</span>
      <span class="card-price">${phone.price}</span>
      <span class="card-discount">${phone.discount}</span>
    `;

    cardBody.appendChild(badge);
    cardBody.appendChild(title);
    cardBody.appendChild(button);
    cardBody.appendChild(rating);
    cardBody.appendChild(priceInfo);

    card.appendChild(img);
    card.appendChild(logo);
    card.appendChild(cardBody);

    refurbishedPhonesContainer.appendChild(card);
  });
});
