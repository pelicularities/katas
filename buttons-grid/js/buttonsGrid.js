const btn5 = document.getElementById('btn5');

btn5.addEventListener('click', () => {
  // extract innerHTMLs in this order into an array: 1, 2, 3, 6, 9, 8, 7, 4
  const btnOrder = [1, 2, 3, 6, 9, 8, 7, 4]
  let btnValues = [];
  btnOrder.forEach((btnNumber) => {
    const btn = document.getElementById(`btn${btnNumber}`);
    btnValues.push(btn.innerHTML);
  });

  // pop value of 4 off the back and unshift it to the front
  const lastValue = btnValues.pop();
  btnValues.unshift(lastValue);

  // place values from array back into innerHTMLs in same order
  btnOrder.forEach((btnNumber) => {
    const btn = document.getElementById(`btn${btnNumber}`);
    btn.innerHTML = btnValues.shift();
  });
});
