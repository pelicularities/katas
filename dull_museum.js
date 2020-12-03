function removeSmallest(numbers) {
  // :( I have a lot to learn
  let shallowCopy = numbers.map((x) => x);
  let shallowCopy2 = numbers.map((x) => x);
  const sorted = shallowCopy.sort((a, b) => a - b);
  const smallest = sorted[0];
  const smallestIndex = numbers.indexOf(smallest);
  shallowCopy2.splice(smallestIndex, 1);
  return shallowCopy2;
}

console.log(removeSmallest([1, 2, 3, 4, 5]));
console.log(removeSmallest([5, 3, 2, 1, 4]));
console.log(removeSmallest([2, 2, 1, 2, 1]));
console.log(removeSmallest([]));
