const form = document.getElementById('form');
const input = document.getElementById('input');
const button = document.getElementById('button');

form.addEventListener('submit', () => {
  event.preventDefault();
  let str = '';
  str = Array.from({length: input.value}, (v, i) => i+1+' sheep...').join('');
  let newP = document.createElement('p');
  newP.innerHTML = str;
  document.body.appendChild(newP);
})
