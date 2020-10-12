const diamond = n => {
  if ((n % 2 === 0) || (n < 0)) {
    return null;
  }
  let diam = '';
  const midpoint = (n - 1) / 2;
  for (let i = 0; i < n; i++) {
    let length;
    if (i <= midpoint) {
      length = 2 * i + 1;
    } else {
      length = 2 * (n - i) - 1;
    }
    if (i !== midpoint) {
      // left pad string with correct number of spaces
      for (let j = Math.abs(midpoint - i); j > 0; j--) {
        diam += ' ';
      }
    }
    for (let k = 0; k < length; k++) {
      diam += '*';
    }
    diam += '\n';
  }
  return diam;
}

console.log(diamond(5));