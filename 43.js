function multiplyAll(arr) {
let product = 1;
for(let i = 0; i < arr.length; i++) {
  for(let j = 0; j < arr[i].length; j++) {
    product *=  arr[i][j] 
  }
}
  // Only change code above this line
  return product;
}

console.log(multiplyAll([[1], [2], [3]]));