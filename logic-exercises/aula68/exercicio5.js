const countNegatives = (matrix) => {
  let counter = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] < 0) {
        counter++;
      }
    }
  }
  return counter;
};

countNegatives([
  [-3, -2, -1, 1],
  [-2, 2, 3, 4],
  [-4, -5, -7, 8],
]);
