import { fetchAllItems } from "./utils/fetches.js";

const cardsWrapper = document.getElementById("cards-wrapper");

const buildCards = (data) => {
  cardsWrapper.innerHTML = "";

  data.forEach((d) => {
    const card = document.createElement("a");
    card.href = `../item/item.html?id=${d.id}`;
    card.setAttribute("class", "card");

    const title = document.createElement("h3");
    title.textContent = d.title;

    const price = document.createElement("h2");
    price.textContent = `€ ${d.price}`;

    const image = document.createElement("img");
    image.src = d.imageUrl;

    card.append(image, title, price);
    cardsWrapper.append(card);
  });
};

const items = await fetchAllItems();
const sortedItems = [...items].sort(
  (a, b) => Number(a.price) - Number(b.price)
);
buildCards(sortedItems);

// Filter buttons

const furnitureFilterBtn = document.getElementById("furniture-filter-btn");
const decorFilterBtn = document.getElementById("decor-filter-btn");
const lightingFilterBtn = document.getElementById("lighting-filter-btn");
const allFilterBtn = document.getElementById("all-filter-btn");
const buttons = document.querySelectorAll(".filter-btn");

const removeSelectedClassFromAll = () => {
  buttons.forEach((btn) => {
    btn.classList.remove("selected-btn");
  });
};

furnitureFilterBtn.addEventListener("click", () => {
  removeSelectedClassFromAll();
  furnitureFilterBtn.classList.add("selected-btn");
  const filteredFurniture = sortedItems.filter(
    (i) => i.category === "Furniture"
  );
  buildCards(filteredFurniture);
});

decorFilterBtn.addEventListener("click", () => {
  removeSelectedClassFromAll();
  decorFilterBtn.classList.add("selected-btn");
  const filteredDecor = sortedItems.filter((i) => i.category === "Home Décor");
  buildCards(filteredDecor);
});

lightingFilterBtn.addEventListener("click", () => {
  removeSelectedClassFromAll();
  lightingFilterBtn.classList.add("selected-btn");
  const filteredLighting = sortedItems.filter((i) => i.category === "Lighting");
  buildCards(filteredLighting);
});

allFilterBtn.addEventListener("click", () => {
  removeSelectedClassFromAll();
  allFilterBtn.classList.add("selected-btn");
  buildCards(sortedItems);
});

// Menu Toggle

const burgerBtn = document.getElementById("burger-menu");
const mobileNav = document.getElementById("mobile-nav");

burgerBtn.addEventListener("click", () => {
  mobileNav.classList.toggle("active");
});
