const binaryLength = (num) => {
  // given num, returns number of binary digits
  // needed to represent num

  let power = 1;
  while (2 ** power < num) {
    power++;
  }
  return power;
};

const generatePascalSequence = (
  num,
  array = num === 1 ? [1] : generatePascalSequence(num - 1)
) => {
  // returns an array of numbers from
  // Pascal's triangle of length num
  const pascalSequence = Array(num);
  pascalSequence[0] = 1;
  pascalSequence[num - 1] = 1;
  for (let i = 1; i < num - 1; i++) {
    pascalSequence[i] = array[i - 1] + array[i];
  }
  return pascalSequence;
};

const binaryLengthOnes = (num) => {
  // given num of binary digits,
  // returns the number of ones in all numbers
  // with that number of binary digits
  const pascalSequence = generatePascalSequence(num);
  return pascalSequence.reduce((acc, val, index) => {
    return acc + val * (index + 1);
  }, 0);
};

const countOnesSingle = (num) => {
  const numBinaryLength = binaryLength(num);
  let ones = binaryLengthOnes(numBinaryLength - 1);
  // all ones from numbers smaller than 2 ** numBinaryLength-1 are now accounted for
  const startingCount = 2 ** (numBinaryLength - 1);
  for (let i = startingCount; i <= num; i++) {
    let binary = i.toString(2);
    binary = binary.replace(/0/g, "");
    ones += binary.length;
  }
  return ones;
};

const countOnes = (left, right) => {
  const digitsLeft = binaryLength(left);
  const digitsRight = binaryLength(right);
  if (Math.abs(digitsLeft - digitsRight) > 2) {
    // have to figure out how to do this at some point
  }
};

console.log(countOnesSingle(7973));
console.log(countOnesSingle(891815));
