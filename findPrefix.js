/*
 * Complete the 'findCompletePrefixes' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY names
 *  2. STRING_ARRAY query
 */

function findCompletePrefixes(names, query) {
  // Write your code here
  let result = [];
  for (let i = 0; i < query.length; i++) {
    let prefix = query[i];
    let count = 0;
    for (let j = 0; j < names.length; j++) {
      if (names[j].startsWith(prefix)) {
        count++;
      }
    }
    result.push(count - 1);
  }
  return result;
}
