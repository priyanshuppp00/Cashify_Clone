document.addEventListener("DOMContentLoaded", () => {
  const services = [
    { name: "Sell Phone", img: "./assets/Images/sell_phone.webp" },
    { name: "Buy Phone", img: "./assets/Images/buyphone.webp" },
    { name: "Buy Laptops", img: "./assets/Images/buylaptop.webp" },
    { name: "Repair Phone", img: "./assets/Images/repairphone.webp" },
    { name: "Repair Laptop", img: "./assets/Images/repairlaptop.webp" },
    { name: "Find New Phone", img: "./assets/Images/findnewphone.webp" },
    { name: "Nearby Stores", img: "./assets/Images/store.webp" },
    { name: "Recycle", img: "./assets/Images/recycle.webp" }
  ];

  const servicesContainer = document.querySelector("#mobileservices .service-card");
  services.forEach(service => {
    const serviceItem = document.createElement("a");
    serviceItem.href = "#";
    serviceItem.classList.add("service-item");

    const serviceImg = document.createElement("img");
    serviceImg.src = service.img;
    serviceImg.alt = service.name;

    serviceItem.appendChild(serviceImg);
    serviceItem.appendChild(document.createTextNode(service.name));
    servicesContainer.appendChild(serviceItem);
  });
});
