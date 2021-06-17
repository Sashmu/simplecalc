const btn = document.getElementById('calculate');
const result = document.getElementById('result');
const clear= document.getElementById('clear');
result.style.fontSize = '50px';

btn.addEventListener('click', function () {
const firstValue = parseInt(document.getElementById('firstnumber').value);
const secondValue = parseInt(document.getElementById('secondnumber').value);
const operator = document.getElementById('operator').value;
   if (operator === '+')
   {
      result.innerText = firstValue + secondValue;
     
    
   } else if (operator === '-') {
      result.innerText = firstValue - secondValue;
 
   } else if (operator === '*') {
      result.innerText = firstValue * secondValue;
     
   } else if (operator === '/') {
      if (secondValue == 0) {
         result.innerText="error" 
      }else
      result.innerText = firstValue / secondValue;
     
   }
   
})
clear.addEventListener('click', function () {
  
   const firstValue = document.getElementById('firstnumber').value;
   const secondValue = document.getElementById('secondnumber').value;
   result.innerText = ''
   firstValue.innerText = ''
   secondValue.innerText = ''
})

// let str = "Mad$am";
// let arrayStr = str.split('');
// let result = arrayStr.filter(word => word.charCodeAt() >= 97 && word.charCodeAt() <=112);
// let result1 = result.join('')

// let name="m a dam"
// name.split(' ').reverse().join('') 