const form = document.getElementById('form');
const input = document.getElementById('input');
const button = document.getElementById('button');
const container = document.getElementById('container');

form.addEventListener('submit', () => {
  event.preventDefault();
  container.innerHTML = '';

  let arr = input.value.trim().split(' ')
  let newArr = arr.map((elem) => {
    return elem.length
  })

  newArr.sort((a,b) => a-b)

  let result = document.createElement('p');
  result.innerHTML = `The shortest length of the word: ${newArr[0]}`
  container.appendChild(result);
})
