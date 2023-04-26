// 2. Write a function that takes an array of objects with a name property and returns a new
// array of strings with the name of each object capitalized. Use the Map object to
// accomplish this.

let arr = [
  { Name: "Gokul" },
  { Name: "kishore" },
  { Name: "kamalesh" },
  { Name: "Roshin" },
  { Name: "Priya" },
  { Name: "Dhiya Dharshni" },
];
let demo = arr.map((e) => {
  console.log(e.Name.toUpperCase());
});
