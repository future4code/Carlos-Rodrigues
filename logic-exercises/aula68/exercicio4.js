// a) Função para fazer a soma de matrizes:

const matrixSum = (matrixA, matrixB) => {
  const rowSize = matrixA.length;
  const columnSize = matrixA[0].length;
  const matrixSum = [];

  if (matrixA.length === matrixB.length) {
    for (let i = 0; i < rowSize; i++) {
      const rowSum = [];
      for (let j = 0; j < columnSize; j++) {
        rowSum.push(matrixA[i][j] + matrixB[i][j]);
      }
      matrixSum.push(rowSum);
    }
  }

  return matrixSum;
};

// matrixSum(
//   [
//     [1, 2],
//     [2, 1],
//   ],
//   [
//     [4, 5],
//     [5, 4],
//   ]
// );

// b) Função que retorna a transposta da matriz:

const transposeMatrix = (matrix) => {
  const transposedMatrix = [];
  const rowLength = matrix[0].length;

  for (let j = 0; j < rowLength; j++) {
    const newRow = [];
    for (let i = 0; i < matrix.length; i++) {
      newRow.push(matrix[i][j]);
    }
    transposedMatrix.push(newRow);
  }
  return transposedMatrix;
};

// transposeMatrix([
//   [1, 2, 3],
//   [3, 2, 1],
// ]);

// c) Função que retorna a multiplicação da matriz:

const multiplyMatrix = (matrixA, matrixB) => {
  if (matrixA[0].length !== matrixB.length) {
    return console.log(
      "O tamanho das matrizes não é compatível para multiplicação!"
    );
  }

  const result = [];
  for (let i = 0; i < matrixA.length; i++) {
    const rowResult = [];
    for (let j = 0; j < matrixB[0].length; j++) {
      let sumResult = 0;
      for (let k = 0; k < matrixA[0].length; k++) {
        sumResult += matrixA[i][k] * matrixB[k][j]; 
      }
      rowResult.push(sumResult);
    }

    result.push(rowResult);
  }
  return result;
};

multiplyMatrix(
  [
    [1, 1],
    [1, 1],
  ],
  [[1], [1]]
);
