import { fetchItemById, deleteItem } from "../utils/fetches.js";

const image = document.getElementById("item-img");
const category = document.getElementById("category");
const title = document.getElementById("title");
const price = document.getElementById("price");
const description = document.getElementById("description");
const material = document.getElementById("material");
const condition = document.getElementById("condition");
const indicator = document.getElementById("indicator");
const pickupLocation = document.getElementById("pick-up-location");
const deleteButton = document.getElementById("delete-btn");
const pageWrapper = document.getElementById("page-wrapper");
const deleteMessage = document.getElementById("delete-message");

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

const item = await fetchItemById(id);

image.src = item.imageUrl;
category.textContent = item.category;
title.textContent = item.title;
price.textContent = `€ ${item.price}`;
description.textContent = item.description;
material.textContent = item.material;
condition.textContent = item.condition;
indicator.classList.add(item.condition);
pickupLocation.textContent = item.pickupLocation;

deleteButton.addEventListener("click", () =>
  deleteItem(id, pageWrapper, deleteMessage)
);

// Menu Toggle

const burgerBtn = document.getElementById("burger-menu");
const mobileNav = document.getElementById("mobile-nav");

burgerBtn.addEventListener("click", () => {
  mobileNav.classList.toggle("active");
});
