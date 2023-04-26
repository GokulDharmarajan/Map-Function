// 5. Write a function that takes an array of objects with a category property and returns an
// object where the keys are the categories, and the values are arrays of objects with that
// category. Use

bike = [
  { Name: "KTM", Price: 2 },
  { Name: "R15v3", Price: 3 },
  { Name: "DUKE", Price: 2 },
  { Name: "ROYAL ENFILED", Price: 3 },
  { Name: "KAWASAKI", Price: 4 },
];
obj = {};
bike.map((e) => {
  if (!(e.Price in obj)) {
    obj[e.Price] = [];
  }
  obj[e.Price].push(e);
});
console.log(obj);
