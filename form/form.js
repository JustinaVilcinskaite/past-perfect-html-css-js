import { postNewItem } from "../utils/fetches.js";
import { validateForm } from "../utils/form-validation.js";

const submitBtn = document.getElementById("submit-btn");
const title = document.getElementById("item-title");
const price = document.getElementById("price");
const description = document.getElementById("description");
const material = document.getElementById("material");
const imageUrl = document.getElementById("item-image");
const pickupLocation = document.getElementById("location");
const category = document.getElementById("category");
const condition = document.getElementById("condition");
const errorMessage = document.getElementById("error-message");
const pageWrapper = document.getElementById("page-wrapper");
const successMessage = document.getElementById("success-message");

submitBtn.addEventListener("click", () => {
  if (
    validateForm(
      title,
      price,
      description,
      material,
      imageUrl,
      pickupLocation,
      category,
      condition,
      errorMessage
    )
  ) {
    const newItem = {
      title: title.value,
      category: category.value,
      price: price.value,
      description: description.value,
      material: material.value,
      condition: condition.value,
      imageUrl: imageUrl.value,
      pickupLocation: pickupLocation.value,
    };

    postNewItem(newItem, pageWrapper, successMessage);
  }
});

// const collectFormData = () => ({
//   title: title.value,
//   category: category.value,
//   price: price.value,
//   description: description.value,
//   material: material.value,
//   condition: condition.value,
//   imageUrl: imageUrl.value,
//   pickUpLocation: pickUpLocation.value,
// });

// const handleSubmit = async () => {
//   const formData = [
//     title,
//     price,
//     description,
//     material,
//     imageUrl,
//     pickUpLocation,
//     category,
//     condition,
//     errorMessage,
//   ];

//   if (validateForm(...formData)) {
//     const newItem = collectFormData();
//     await postNewItem(newItem, pageWrapper, successMessage);
//   }
// };
// submitBtn.addEventListener("click", handleSubmit);

// Menu Toggle

const burgerBtn = document.getElementById("burger-menu");
const mobileNav = document.getElementById("mobile-nav");

burgerBtn.addEventListener("click", () => {
  mobileNav.classList.toggle("active");
});
