let curNumber = ""; 
let firstNumber = ""; 
let operator = ""; 


function appendNumber(number) {
  curNumber += number;
  updateDisplay();
}

function setOperator(op) {
  if (curNumber === "") return; 
  if (firstNumber !== "") {
    calculateResult(); 
  }
  operator = op;
  firstNumber = curNumber;
  curNumber = "";
}
  
function calculateResult() {
  let result;
  const prev = parseFloat(firstNumber);
  const curr = parseFloat(curNumber);
  if (isNaN(prev) || isNaN(curr)) return;

  switch(operator) {
    case '+':
      result = prev + curr;
      break;
    case '-':
      result = prev - curr;
      break;
    case '*':
      result = prev * curr;
      break;
    case '/':
      if (curr === 0) {
        alert("Cannot divide by zero!");
        clearDisplay();
        return;
      }
      result = prev / curr;
      break;
    default:
      return;
  }

  curNumber = result.toString();
  operator = "";
  firstNumber = "";
  updateDisplay();
}

function clearDisplay() {
  curNumber = "";
  firstNumber = "";
  operator = "";
  updateDisplay();
}

function updateDisplay() {
  document.getElementById("display").value = curNumber;
}
