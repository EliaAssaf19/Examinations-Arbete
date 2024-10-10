const carouselList = document.querySelector(".carousel-list");
const items = document.querySelectorAll(".carousel-item");
const nextButton = document.querySelector(".carousel-button.next");
const prevButton = document.querySelector(".carousel-button.prev");

let currentIndex = 0;

function getVisibleItems() {
  if (window.innerWidth <= 767) {
    return 1; // 1 objekt synligt på mobila enheter
  } else if (window.innerWidth <= 1023) {
    return 2; // 2 objekt synliga på surfplattor
  } else {
    return 3; // 3 objekt synliga på större skärmar
  }
}

function updateCarousel() {
  const visibleItems = getVisibleItems();
  const maxIndex = items.length - visibleItems;

  // Justera currentIndex för att säkerställa att det är inom gränserna
  if (currentIndex < 0) {
    currentIndex = 0; // Stoppa vid första matchen
  } else if (currentIndex > maxIndex) {
    currentIndex = maxIndex; // Stoppa vid sista matchen
  }

  const offset = -currentIndex * (100 / visibleItems);
  carouselList.style.transform = `translateX(${offset}%)`;

  // Avaktivera knapparna om vi når början eller slutet
  prevButton.disabled = currentIndex === 0;
  nextButton.disabled = currentIndex === maxIndex;
}

nextButton.addEventListener("click", () => {
  currentIndex++;
  updateCarousel();
});

prevButton.addEventListener("click", () => {
  currentIndex--;
  updateCarousel();
});

// Initial uppdatering av karusellen
updateCarousel();

// Event listener för att uppdatera karusellen vid fönsterändringar
window.addEventListener("resize", () => {
  currentIndex = 0; // Återställ till första matchen vid storleksändring
  updateCarousel();
});

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const headerNav = document.querySelector(".header-nav");

  // Kontrollera att elementen hittas
  console.log(hamburger);
  console.log(headerNav);

  hamburger.addEventListener("click", () => {
    console.log("Hamburgaren klickades!"); // Lägg till logg här

    headerNav.classList.toggle("active");
    console.log(headerNav.classList); // Kontrollera klasserna efter toggling
  });
});
