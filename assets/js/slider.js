document.addEventListener("DOMContentLoaded", () => {
  const sliderImages = [
    { src: "./assets/Images/slider1.webp", alt: "Slide 1" },
    { src: "./assets/Images/slider2.webp", alt: "Slide 2" },
    { src: "./assets/Images/3rd.webp", alt: "Slide 3" },
    { src: "./assets/Images/social-6.jpg", alt: "Slide 4" }
  ];

  const carouselInner = document.querySelector("#carouselExampleIndicators .carousel-inner");
  const carouselIndicators = document.querySelector(".carousel-indicators");

  sliderImages.forEach((image, index) => {
    const carouselItem = document.createElement("div");
    carouselItem.classList.add("carousel-item");
    if (index === 0) {
      carouselItem.classList.add("active");
    }

    const img = document.createElement("img");
    img.src = image.src;
    img.alt = image.alt;
    img.classList.add("d-block", "w-100");

    carouselItem.appendChild(img);
    carouselInner.appendChild(carouselItem);

    const indicator = document.createElement("button");
    indicator.type = "button";
    indicator.dataset.bsTarget = "#carouselExampleIndicators";
    indicator.dataset.bsSlideTo = index;
    indicator.ariaLabel = `Slide ${index + 1}`;
    if (index === 0) {
      indicator.classList.add("active");
      indicator.ariaCurrent = "true";
    }

    carouselIndicators.appendChild(indicator);
  });

  // Add navigation buttons dynamically
  const prevButton = document.createElement("button");
  prevButton.classList.add("carousel-control-prev", "custom-carousel-btn");
  prevButton.type = "button";
  prevButton.dataset.bsTarget = "#carouselExampleIndicators";
  prevButton.dataset.bsSlide = "prev";
  prevButton.innerHTML = `
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  `;
  carouselInner.parentElement.appendChild(prevButton);

  const nextButton = document.createElement("button");
  nextButton.classList.add("carousel-control-next", "custom-carousel-btn");
  nextButton.type = "button";
  nextButton.dataset.bsTarget = "#carouselExampleIndicators";
  nextButton.dataset.bsSlide = "next";
  nextButton.innerHTML = `
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  `;
  carouselInner.parentElement.appendChild(nextButton);
});
