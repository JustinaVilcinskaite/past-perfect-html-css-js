export const fetchAllItems = async () => {
  try {
    const response = await fetch(
      "https://665f37b01e9017dc16f35a56.mockapi.io/interior-items"
    );
    const items = await response.json();
    return items;
  } catch (error) {
    console.log(error);
  }
};

export const fetchItemById = async (id) => {
  try {
    const response = await fetch(
      `https://665f37b01e9017dc16f35a56.mockapi.io/interior-items/${id}`
    );
    const item = await response.json();
    return item;
  } catch (error) {
    console.log(error);
  }
};

export const deleteItem = async (id, pageWrapper, deleteMessage) => {
  try {
    const response = await fetch(
      `https://665f37b01e9017dc16f35a56.mockapi.io/interior-items/${id}`,
      {
        method: "DELETE",
      }
    );
    await response.json();
    pageWrapper.style.opacity = "0.5";
    deleteMessage.textContent = "The item has been deleted!";
    deleteMessage.style.display = "block";

    setTimeout(() => {
      window.location.replace("../index.html");
    }, 2000);
  } catch (error) {
    console.log(error);
  }
};

export const postNewItem = async (newItem, pageWrapper, successMessage) => {
  try {
    const response = await fetch(
      "https://665f37b01e9017dc16f35a56.mockapi.io/interior-items",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newItem),
      }
    );
    await response.json();
    pageWrapper.style.opacity = "0.5";
    successMessage.textContent = "The item has been added!";
    successMessage.style.display = "block";
    setTimeout(() => {
      window.location.replace("../index.html");
    }, 2000);
  } catch (error) {
    console.log(error);
  }
};
