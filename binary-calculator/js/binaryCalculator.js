const btnClr = document.getElementById('btnClr');
const btnEql = document.getElementById('btnEql');

const res = document.getElementById('res');

// assume all expressions will be valid
// no need for error handling due to invalid inputs
// only two operands, one operator maximum

// for buttons 0, 1, Sum, Sub, Mul and Div (.updateDisplay)
// when clicked, add button's innerHTML to res
const updateDisplay = document.querySelectorAll('.updateDisplay');

updateDisplay.forEach((button) => {
  button.addEventListener('click', () => {
    res.insertAdjacentHTML('beforeend', button.innerHTML);
  });
});

// when C button is clicked, clear result display
btnClr.addEventListener('click', () => {
  res.innerHTML = '';
});

// when = button is clicked, evaluate result
btnEql.addEventListener('click', () => {
  const expression = res.innerHTML.split(/([+\-*/])/);

  // assuming only valid inputs
  // expression[0] is operand 1
  // expression[1] is operator
  // expression[2] is operand 2

  // convert both operands to base 10
  const operand1 = Number.parseInt(expression[0], 2);
  const operand2 = Number.parseInt(expression[2], 2);

  // calculate the result based on the operator
  let result;

  switch (expression[1]) {
    case '+':
      result = operand1 + operand2;
      break;
    case '-':
      result = operand1 - operand2;
      break;
    case '*':
      result = operand1 * operand2;
      break;
    case '/':
      // integer division only
      result = Math.floor(operand1 / operand2);
      break;
  }

  // display the result
  res.innerHTML = result.toString(2);
});