//Общие переменные
const previous = document.querySelector(".calc__previous");
const current = document.querySelector(".calc__current");
const allClearButton = document.querySelector(".calc__button_type_clear");
const deleteButton = document.querySelector(".calc__button_type_delete");
const equalsButton = document.querySelector(".calc__button_type_equals");
const plusMinus = document.querySelector(".calc__button_type_plus-minus");
const operations = document.querySelectorAll(".calc__button_type_operation");
const numbers = document.querySelectorAll(".calc__button_type_number");

//Переменная класса
const calculator = new Calculator(previous, current);

//Функции
numbers.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});

operations.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
  });
});

//Слушатели
equalsButton.addEventListener("click", () => {
  calculator.compute();
  calculator.updateDisplay();
});

allClearButton.addEventListener("click", () => {
  calculator.clear();
  calculator.updateDisplay();
});

deleteButton.addEventListener("click", () => {
  calculator.delete();
  calculator.updateDisplay();
});

plusMinus.addEventListener("click", () => {
  calculator.minus();
  calculator.updateDisplay();
});

document.addEventListener("keydown", (e) => {
  switch (e.code) {
    //Numder keys
    case "Digit1":
      calculator.appendNumber(1);
      break;
    case "Digit2":
      calculator.appendNumber(2);
      break;
    case "Digit3":
      calculator.appendNumber(4);
      break;
    case "Digit4":
      calculator.appendNumber(4);
      break;
    case "Digit5":
      calculator.appendNumber(5);
      break;
    case "Digit6":
      calculator.appendNumber(6);
      break;
    case "Digit7":
      calculator.appendNumber(7);
      break;
    case "Digit8":
      calculator.appendNumber(8);
      break;
    case "Digit9":
      calculator.appendNumber(9);
      break;
    case "Digit0":
      calculator.appendNumber(0);
      break;

    case "Period":
      calculator.appendNumber(".");
      break;

    //Operation keys
    case "Backspace":
      calculator.delete();
      break;

    case "Delete":
      calculator.clear();
      break;
    case "Enter":
      calculator.compute();
      calculator.updateDisplay();
      break;
    case "Equal":
      calculator.compute();
      calculator.updateDisplay();
      break;
    case "Minus":
      calculator.chooseOperation("-");
      break;
    case "Slash":
      calculator.chooseOperation("÷");
      break;

    //Numpud keys
    case "Numpad1":
      calculator.appendNumber(1);
      break;
    case "Numpad2":
      calculator.appendNumber(2);
      break;
    case "Numpad3":
      calculator.appendNumber(4);
      break;
    case "Numpad4":
      calculator.appendNumber(4);
      break;
    case "Numpad5":
      calculator.appendNumber(5);
      break;
    case "Numpad6":
      calculator.appendNumber(6);
      break;
    case "Numpad7":
      calculator.appendNumber(7);
      break;
    case "Numpad8":
      calculator.appendNumber(8);
      break;
    case "Numpad9":
      calculator.appendNumber(9);
      break;
    case "Numpad0":
      calculator.appendNumber(0);
      break;
    case "NumpadDecimal":
      calculator.appendNumber(".");
      break;

    //Numpud Operation keys
    case "NumpadEnter":
      calculator.compute();
      calculator.updateDisplay();
      break;

    case "NumpadSubtract":
      calculator.chooseOperation("-");
      break;
    case "NumpadDivide":
      calculator.chooseOperation("÷");
      break;
    case "NumpadMultiply":
      calculator.chooseOperation("*");
      break;
    case "NumpadAdd":
      calculator.chooseOperation("+");
      break;

    default:
      return;
  }
  calculator.updateDisplay();
});
