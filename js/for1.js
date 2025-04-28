//for1.js p.537
let sum = 0; //초기화
for (let i = 1; i <= 5; i++) { // i=1:초기값  i<5;:조건  i++:증가식
  sum = sum + i;
}
console.log('sum의 값은' + sum);

// 1~20 까지 반복문 =>짝수 의 합을 구하고 싶음.
sum = 0;
for (let i = 1; i <= 20; i++) {
  if (i % 2 == 0) { //조건 if :짝수 일때만 합
    sum = sum + i; //누적
  } // end of if.
} // end of for.
console.log('sum의 짝수 값은' + sum);