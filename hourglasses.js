let arr = Array(6);

arr[0] = [1, 1, 1, 0, 0, 0];
arr[1] = [0, 1, 0, 0, 0, 0];
arr[2] = [1, 1, 1, 0, 0, 0];
arr[3] = [0, 0, 2, 4, 4, 0];
arr[4] = [0, 0, 0, 2, 0, 0];
arr[5] = [0, 0, 1, 2, 4, 0];

let maxSum = -64; // lowest possible value is -63 based on constraints

// we don't need to loop from 0 to 6
// only 0 to 4, as that's where the valid hourglasses will be
for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
        console.log(`Currently checking hourglass at ${i}, ${j}`);
        let sum = arr[i][j];
        console.log(`Sum is now ${sum}`);
        sum += arr[i][j+1];
        console.log(`Sum is now ${sum}`);
        sum += arr[i][j+2];
        console.log(`Sum is now ${sum}`);
        sum += arr[i+1][j+1];
        console.log(`Sum is now ${sum}`);
        sum += arr[i+2][j];
        console.log(`Sum is now ${sum}`);
        sum += arr[i+2][j+1];
        console.log(`Sum is now ${sum}`);
        sum += arr[i+2][j+2];
        console.log(`Sum is now ${sum}`);

    if (sum > maxSum) {
        console.log(`Sum ${sum} is larger than maxSum ${maxSum}`);
        maxSum = sum;
        console.log(`maxSum is now ${maxSum}`);
    }
}
}
console.log(maxSum);