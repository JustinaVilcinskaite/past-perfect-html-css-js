import { fetchAllItems } from "./utils/fetches.js";

const cardsWrapper = document.getElementById("cards-wrapper");

const buildCards = (data) => {
  cardsWrapper.innerHTML = "";
  const sortedItems = [...data].sort((a, b) => {
    return Number(a.price) - Number(b.price);
  });
  sortedItems.forEach((i) => {
    const card = document.createElement("a");
    card.href = `../item/item.html?id=${i.id}`;
    card.setAttribute("class", "card");

    const title = document.createElement("h3");
    title.textContent = i.title;

    const price = document.createElement("h2");
    price.textContent = `€ ${i.price}`;

    const image = document.createElement("img");
    image.src = i.imageUrl;

    card.append(image, title, price);
    cardsWrapper.append(card);
  });
};

const items = await fetchAllItems();
buildCards(items);

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
  const filteredFurniture = items.filter((i) => i.category === "Furniture");
  buildCards(filteredFurniture);
});

decorFilterBtn.addEventListener("click", () => {
  removeSelectedClassFromAll();
  decorFilterBtn.classList.add("selected-btn");
  const filteredDecor = items.filter((i) => i.category === "Home Décor");
  buildCards(filteredDecor);
});

lightingFilterBtn.addEventListener("click", () => {
  removeSelectedClassFromAll();
  lightingFilterBtn.classList.add("selected-btn");
  const filteredLighting = items.filter((i) => i.category === "Lighting");
  buildCards(filteredLighting);
});

allFilterBtn.addEventListener("click", () => {
  removeSelectedClassFromAll();
  allFilterBtn.classList.add("selected-btn");
  buildCards(items);
});

// Menu Toggle

const burgerBtn = document.getElementById("burger-menu");
const mobileNav = document.getElementById("mobile-nav");

burgerBtn.addEventListener("click", () => {
  mobileNav.classList.toggle("active");
});
