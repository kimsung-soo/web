// condition7exe,js

//2번 문제. 임의의 2개의 수(40~70) 를 생성. "2개의 수 중에서  큰값은 ??, 작은값은 ?? 입니다."
let result1 =  40+ Math.floor(Math.random() * 31); //0 <= x < 10 
console.log(result1);

let result2 = 40+ Math.floor(Math.random() * 31); //0 <= x < 10 
console.log(result2);


if (result1 > result2 ){
  console.log("두수 중에 더 큰숫자는 "+ result1+"입니다.");
}
else if (result2 > result1){
  console.log("두수 중에 더 큰숫자는 "+ result2+"입니다.");
}
else{
  console.log("두개의 수가 같을 경우 입니다.");

}9
