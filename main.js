const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#calculate-number");
const displayMessage = document.querySelector("#output-container");


const showMessage = (message) => {
  displayMessage.innerText = message;
};

const checkIsNumberLucky = (sumOfDate, numberToCheck) => {
  console.log(sumOfDate, numberToCheck);
  if (sumOfDate % numberToCheck === 0) {
    return showMessage(`${numberToCheck} is LUCKY  `);
  }
  showMessage(`${numberToCheck} is NOT LUCKY`);
};

const calculateSum = (date) => {
  let sum = 0;
  date = date.replaceAll("-", "");
  for (let digit of date) {
    sum = sum + Number(digit);
  }
  return sum;
};

checkButton.addEventListener("click", () => {
  const date = dateOfBirth.value;
  const numberToCheck = luckyNumber.value;
  if (date && numberToCheck) {
    const sumOfDate = calculateSum(date);
    checkIsNumberLucky(sumOfDate, numberToCheck);
  } else {
    showMessage("Please enter both the fields");
  }
});
