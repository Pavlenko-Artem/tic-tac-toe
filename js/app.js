const boxes = document.querySelectorAll('.box')
let move = 0;
let result = '';

boxes.forEach((item) => {
  item.addEventListener('click', clickBox, { once: true });
})


// area.addEventListener('click', clickBox)

function clickBox(e) {
  move % 2 == 0
    ? e.target.innerHTML = '<img class="symbol" src="img/cross.svg" alt="cross">'
    : e.target.innerHTML = '<img class="symbol" src="img/circle.svg" alt="circle">';
  move++;
  check()
}

const check = () => {
  const arr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [3, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  for (let i = 0; i < arr.length; i++) {
    if (
      boxes[arr[i][0]].innerHTML == '<img class="symbol" src="img/cross.svg" alt="cross">' &&
      boxes[arr[i][1]].innerHTML == '<img class="symbol" src="img/cross.svg" alt="cross">' &&
      boxes[arr[i][2]].innerHTML == '<img class="symbol" src="img/cross.svg" alt="cross">'
    ) {
      result = 'крестики';
      prepareResult(result);
    } else if (
      boxes[arr[i][0]].innerHTML == '<img class="symbol" src="img/circle.svg" alt="circle">' &&
      boxes[arr[i][1]].innerHTML == '<img class="symbol" src="img/circle.svg" alt="circle">' &&
      boxes[arr[i][2]].innerHTML == '<img class="symbol" src="img/circle.svg" alt="circle">'
    ) {
      result = 'нолики';
      prepareResult(result);
    }
  }
}

const prepareResult = (result) => {
  console.log(result);
}
