// condition6exe,js
//1번 문제. 2개의 수를 입력 후 비교 하여 큰값을 콘솔에 출력
//2개의 수 중에서 큰 값은 28 입니다.

let num1 = prompt("숫자를 입력하세요.");
let num2 = prompt("숫자를 입력하세요.");

if(num1 > num2){
  console.log ("두 수중 더 큰 숫자는" + num1 + "입니다");
}
else if(num2 > num1) {
  console.log ("두 수중 더 큰 숫자는" + num2 + "입니다");
}
else {
  console.log ("두 수가 같을 경우 입니다")
}