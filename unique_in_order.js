function uniqueInOrder(iterable) {
  // convert iterable into an array, if it is not already one
  const elements = [...iterable];
  for (let i = 0; i < elements.length - 1; i++) {
    // check if element is equal to the one following it
    // if it is, splice the following element out of the elements array
    while (elements[i] === elements[i+1]) {
      elements.splice(i+1, 1);
    }
  }
  return elements
}
