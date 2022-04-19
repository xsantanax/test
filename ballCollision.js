/*
 * Complete the 'findRemainingBalls' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY direction
 *  2. INTEGER_ARRAY strength
 */

let direction = [1, -1, 1];
let strength = [5, 3, 1];

function findRemainingBalls(direction, strength) {
  // Write your code here
  let result = [];
  for (let i = 0; i < direction.length; i++) {
    let ball = {
      direction: direction[i],
      strength: strength[i],
    };
    result.push(ball);
  }
  result.sort((a, b) => {
    if (a.direction == b.direction) {
      return a.strength - b.strength;
    } else {
      return a.direction - b.direction;
    }
  });
  let count = 0;
  let sum = 0;
  for (let i = 0; i < result.length; i++) {
    if (result[i].direction == 1) {
      count++;
      sum += result[i].strength;
    } else {
      count--;
      sum -= result[i].strength;
    }
    if (sum < 0) {
      sum = 0;
    }
    result[i].remaining = sum;
  }
  console.log("result: ", result);
  return result.map((x) => x.remaining);
}

console.log(findRemainingBalls(direction, strength));
