const personName = document.querySelector(".cardholder-name");
const displayName = document.querySelector(".card-owner-name");
const personId = document.querySelector(".card-number-input");
const displayId = document.querySelector(".card-id-para");
//////exp date selecting
const month = document.querySelector(".MM");
const displayMonth = document.querySelector(".month");
const year = document.querySelector(".YY");
const displayYear = document.querySelector(".year");
const cvc = document.querySelector(".CVC");
const displayCVC = document.querySelector(".back-para");
const confirmBtn = document.querySelector(".confirm-btn");
const infoContainer = document.querySelector(".info-section");
const confirmContainer = document.querySelector(".complite-section");
const continueBtn = document.querySelector(".continue-btn");
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
////there is month event lisener
function validation(inputElement) {
  const numericRegex = /^[0-9]*$/; // Regular expression to match only numeric characters
  let warningMessage = "";

  // Remove any existing warning message
  const existingWarning = inputElement.nextElementSibling;
  if (existingWarning && existingWarning.classList.contains("warning")) {
    existingWarning.remove();
  }

  if (!inputElement.value) {
    inputElement.style.border = "1.5px solid red";
    warningMessage = "Can't be blank";
  } else if (!numericRegex.test(inputElement.value)) {
    inputElement.style.border = "1.5px solid red";
    warningMessage = "Only numeric";
  } else {
    inputElement.style.border = "1.5px solid green";
  }

  if (warningMessage) {
    const warningElement = document.createElement("div");
    warningElement.className = "warning";
    warningElement.style.cssText = `
      font-size: 12px;
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
      text-align: left;
      color: #ff5050;
      margin-top:8px;
    `;
    warningElement.textContent = warningMessage;
    inputElement.parentNode.insertBefore(
      warningElement,
      inputElement.nextSibling
    );
  }
}
month.addEventListener("input", (event) => {
  displayMonth.textContent = event.target.value || "00";
  validation(month);
});

//////წლის შემოწმება
year.addEventListener("input", (event) => {
  displayYear.textContent = event.target.value || "00";
  validation(year);
});

cvc.addEventListener("input", (event) => {
  displayCVC.textContent = event.target.value || "000";
  validation(cvc);
});

confirmBtn.addEventListener("click", () => {
  // Perform all synchronous validations
  let personIdValid = checkerOfId(personId);
  let monthValid = validation(month);
  let yearValid = validation(year);
  let cvcValid = validation(cvc);
  let personNameValid = cardHolderChecker(personName);

  // Check if all validations pass
  if (
    personId.value.length === 19 &&
    month.value &&
    year.value &&
    cvc.value &&
    personName.value
  ) {
    infoContainer.style.display = "none"; // Hide infoContainer
    confirmContainer.style.display = "flex"; // Show confirmContainer
  } else {
    alert(`გთხოვთ შეავსოთ ყველა სავალდებულო ველი ! `);
  }
});
continueBtn.addEventListener("click", () => {
  infoContainer.style.display = "flex"; // Hide infoContainer
  confirmContainer.style.display = "none"; // Show confirmContainer
  personId.value = "";
  personId.style.border = "none";
  displayId.textContent = "0000 0000 0000 0000";
  month.value = "";
  month.style.border = "none";
  displayMonth.textContent = "00";
  cvc.value = "";
  cvc.style.border = "none";
  displayCVC.textContent = "000";
  year.value = "";
  year.style.border = "none";
  displayYear.textContent = "00";
  personName.value = "";
  personName.style.border = "none";
  personName.textContent = "JANE APPLESEED";
});
