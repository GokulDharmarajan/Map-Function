// 8. Write a function that takes an array of objects with a name and age property and returns
// an object where the keys are the age and the values are arrays of objects with that age.
// Use the Map object to accomplish this.

let students = [
  {
    Name: "Gokul",
    Age: 21,
  },
  {
    Name: "Selva",
    Age: 22,
  },
  {
    Name: "Roshin",
    Age: 22,
  },

  {
    Name: "Kishore",
    Age: 23,
  },
  {
    Name: "singaram",
    Age: 42,
  },
  {
    Name: "Ajith",
    Age: 23,
  },
];

temp = {};
students.map((e) => {
  if (!(e.Age in temp)) {
    temp[e.Age] = [];
  }
  temp[e.Age].push(e);
});
console.log(temp);
