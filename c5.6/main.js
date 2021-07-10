/*jshint esversion: 6 */
const btnDec = document.querySelector('.j-btn-request');
const pastMe = document.querySelector('.PastMe');

const value1 = document.querySelector('.input1');
const value2 = document.querySelector('.input2');
//const url = `https://picsum.photos/`;


function GoRequest (urlgu) {
  return fetch(urlgu)
    .then((response) => {
      //console.log('response', response);
      return response.url;
    })
    .catch(() => {
      console.log('error');
    });
}


btnDec.addEventListener('click', async () => {
  const valInp1 = parseInt(value1.value,10);
  const valInp2 = parseInt(value2.value,10);
  console.log('test',valInp1);
  if (100 <= valInp1 && valInp1 <= 300 && 100 <= valInp2 && valInp2 <= 300) {
      const url = `https://picsum.photos/${valInp1}/${valInp2}`;
      console.log('test2',url);
      const displayResult = await GoRequest(url);
    pastMe.innerHTML = `<div class="PastMe"><img src="${displayResult}"/></div>`;
  }
  else {
    pastMe.innerHTML = '<div class="PastMe">Одно из чисел вне диапазона от 100 до 300</div>';
  }
});