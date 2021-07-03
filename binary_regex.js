function createArray(n) {
  const array = [];
  for (let i = 1; i <= n; i++) {
    array.push(i);
  }
  return array
}

function convertBinary(num) {
  return num.toString(2);
}

function isDivisibleBy3(num) {
  return num % 3 === 0;
}

const array = createArray(42);
array.forEach((num, idx) => {
  console.log(`${idx+1} - ${isDivisibleBy3(num) ? 'x' : ' '} - ${convertBinary(num)} `);
});
