const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const isPalindrome = (word) => {
  const wordArray = word.split("");
  const reverseWordArray = wordArray.reverse();
  const reverseWord = reverseWordArray.join("");
  if (word === reverseWord) {
    console.log("It is a palindrome");
    return true;
  } else {
    console.log("It is not a palindrome");
    return false;
  }
};

readline.question("Enter possible palindrome: ", (name) => {
  isPalindrome(name);
  readline.close();
});
