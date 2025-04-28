// while1.js p.542
// 1~10까지의 홀수 값만 콘솔에 출력.

for (let i = 1; i <= 10; i++) {
  if (i % 2 == 1) {
    console.log(i);
  }
}

//반복횟수 상관없이 조건을 만족하는 동안만 반복하겠습니다. (while)

// let no =1;
// while(true) {        
//  if(no % 2) {
//    console.log(no);
//   }
//   no++; //증감 값
//   if (no > 10){
//     break //반복 종료
//   }
// }


//임의의 값(0~100) 값을 생성 하다가 50보다 작은 값이 나오면 반복을 종료하겠습니다.
let runnig = true;

while(runnig) {
  let num = Math.floor(Math.random() * 101); //0~100 0<= x < 101
  console.log(num);

  if(num == 100){ //종료 조건
    // break;
    runnig = false;
  }
}
console.log ("end of prog.");

