// 6. Write a function that takes an array of strings and returns a new array with only the
// unique strings. Use the Map object to accomplish this.

arr = ["gokul", "roshin", "selva", "gokul", "roshin", "selva"];
removeDupulicate = [];
arr.map((e) => {
  if (!removeDupulicate.includes(e)) {
    removeDupulicate.push(e);
  }
});
console.log(removeDupulicate);
