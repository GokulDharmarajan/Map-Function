// 7. Write a function that takes an array of numbers and returns an object where the keys are
// the numbers and the values are arrays of their prime factors. Use the Map object to
// accomplish this.

let prime = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let objs = {};
prime.map((e) => {
  if (!e.objs) {
    objs[e] = [];
  }
  for (i = 2; i <= e; i++) {
    if (e % i == 0) {
      objs[e].push(i);
    }
  }
});
console.log(objs);
