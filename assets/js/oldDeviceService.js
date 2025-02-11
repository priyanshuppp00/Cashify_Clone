document.addEventListener("DOMContentLoaded", () => {
  const oldDevices = [
    { name: "Sell Phone", img: "./assets/Images/sell_phone.webp" },
    { name: "Sell Laptop", img: "./assets/Images/selllaptop.webp" },
    { name: "Sell TV", img: "./assets/Images/selltv.webp" },
    { name: "Sell Tablet", img: "./assets/Images/seltablet.webp" },
    { name: "Sell Gaming Consoles", img: "./assets/Images/gamingconole.webp" },
    { name: "Sell Smartwatch", img: "./assets/Images/sellwatch.webp" },
    { name: "Sell Smart Speaker", img: "./assets/Images/sellsmartspeker.webp" },
    { name: "Recycle", img: "./assets/Images/recycle.webp" }
  ];

  const oldDevicesContainer = document.querySelector("#oldServices .service-device");
  oldDevices.forEach(device => {
    const deviceItem = document.createElement("a");
    deviceItem.href = "#";
    deviceItem.classList.add("service-deviceitem");

    const deviceImg = document.createElement("img");
    deviceImg.src = device.img;
    deviceImg.alt = device.name;

    deviceItem.appendChild(deviceImg);
    deviceItem.appendChild(document.createTextNode(device.name));
    oldDevicesContainer.appendChild(deviceItem);
  });
});
