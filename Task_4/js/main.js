const getDimensionalArray = (array, lgth) => {
  let arr = array;
  let result = [];
  while (arr.length) {
    result.push(arr.splice(0, lgth));
  }
  return result
}

console.log(getDimensionalArray([0, 1, 2, 3, 4, 5], 3));
