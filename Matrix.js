var rotateMatrix = function(matrix) {
    flipMajorDiagonal(matrix);
    reverseEachRow(matrix);
    return matrix;
  }
  
  var flipMajorDiagonal = function(matrix) {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = i; j < matrix[0].length; j++) {
        let temp = matrix[i][j];
        matrix[i][j] = matrix[j][i];
        matrix[j][i] = temp;
      }
    }
    return matrix;
  }
  
  var flipMinorDiagonal = function(matrix) {
      rotateMatrix(matrix);
      matrix.reverse();
      return matrix;
  }
  
  var reverseEachRow = function(matrix) {
      for (let i = 0; i < matrix.length; i++) {
          matrix[i].reverse();
      }
      return matrix;
  }
  
  var matrixInput = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]
  
  // var majorFlip = flipMajorDiagonal(matrixInput); // [[1, 4, 7], [2, 5, 8], [3, 6, 9]]
  // var rotated = rotateMatrix(matrixInput); // [[7, 4, 1], [8, 5, 2], [9, 6, 3]]
  var minorFlip = flipMinorDiagonal(matrixInput); // [[9, 6, 3], [8, 5, 2], [7, 4, 1]]