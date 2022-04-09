let matrix = [
  [".", ".", ".", ".", "."],
  [".", "H", ".", "H", "."],
  [".", "H", "H", "H", "."],
  [".", "H", ".", "H", "."],
  [".", ".", ".", ".", "H"],
];
console.log(matrix);

let currentColor = matrix[y][x];
let toPaint = [];

//define coordinates to start painting and new color
x = 2;
y = 2;
newColor = "R";

const isNeighbour = (x, y) => {
  rightEdge = matrix.length === x + 1;
  leftEdge = x === 0;
  bottomEdge = matrix[0].length === y + 1;
  topEdge = y === 0;

  if (
    (!bottomEdge && matrix[x][y + 1] === currentColor) ||
    (!topEdge && matrix[x][y - 1] === currentColor) ||
    (!rightEdge && matrix[x + 1][y] === currentColor) ||
    (!leftEdge && matrix[x - 1][y] === currentColor)
  ) {
    return true;
  } else {
    return false;
  }
};

//first, find all pixels equal the color of the pixel to paint
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    if (matrix[i][j] === currentColor && isNeighbour(i, j)) {
      toPaint.push([i, j]);
    }
  }
}

//then, paint all pixels equal the color of the pixel to paint
for (let i = 0; i < toPaint.length; i++) {
  matrix[toPaint[i][0]][toPaint[i][1]] = newColor;
}

console.log(matrix);
