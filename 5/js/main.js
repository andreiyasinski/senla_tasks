let getLowerestIndex = (array, value) => {
  let arr = array;
  arr.push(value)
  arr.sort((a, b) => a - b);
  return arr.indexOf(value);
}

console.log(getLowerestIndex([1,2,3,4], 1.5));
