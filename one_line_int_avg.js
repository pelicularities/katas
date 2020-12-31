integerAverage=a=>a.reduce((x,y,i)=>(x+y)%(i+1))===0

console.log('The following should be true');
console.log(integerAverage([1, 2, 3]))

console.log('The following should be false');
console.log(integerAverage([1, 2, 2]))

console.log('The following should be true');
console.log(integerAverage([1, 9, 8, 2]))

console.log('The following should be false');
console.log(integerAverage([1, 2, 3, 4, 5, 6]))

console.log('The following should be true');
console.log(integerAverage([8, 1, 6, 5]))

console.log('The following should be true');
console.log(integerAverage([1, 1, 1, 1, 1, 1]))
