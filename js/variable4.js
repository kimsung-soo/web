//variable4.js
//연산자 (할당연산자 524p)

let num1 = '10';
num1 =num1 + "20"; //"1020"
num1 = num1 + "30" //102030"
num1 += "40" //num = num +"40";
console.log(num1);


let num2 =10; //number
num2 +=20;
num2 +=30;

num2 =num2 - 5; //55
num2 -=5 ; //50

num2=num2 *2; //100
num2 *=2; //200

num2 =10203040;
console.log(num2); //값만 비교 

//비교 연산!
console.log(num2 == num1); //동일.
console.log(num2 === num1); //동일. === 데이터 타입 값 마저 같으면 true 다르면 false

console.log(num2 != num1); //값만 비교 
console.log(num2 !== num1); //값 과 타입 비교 

//논리 연산자.
console.clear();
console.log(num1 >= num2 || num1 < 100); // || 하나만 true 여도 true
console.log(num1 >= num2 && !(num1 > 100)); // 모두 true일 경우에만 true !->반댓값 (not)


