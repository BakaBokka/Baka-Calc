class Calculator {
  constructor(previous, current) {
    this.previous = previous;
    this.current = current;
    this.clear();
  }

  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }

  delete = () => {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  };

  appendNumber = (number) => {
    if (number === "." && this.currentOperand.includes(".")) return;
    this.currentOperand = this.currentOperand.toString() + number.toString();
  };

  minus = () => {
    if (this.currentOperand === "") return;
    this.currentOperand = String(+this.currentOperand * -1);
  };

  chooseOperation = (operation) => {
    if (this.currentOperand === "") return;
    if (this.previousOperand !== "") {
      this.compute();
    }

    this.operation = operation;
    this.previousOperand = this.currentOperand;
    if (this.operation != "√" && this.operation != "x²") {
      this.currentOperand = "";
    } else {
      this.compute();
    }
  };

  compute = () => {
    let computation;
    const prev = parseFloat(this.previousOperand);
    const curr = parseFloat(this.currentOperand);
    if (isNaN(prev) || isNaN(curr)) return;

    switch (this.operation) {
      case "+":
        const sum = prev + curr;
        if (sum > 0 && sum < 1) {
          computation = sum.toFixed(2);
        } else computation = prev + curr;

        break;
      case "-":
        computation = prev - curr;
        break;
      case "*":
        computation = prev * curr;
        break;
      case "÷":
        computation = prev / curr;
        break;
      case "√":
        computation = Math.sqrt(curr);

        break;
      case "x²":
        computation = Math.pow(curr, 2);
        break;
      default:
        return;
    }
    this.currentOperand = computation;
    if (this.operation != "√" && this.operation != "x²") {
      this.operation = undefined;
      this.previousOperand = "";
    }
  };

  getDisplayNumber = (number) => {
    const strNumber = number.toString();
    const integerDigits = parseFloat(strNumber.split(".")[0]);
    const decimalDigits = strNumber.split(".")[1];

    let intDisplay;
    if (isNaN(integerDigits)) {
      intDisplay = "";
    } else {
      intDisplay = integerDigits.toLocaleString("en", {
        maximumFractionDigits: 0,
      });
    }
    if (decimalDigits != null) {
      return `${intDisplay}.${decimalDigits}`;
    } else {
      return intDisplay;
    }
  };

  updateDisplay = () => {
    this.current.innerText = this.getDisplayNumber(this.currentOperand);
    if (this.operation != null) {
      this.previous.innerText = `${this.getDisplayNumber(
        this.previousOperand
      )} ${this.operation} `;
    } else this.previous.innerText = "";
  };
}