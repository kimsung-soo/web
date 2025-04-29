//function6.js
//배열 + object  속성과 값을 하나의 방식을 담아 놓는 것 
let num = 10;

let obj = {
  name: "홍길동",
  age: 20,
  phone: "010-2222-1111",
  pets: [{
    name: "단비",
    age: 3,
    검진일: ['2025-01-04', '2025-04-03']
  }, {
    name: '뽀민이',
    age: 6,
    검진일: ['2025-04-01']
  }]
}; // new Object(); ->복합적인 것을 담을수 있다.

console.log(obj.pets[1].name); // 예시: obj.name :홍길동  obj.pets.검진일[0]->2025-01-04

//배열 +obJect
let frineds = [{
    name: "홍길동",
    age: 20,
    phone: "010-1111-2222"
  },
  {
    name: "김민식",
    age: 21,
    phone: "010-3333-4444"
  },
  {
    name: "이영동",
    age: 22,
    phone: "010-6666-5555"
  }

];
let max = 0;
for (let i = 0; i < frineds.length; i++) {
  // if(frineds[i].name == "홍길동")
  if (max < frineds [i].age) {
    max = frineds[i].age;
  }
  // console.log(frineds[i].age);
    console.log(max);
}

