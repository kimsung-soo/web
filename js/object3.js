//object3.js
//indexof() ->배열에서 index 위치 찾아줌 없으면 -1이라고 표시 있으면 표시

let numArr = [10,21,33,54,16,73]
let result = numArr.indexOf(33); //-1은 찾는 요소가 없다.
console.log(result);

let strArr = ["홍길동","김길동","홍길순"];

strArr.forEach(function(item){
  if(item.indexOf("홍") == 0) //성씨가 홍씨인 사람
    console.log(item)
});

// numAry(변수) => 10~50 사이의 값을 10개 저장.  => 콘솔에다가 출력하는데(for each);

let numAry = [];
for(let i =1; i<=10; i++) {
  let no =Math.floor(Math.random() *41)+10;
  numAry.push(no);
}
//10과 50사이의 값이 맞는지 확인 하는법

//  1번방법
// let num = numAry.every (item=> item>=10 && item <=50);
// console.log(num)

// 2번방법
// result = numAry.every (function (item) {
//  return item >= 10 && item <=50;
//  console.log(result);
// })

//3번방법
result = numAry.every (function (item){
  if(item>=10 && item <=50){
    return true
  }else{
    return false;
  }
})
    


console.log(result);
numAry.forEach(function(item){
  console.log(item);
})
  