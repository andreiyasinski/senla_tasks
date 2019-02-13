let frame = (array, symbol) => {
  let arr = array;
  let borderLength = getGreatestLength(arr);
  arr.push('');
  arr.unshift('');

  let tempArr = arr.map((elem, index, array) => {
    if(index == 0 || index == array.length - 1) return elem.padEnd(borderLength + 4, symbol);
    return symbol + ' ' + elem.padEnd(borderLength, ' ') + ' ' + symbol
  })
  return tempArr.join('\n');
}

let getGreatestLength = (arr) => {
  let newArr = arr.map((elem) => {
    return elem.length
  })
  newArr.sort((a,b) => b-a);

  return newArr[0];
}

console.log(frame(['Create', 'a', 'frame'], '+'));
