const findOutlier = (integers) => {
  let odds = 0;  // count how many odds
  let evens = 0;  // count how many evens
  let outlier;

  // we only need to check the first three vars
  // to determine if the outlier is odd or even
  for (let i = 0; i < 3; i++) {
    if (integers[i] % 2 === 0) {
      evens++;
    } else {
      odds++;
    }
  }

  // enter odds condition if array is mostly odd
  // otherwise, enter else condition (evens)
  // absolute operation is required to check for
  // parity of negative numbers

  if (odds >= 2) {
    integers.forEach((integer) => {
      if (Math.abs(integer % 2) === 0 ) {
        outlier = integer;
      }
    });
  } else {
    integers.forEach((integer) => {
      if (Math.abs(integer % 2) === 1) {
        outlier = integer;
      }
    });
  }
  return outlier;
};