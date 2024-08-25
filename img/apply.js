const loop = document.querySelector('.loop');
loop.addEventListener('click',()=>{
  loop.style.color = 'yellow'
  document.body.style.background = 'green'
})

const inputNode=document.querySelector('.js-input');
const button=document.querySelector('.js-button');
const output=document.querySelector('.out-put');

button.addEventListener('click',function () {
    const answer = inputNode.value;
    let ouput = "Ответ верный!";

    if (answer !== '2024') {
        ouput='Ответ неправильный!'
    }
    output.innerHTML=ouput;
})

const input=document.querySelector('.input');
const buttonNode=document.querySelector('.button');
const outputput=document.querySelector('.put');

buttonNode.addEventListener('click',function () {
    const apple = input.value;
    let oupute = "Ответ верый!";

    if (apple !== '12') {
        oupute='Ответ неправильный!'
    }
    outputput.innerHTML=oupute;
})



