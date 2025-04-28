//function2.js

function sum(num1 =0 , num2 = 0){ //매개변수의 초기값.
  let result = 0;
  result = num1 +num2;
  return result; //반환한다
}
 

//매개변수
function printStar (times = 1 , shape = '⭐') {
  let str = '';
  for(let i = 1; i <= times; i++){
     str += shape;
  }
  console.log(str);
}


//구구단을 출력하는 함수
function printGugudan(dan = 2){

  for(let i = 1; i <= 9; i++){
    document.write(`<p>${dan} * ${i} = ${dan*i}<p>`);
  }
   
}
  

//함수 호출을 해야된다.매개값
console.log(sum(10,20,));
printStar(2 ,'🌞');
printGugudan(13)




