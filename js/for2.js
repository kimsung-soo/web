//for.js2 
//1~10까지 반복
//2의 배수 ,3의 배수 =2의 배수는 sum2 저장 
//3의 배수는 sum3 저장
let sum2 = 0,
  sum3 = 0;
for (let i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    sum2 += i;
  } if (i % 3 == 0) {
    sum3 += i;
  }
}
 console.log("2의 배수의 합: " + sum2);
 console.log("3의 배수의 합: " + sum3); 

 