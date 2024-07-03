const personName = document.querySelector(".cardholder-name");
const displayName = document.querySelector(".card-owner-name");
const personId = document.querySelector(".card-number-input");
const displayId = document.querySelector(".card-id-para");

///thats for id
function checkerOfId(inputElement) {
  const value = inputElement.value.replace(/\s/g, ""); // Remove spaces
  if (value.length === 16) {
    inputElement.style.border = "1.5px solid green";
  } else {
    inputElement.style.border = "1.5px solid red";
  }
}

personId.addEventListener("input", (event) => {
  let value = event.target.value.replace(/\D/g, ""); // Remove non-numeric characters
  let formattedValue = value.match(/.{1,4}/g)?.join(" ") || ""; // Insert space every 4 characters

  event.target.value = formattedValue; // Update the input field with the formatted value

  displayId.textContent = formattedValue || "0000 0000 0000 0000";
  checkerOfId(personId);
});
////till there

/////this is for cardHolder

function cardHolderChecker(inputElement) {
  if (inputElement.value) {
    inputElement.style.border = "1.5px solid green";
  } else {
    inputElement.style.border = "1.5px solid red";
  }
}
personName.addEventListener("input", (event) => {
  displayName.textContent = event.target.value || "JANE APPLESEED";
  cardHolderChecker(personName);
});
////till there
