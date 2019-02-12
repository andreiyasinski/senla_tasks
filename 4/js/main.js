let getDimensionalArray = (arr, lgth) => {
  if(lgth == 1) return arr;
  let array = arr;

  let result = [];

  while (array.length) {
    result.push(array.splice(0, lgth));
  }

  return result

}

console.log(getDimensionalArray([0, 1, 2, 3, 4, 5], 3));
