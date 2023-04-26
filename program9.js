// 9. Write a function that takes an array of strings and returns an object where the keys are
// the strings sorted alphabetically and the values are arrays of the original strings that are
// anagrams of each other. Use the Map object to accomplish this.

let names = ["gokul", "selva"];
temp = {};
names.map((e) => {
  temp1 = e.split("");
  temp2 = temp1.sort();
  letters = temp2.join("");
  temp[letters] = e;
});
console.log(temp);
