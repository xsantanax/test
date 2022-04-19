//process logs
// let logs = ["88 99 200", "88 99 300", "99 32 100", "12 12 15"];
let logs = ["99 88 200", "99 88 300", "99 32 100", "12 12 15"];
let threshold = 2;

function processLogs(logs, threshold) {
  let matrix = [];
  for (let i = 0; i < logs.length; i++) {
    matrix.push(logs[i].split(" "));
  }
  console.log(matrix);

  //build set with all ids
  let mySet = new Set();
  for (let i = 0; i < matrix.length; i++) {
    mySet.add(matrix[i][0]);
    mySet.add(matrix[i][1]);
  }

  //order ids in ascending order
  const sortedIds = Array.from(mySet).sort((a, b) => a - b);

  //build hashmap to store single ids
  let hashMap = {};
  for (let i = 0; i < matrix.length; i++) {
    let id1 = matrix[i][0];
    let id2 = matrix[i][1];
    if (hashMap[id1]) {
      hashMap[id1] = hashMap[id1] + 1;
    } else {
      hashMap[id1] = 1;
    }
    if (id1 != id2) {
      if (hashMap[id2]) {
        hashMap[id2] = hashMap[id2] + 1;
      } else {
        hashMap[id2] = 1;
      }
    }
  }

  //run through all set values and check if they are in hashmap with threshold
  let result = [];

  sortedIds.map((id) => {
    if (hashMap[id] >= threshold) {
      result.push(id);
    }
  });

  return result;
}

processLogs(logs, threshold);
