const area = document.getElementById('area');
let move = 0;

area.addEventListener('click', clickBox)

function clickBox(e) {
  if (e.target.className = 'box') {
    move % 2 == 0
      ? e.target.innerHTML = '<img class="symbol" src="img/cross.svg" alt="cross">'
      : e.target.innerHTML = '<img class="symbol" src="img/circle.svg" alt="circle">';
    move++;
  }
}
