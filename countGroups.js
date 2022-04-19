// let matrix = [
//   [1, 0, 0, 0, 0],
//   [0, 1, 0, 0, 0],
//   [0, 0, 1, 1, 0],
//   [0, 0, 0, 1, 0],
//   [0, 0, 0, 0, 1],
// ];

let related = ["1100", "1110", "0110", "0001"];
let matrix = [];
for (let i = 0; i < related.length; i++) {
  matrix.push(related[i].split(""));
}
let matrix2 = [];
for (let i = 0; i < related.length; i++) {
  matrix2[i] = matrix[i].map((x) => parseInt(x));
}

console.log(matrix2);

let mirroredMatrix = [];
for (let i = 0; i < matrix.length; i++) {
  mirroredMatrix[i] = [];
}

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix.length; j++) {
    mirroredMatrix[i][j] = matrix[j][i];
  }
}

let finalMatrix = [];
for (let i = 0; i < matrix.length; i++) {
  finalMatrix[i] = [];
}
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix.length; j++) {
    finalMatrix[i][j] = matrix[i][j] || mirroredMatrix[i][j];
  }
}
console.log(finalMatrix);

function dfs(matrix, i, j, visited) {
  if (i < 0 || i >= matrix.length || j < 0 || j >= matrix[i].length) {
    return;
  }
  if (matrix[i][j] === 0) {
    return;
  }
  if (visited[i + "," + j]) {
    return;
  }
  visited[i + "," + j] = true;
  dfs(matrix, i + 1, j, visited);
  dfs(matrix, i - 1, j, visited);
  dfs(matrix, i, j + 1, visited);
  dfs(matrix, i, j - 1, visited);
}

function countGroups(matrix) {
  let groups = 0;
  let visited = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 1 && !visited[i + "," + j]) {
        groups++;
        dfs(matrix, i, j, visited);
      }
    }
  }
  return groups;
}

let result = countGroups(matrix2);
console.log(result);
