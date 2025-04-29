//function4.js
//함수 +반복문+배열;

let num = 10;
num = "10,홍길동"; //->하나의 값 문자열
let numAry = [10, 20]; // new Array();
numAry[2] = 30;
numAry[3] = 50;
numAry[4] = "Hello"; //문자는 되도록 사용 x
numAry[4] = 70; //4번 Hello 삭제 후 70으로 변경 
numAry[5] = 90;
numAry[6] = 110;

console.log(numAry[6]); //0->10 1->20  2->30 3->50  문자도 가능은 하다.
console.log(`배열의 크기${numAry.length}`); //length:배열의 크기

//배열은 +for 반복문과 잘 사용한다
for (let i = 0; i < 7; i++) { //반복문 
  console.log(`[i]의 값은: ${i}, 배열에 들어있는 값:${numAry[i]}`)
}

//두 수의 차이 값으로 연산도 가능

console.log(`numAry[6]-numAry[2] => ${numAry[6] - numAry [2]}`)

//배열의 요소의 합

let sum = 0;
for (let i = 0; i < numAry.length; i++) {
  sum += numAry[i]; //= sun = sum+numAry[i]
}
console.log(`sum=> ${sum}`);


let sum1 = 0;
for (let i = 0; i < numAry.length; i++) {
  //1,3,5,7
  //if (i %2 == 0)
  //값중에서 50보다 큰값 
  if (numAry[i] > 50) {
    sum1 += numAry[i];
  }
}
console.log(`sum=> ${sum1}`)

//배열변수의 이름이:ages 친구들 나이 27,28,25,30,31,36
//변수의 이름 max(초기값:0)첫번째 값이랑 비교 

let agesAry = [27, 28,25,30,31,36]

//함수:getmax()

function getmax(param1=[]){
  let max = 0;
  for (let i = 0; i < param1.length; i++) {
    if (param1[i] > max) { // 현재 max값 보다 더 큰 요소가 있다면
      max = param1[i]; // max의 변수에 할당 
    }
  }
  console.log(`${max}이 제일 많은 나이 입니다.`)
}

//함수 실행.
getmax(agesAry);
getmax([30,17,22,34,27]);

// 작은 값 가져 오기 함수 getMinValue (매개값으로 배열)
//제일 작은 값을 반환하는 return.



function getMinValue(param1=[]){ //param1 함수 값에서 쓸 이름 
  let min =param1[0];
for (let i = 0; i< param1.length; i++)
  if (param1[i] < min){
    min = param1[i];
  }
  return min; //반환.
}
  let result = getMinValue([20,27,17,30]);
  result = getMinValue([17,34,22,10]);
 console.log (`결과는 ${result} 입니다.`)



