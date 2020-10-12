const squareDigits = (num) => {
  const digits = num.toString().split('')
  let result = '';
  digits.forEach(digit => {
    result += Math.pow(digit, 2).toString();
  });
  return result = Number.parseInt(result);
};