//function7.js

console.log(frineds)


let frined = {
  name: "김민규",
  age: 20,
  phone: "010-111-2222"
}
//for.. in 속성에 있는 것만 반복 하겠습니다.

let {a1="name",a2="age",a3="phone"} ={
  ame: "김민규",
  age: 20,
  phone: "010-111-2222"
};
console.log(a1,a2,a3)




for (let prop in frined) {
  console.log(`prop:${prop},val:${frined[prop]}`);
}




//함수: makeRow(firends={}) ->화면에다가 Row기능을 만들어줌
function makeRow(frined = {
  name,
  age,
  phone
}) {
  let str = "";

  str += "<tr>"
  // str += `<td>${frined.name}</td> <td>${frined.age}</td><td>${frined.phone}</td>`;
  for (let prop in frined) {
    str += `<td>${frined[prop]}</td>`;

  }
  str += "</tr>"

  return str;
}

//출력 기능.
let titles = ["이름", "나이", "연락처"];
let tlist = "";
tlist += "<table class ='table'>";
//for ..of => 배열 반복
for (let title of titles) {
  tlist += `<th>${title}</th>`;
}
tlist += "<tbody>";
//데이터 ->row 생성.

// for (let i = 0; i < frineds.length; i++) {
// tlist += makeRow(frineds[i]);
//}

//for ..of => 배열 반복
for (let frined of frineds) {
  tlist += makeRow(frined);
}
tlist += "</tbody></table>";
document.write(tlist);