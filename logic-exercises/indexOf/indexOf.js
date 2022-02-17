const indexOf = (source, query) => {
  let index = -1;

  for (let i = 0; i < source.length; i++) {
    if (source[i] === query) {
      index = i;
      return index;
    }
  }
  return index;
};

indexOf([1, 2, 3, 4, 6], 6);

