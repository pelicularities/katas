const replaceAt = (str, index, char) => {
  return str.substring(0, index) + char + str.substring(index + 1);
}

const wave = str => {
  let waves = [];
  const chars = str.split('');
  chars.forEach((char, index) => {
    if (str[index] !== ' ') {
      waves.push(replaceAt(str, index, char.toUpperCase()));
    }
  });
  return waves;
};
