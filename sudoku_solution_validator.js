function validSolution(board) {
  const reference = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const columns = [];
  const squares = [];
  for (let i = 0; i < 9; i++) {
    columns.push([]);
    squares.push([]);
  }
  for (let rowIndex = 0; rowIndex < 9; rowIndex++) {
    const row = board[rowIndex];
    for (let refNumber = 1; refNumber <= 9; refNumber++) {
      const foundMatch = row.find((rowNumber) => refNumber === rowNumber);
      if (foundMatch === undefined) return false;
    }
    // if the row passes the above check,
    // we know that this row is kosher,
    // and we also know that there are no 0s in this row
    // let's prepare for the column and square checks
    row.forEach((number, colIndex) => {
      // populating the columns
      columns[colIndex].push(number);

      // populating the squares
      // 012  given coordinates x (colIndex), y (rowIndex) of the 2D array
      // 345  we can determine which square a number falls in
      // 678  by the formula 3 * Math.floor(y/3) + Math.floor(x/3)
      const squareIndex =
        3 * Math.floor(rowIndex / 3) + Math.floor(colIndex / 3);
      squares[squareIndex].push(number);
    });
  }
  // if we've reached this point, we know all the rows are kosher,
  // and we have arrays of 9 numbers representing the columns and squares
  // repeat the checks for the columns and squares!
  const arrays = columns.concat(squares);
  for (let arrayIndex = 0; arrayIndex < 17; arrayIndex++) {
    const array = arrays[arrayIndex];
    for (let refNumber = 1; refNumber <= 9; refNumber++) {
      const foundMatch = array.find((arrayNumber) => refNumber === arrayNumber);
      if (foundMatch === undefined) return false;
    }
  }
  return true;
}

const result = validSolution([
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [2, 3, 1, 5, 6, 4, 8, 9, 7],
  [3, 1, 2, 6, 4, 5, 9, 7, 8],
  [4, 5, 6, 7, 8, 9, 1, 2, 3],
  [5, 6, 4, 8, 9, 7, 2, 3, 1],
  [6, 4, 5, 9, 7, 8, 3, 1, 2],
  [7, 8, 9, 1, 2, 3, 4, 5, 6],
  [8, 9, 7, 2, 3, 1, 5, 6, 4],
  [9, 7, 8, 3, 1, 2, 6, 4, 5],
]);

console.log(result);
