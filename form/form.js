import { postNewItem } from "../utils/fetches.js";

const submitBtn = document.getElementById("submit-btn");
const title = document.getElementById("item-title");
const price = document.getElementById("price");
const description = document.getElementById("description");
const material = document.getElementById("material");
const imageUrl = document.getElementById("item-image");
const pickUpLocation = document.getElementById("location");
const category = document.getElementById("category");
const condition = document.getElementById("condition");
const errorMessage = document.getElementById("error-message");

submitBtn.addEventListener("click", () => {
  errorMessage.textContent = "";
  errorMessage.classList.remove("visible");

  if (
    !title.value ||
    !price.value ||
    !description.value ||
    !material.value ||
    !imageUrl.value ||
    !pickUpLocation.value ||
    category.value === "category" ||
    condition.value === "condition"
  ) {
    errorMessage.textContent =
      "All fields are required. Please fill out the form.";
    errorMessage.classList.add("visible");
    return;
  }

  const priceValue = Number(price.value);
  if (!priceValue) {
    errorMessage.textContent = "Please enter a valid price.";
    errorMessage.classList.add("visible");
    return;
  }

  const lengthRegex = /^.{50,}$/;
  const trimmedDescription = description.value.trim();
  if (!lengthRegex.test(trimmedDescription)) {
    errorMessage.textContent =
      "The description must be at least 50 characters long.";
    errorMessage.classList.add("visible");
    return;
  }

  const imageUrlRegex = /\.(jpeg|jpg|png|gif)$/i;
  if (!imageUrlRegex.test(imageUrl.value)) {
    errorMessage.textContent = "Please enter a valid image URL.";
    errorMessage.classList.add("visible");
    return;
  }

  const newItem = {
    title: title.value,
    category: category.value,
    price: priceValue,
    description: description.value,
    material: material.value,
    condition: condition.value,
    imageUrl: imageUrl.value,
    pickUpLocation: pickUpLocation.value,
  };

  postNewItem(newItem);
});

// Menu Toggle

const burgerBtn = document.getElementById("burger-menu");
const mobileNav = document.getElementById("mobile-nav");

burgerBtn.addEventListener("click", () => {
  mobileNav.classList.toggle("active");
});
