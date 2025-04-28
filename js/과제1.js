// condition6exe,js
//1번 문제. 2개의 수를 입력 후 비교 하여 큰값을 콘솔에 출력
//2개의 수 중에서 큰 값은 28 입니다.

//2번 문제. 임의의 2개의 수(40~70) 를 생성. "2개의 수 중에서  큰값은 ??, 작은값은 ?? 입니다."

//3.condition.js에 "A","B","C" "D" "F" => 95점 이상 이면 A+ B+ C+ D+

//4.반복문()p537 연습 해보기.

let result = 30 + Math.floor(Math.random() * 71); //0 <= x < 10 
console.log(result)

if (result >= 95) {
  console.log("A+")
}else if (result >= 90) {
  console.log("A")
} else if (result >= 85) {
  console.log("B+")
} else if (result >= 80) {
  console.log("B")
} else if (result >= 75) {
  console.log("C+")
} else if (result >= 70) {
  console.log("C")
} else if (result >= 60) {
  console.log("D+")
} else if (result >= 60) {
  console.log("D")
} else { 
  console.log("F")
}

