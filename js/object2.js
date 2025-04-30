//object2.js
//p.593
//배역 내장객체 : new Array() 또는[]
//관련 매소드 : push, pop(뒤에서 부터 제거), unshift 
// , shift(앞에서 부터 제거) =>forEach(반복문)

let arr1 = [10, 20, 30]; //new Array(); 
arr1[3] = 40;

arr1.push(50); //추가 메소드.
arr1.unshift(60); //제일 앞에 등록 됨

//60,10,20,30,40,50 -> pop 한번 하면 제일 뒤에 50 제거 두번 하면 40제거
//shift 하면 60 제거

arr1.pop(); //60,10,20,30,40
arr1.pop(); //60,10,20,30,
arr1.shift(); //10,20,30
//10, (15) 20 30 -> 추가 ,삭제 수정이 가능하다
arr1.splice(1,0,15,16,17);

//every, some
let result = arr1.some (item => item % 2 == 1);
console.log(result);



arr1.forEach(function (iteam, index, ary) { //이름이 없는 함수는 익명함수
  console.log(iteam, index,ary) //item= 요소 index ary ->자기자신
});

console.log(arr1);