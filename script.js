
const form = document.getElementById("shopping-form");
const itemInput = document.getElementById("item-input");
const shoppingList = document.getElementById("shopping-list");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const itemName = itemInput.value.trim();

  if (itemName === "") {
    return;
  }

  // Create a list item
  const listItem = document.createElement("li");

  // Create a text node for the item name
  const itemText = document.createTextNode(itemName);

  // Add the text to the list item
  listItem.appendChild(itemText);

  // Create a Delete button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.classList.add("delete-button");

  // Delete this item when the button is clicked
  deleteButton.addEventListener("click", function() {
    listItem.remove();
  });

  // Add the Delete button to the list item
  listItem.appendChild(deleteButton);

  // Add the list item to the shopping list
  shoppingList.appendChild(listItem);

  // Clear the input box
  itemInput.value = "";
  itemInput.focus();
});
