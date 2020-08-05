let input = "Hi, Human!";
const vowels = ["A", "E", "I", "O", "U"];
let resultArray = [];

for (letter of input.toUpperCase()) {
  if(vowels.includes(letter)) {
    resultArray.push(letter);
    if(letter === "E" || letter === "U") {
      resultArray.push(letter);
    }
  }
}

console.log(`${resultArray.join("")}!`)