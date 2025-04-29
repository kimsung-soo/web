//function3exe.js
//1.함수의 이름은 max(10,7) => '두수 중에서 큰값은 10입니다.'


function max(num1, num2) {
  if (num1 > num2) {
    console.log(`두 수중 더 큰 값은 ${num1} 입니다`)
  } else if (num2 > num1) {
    console.log(`두 수중 더 큰 값은 ${num2} 입니다`)
  } else
    console.log(` 두 숫자가 같을 경우 입니다.`)
}
//기능 호출
max(10, 7)


//2.sumUpTo(5) =>1부터7까지의 합은 15 입니다. 
function sumUpTo(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i
  }
  console.log(sum)
}
sumUpTo(5)

//3.diff(34,17) => "두수의 차는 17입니다."

function diff(num3, num4) {
  let sum = 0;
  if (num3 > num4) {
    sum = num3 - num4;
  } else if (num4 > num3) {
    sum = num4 - num3;
  } else {
    sum = num4 - num3;
  }

  console.log(`두수의 차는 ${sum} 입니다.`)
}

diff(34, 17)