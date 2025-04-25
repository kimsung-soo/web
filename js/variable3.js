//variable3.js
// 연산자(+,-,/,*,%)
let num1 = document.querySelector('#num1').value;
let num2 = document.querySelector('#num2').value;
num1 = parseInt(num1); //30이라는 문자가 parseInt 속성값을 넣어줘서 30이라는 숫자가 되었다
num2 = parseInt(num2); //'17'->17

let result = ++num1 + ++num2; //"30" + "17" = "3017";  {30 + 17 = 47;-> 숫자 기능으로 바꿔주는 것 parseInt p.521}
console.log(result , num1, num2);
//result 값을 input#result의 value속성에 대입.
document.querySelector('#result').value = result;