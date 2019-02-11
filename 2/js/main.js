const form = document.getElementById('form');
const input = document.getElementById('input');
const button = document.getElementById('button');
const container = document.getElementById('container');

form.addEventListener('submit', () => {
  event.preventDefault();
  container.innerHTML = '';
  if(input.value < 0 || input.value > 30) return false;

  for (let i = 1; i <= input.value; i++) {
    let block = document.createElement('div');
    block.style.display = 'flex'

    for (let j = 1; j <= input.value; j++) {
      block.innerHTML += `<div class='elem' style = 'background: ${generateСolor()}'></div>`
    }
    container.appendChild(block);
  }
})

const generateСolor = () => {
    var r=Math.floor(Math.random() * (256));
    var g=Math.floor(Math.random() * (256));
    var b=Math.floor(Math.random() * (256));
    var color='#' + r.toString(16) + g.toString(16) + b.toString(16);
    return color;
}
