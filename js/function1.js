//function1.js
//p.556
//2개의 수를 더하고 큰값에 10을 더하고 작은 값에 5를 더한 후 합을 구하시오


//함수의 정의
function sum(parameter1, parameter2) {
  let result = 0;
if(parameter1 > parameter2){
 result = (parameter1 + 10) + (parameter2 + 5);
}else{
  parameter2 > parameter1 
  result = (parameter2 + 10) + (parameter1 + 5);
}
// console.log (`결과값 ${result}`);
return result; //☆함수를 호출한 영역으로 결과를 반환하겠습니다.
}

//화면 요소를 삭제하는 함수.
function removeElement(parameter1) {
  console.log(parameter1);
}
  



let num1 = 4, num2 = 2;
let result= sum(num1,num2);
document.write(`결과값 ${result}`);
// let result = 0;
// if(num1>num2) {
//  result = (num1 + 10) + (num2 + 5);
// } else{
//   result = (num2 + 10) + (num1 + 5);
// }
// console.log(`결과값 ${result}`);

num1=5 , num2 = 3
result= sum(num1,num2);
console.log (`결과값 ${result}`);
// if(num1>num2) {
//   result = (num1 + 10) + (num2 + 5);
//  } else{
//    result = (num2 + 10) + (num1 + 5);
//  }
//  console.log(`결과값 ${result}`);

result=sum (20,19)
 alert (`결과값 ${result}`);
document.querySelector(`#result`).value = result; 