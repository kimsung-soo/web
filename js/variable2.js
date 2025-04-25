// variable2.js
let num1 = 100; // int num1;
console.log(typeof num1)
num1 = "hundred";
let num_2 = 200;
let nameOfFriend = "홍길동";

let birthOfDate = new Date();
console.log(typeof birthOfDate);

let isOk = true;
isOk = 10 < 5; //false.
isOk = 10 > 5;

if (isOk) {
  // isOk 값이 true일 경우는 {} 블럭을 실행.
  console.log('isOk는 정답입니다.');
}

//배열:->배열 기호[100,200,250] 여러개의 값을 저장
let numAry = [10, 20, 25, 31] // 인덱스 순번은 0부터 시작
console.log(numAry[0]);

let strAry = ["Hello", "Nice", "Good", 300] //문자와 숫자도 같이 넣을수 있지만 안쓰도록 합시다 2025-04-25
console.log(strAry[2]);

//객체(object). ->키: 값의 형태 
let person = {
  name: "홍길동",
  age: 20,
  height: 168.9,
  weight: 65.3,
  personInfo: function () {// 함수는 기능.
    console.log('이름은 ' + person.name + ' 이고 나이는' + person.age) ;
  }
}
person.personInfo(); // 메소드 호출(call)

console.log(person.name);

//undefied, null
let whatIsThis;
whatIsThis = document.querySelector('#userValu')
console.log(typeof whatIsThis);