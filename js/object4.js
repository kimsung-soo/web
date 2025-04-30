//object4.js
//filter() =>조건을 만족하는 요소를 새로운 배열 생성.

let numAry = [20, 27, 33, 42, 19, 63, 52]
let filterAry = numAry.filter(function(item, index, ary){
  if(item % 2 == 0){
    return true;
  }
  return false; //->false 일떄는 새로운 유형에 담아주지 않는다.
  //retrun undefined => falsy;
});
console.log(filterAry)


///////// salary가 5000이 넘는 사원들을 empAry에 저장.

console.log(json);

let data= JSON.parse(json);//배열
console.log(data)

let empAry = data.filter(function(item){
  if(item.salary >= 5000){
    return true;
  }
  return false;
})
console.log(empAry);
