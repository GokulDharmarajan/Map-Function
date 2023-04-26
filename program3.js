// 3. Write a function that takes an array of words and returns an object where the keys are
// the words and the values are the number of times each word appears in the array. Use
// the Map object to accomplish this.

let rename = [
  "Gokul",
  "Ragul",
  "Muthu",
  "Roshin",
  "Gokul",
  "Gokul",
  "selva",
  "Roshin",
];
var obj = {};
rename.map((e) => {
  if (e in obj) {
    return (obj[e] += 1);
  } else {
    return (obj[e] = 1);
  }
});
console.log(obj);
