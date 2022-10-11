// 여기에 코드를 작성해주세요
let container = document.querySelector('#container');
let button = document.querySelector('button');
let span = document.querySelector('span');

let idx = 0;

button.addEventListener('click', function () {
   idx += 1;
   span.innerHTML = idx;
});