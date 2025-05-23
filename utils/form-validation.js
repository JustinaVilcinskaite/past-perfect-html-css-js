export const validateForm = (
  title,
  price,
  description,
  material,
  imageUrl,
  pickupLocation,
  category,
  condition,
  errorMessage
) => {
  errorMessage.textContent = "";
  errorMessage.classList.remove("visible");

  if (
    !title.value ||
    !price.value ||
    !description.value ||
    !material.value ||
    !imageUrl.value ||
    !pickupLocation.value ||
    category.value === "category" ||
    condition.value === "condition"
  ) {
    errorMessage.textContent =
      "All fields are required. Please fill out the form.";
    errorMessage.classList.add("visible");
    return false;
  }

  const priceValue = Number(price.value);
  if (!priceValue) {
    errorMessage.textContent = "Please enter a valid price.";
    errorMessage.classList.add("visible");
    return false;
  }

  const descriptionLength50Regex = /^.{50,}$/;
  const trimmedDescription = description.value.trim();
  if (!descriptionLength50Regex.test(trimmedDescription)) {
    errorMessage.textContent =
      "The description must be at least 50 characters long.";
    errorMessage.classList.add("visible");
    return false;
  }

  const imageUrlRegex = /\.(jpeg|jpg|png|gif|webp)$/i;
  if (!imageUrlRegex.test(imageUrl.value)) {
    errorMessage.textContent = "Please enter a valid image URL.";
    errorMessage.classList.add("visible");
    return false;
  }

  return true;
};
