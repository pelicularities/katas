const getSecondLargest = nums => {
  // Complete the function
  nums.sort((a, b) => { return a - b; });
  console.log(nums);
  nums.reverse();
  console.log(nums);
  let currentLargest = nums.shift();
  console.log(currentLargest);
  console.log(nums);
  while (currentLargest === nums[0]) {
    currentLargest = nums.shift();
    console.log(currentLargest);
    console.log(nums);
  }
  return nums[0];
};

const arr = [1,2,3,4,5,6,7,8,9,10]
console.log(getSecondLargest(arr));