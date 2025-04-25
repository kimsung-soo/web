//condition4exe.js
// 1~10 임의의 값을 생성하고 
// 생성값을 변수에 저장하고 후 2의 배수(if) 또는 3의 배수(else if) 인지 또는2,3(else)의 배수가 아님.
let result = 1 + Math.floor(Math.random() * 10); //0 <= x < 10 
//1 <=X < 11  
console.log(result)

if (result % 2 == 0 && result % 3 == 0) {
  console.log("2,3의 배수")
} 
else if (result % 2 == 0) {
  console.log("2의 배수")
} 
else if (result % 3 == 0) { //3으로 나눴을때 나머지가 0인 경우!! % 3 == 0
  console.log("3의 배수")
}
else {
  console.log("2,3의 배수가 아님")
}
