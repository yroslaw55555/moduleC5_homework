/*jshint esversion: 6 */
const btnDec = document.querySelector('.j-btn-request');
const pastMe = document.querySelector('.PastMe');

const numPage = document.querySelector('.input1');
const limit = document.querySelector('.input2');
//const url = `https://picsum.photos/`;
const myJSON = localStorage.getItem('myJSON');

function locSror(JESOn){
     localStorage.setItem('myJSON', JESOn);
}


function GoRequest (urlgu) {
  //console.log('urlg = ',urlgu);
  return fetch(urlgu)
    .then((response) => {
      const result = response.json();
      //console.log('result', result);
      return result;
    })
     .then((data) => {
      // Объект результата в формате JSON
     // console.log(data);
      return data
    })
    .catch(() => {
      console.log('error');
      if (myJSON) {
        return localStorage.getItem("myJSON");
      }
    });
}

function MyMass (Massage){
     let sandin = document.createElement("section");
     sandin.style.position = "relative";
     sandin.style.textAlign = "left";
     sandin.innerHTML = Massage;
     pastMe.appendChild(sandin);
};



function regulations (value, value2){
  if (1 <= value && value <= 10 && 1 <= value2 && value2 <= 10){
      return true;
  } else if (1 <= value && value <= 10){
      MyMass('Лимит вне диапазона от 1 до 10');
      return false;
  } else if (1 <= value2 && value2 <= 10){
      MyMass('Номер страницы вне диапазона от 1 до 10');
      return false;
  } else {
      MyMass('Номер страницы и лимит вне диапазона от 1 до 10');
      return false;
  }
}

btnDec.addEventListener('click', async () => {
  const numPageVal = parseInt(numPage.value,10);
  const limitVal = parseInt(limit.value,10);
  localStorage.removeItem("myJSON"); 
  while (pastMe.firstChild) {
       pastMe.removeChild(pastMe.firstChild);
   }
  //console.log('test',numPageVal);

  if (regulations(numPageVal, limitVal)) {
      //console.log('test',regulations(numPageVal, limitVal));
      const url = `https://picsum.photos/v2/list?page=${numPageVal}&limit=${limitVal}`;
      //console.log('test2',url);
      const displayResult = await GoRequest(url);
      //console.log('test3',displayResult);
      locSror(JSON.stringify(displayResult));
     // displayResult.forEach(item => {
      //  console.log(item);
     //   MyMass(`<img src="${item.download_url}"/>`);
      //});
      
      for (let picture of displayResult) {
        //console.log(picture);
        //localStorage.setItem('myJSON', picture);
        MyMass(`<img src="${picture.download_url}"/>`);
      }
    
  }
  else {
    return false
  }
});


  if (myJSON) {
    const StrorJSON = localStorage.getItem("myJSON");
    //console.log(jaja)
    for (let picture of JSON.parse(StrorJSON)) {
        //console.log(picture);
        MyMass(`<img src="${picture.download_url}"/>`);
     }
  } 
