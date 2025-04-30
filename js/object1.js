//object1.js      p.589
//객체를 가지고 프로그래밍을 하는것을=>객체지향(대표:자바)+함수기능 포함. 
//  함수기반(대표:자바스크립트)+객체기능을 포함 :인터프리터(해석한다)
//object = 객체  객체:this => 자기자신 

function sum() {
  console.log(this); //this는 제일 상위 객체인 window를 의미한다.
}
//함수 호출.
sum();

//this => 1. 객체(객체를 가리킴). 2.함수안에서는 (window 객체.) 3. 이벤트(대상) ex)function8 버튼체인지

let obj = {
  name: "홍길동",
  age: 20,
  showName: function () {
    console.log(this); //this는 객체 자신 (obj)이라는걸 의미
    return `이름은 ${this.name} 입니다.` //반환 하는것 
  },
  setName(name) { // =setName:function(name) { 이랑 같은 것이다 
    this.name = name;
  }
}
obj.setName("김길동");
let result = obj.showName();
console.log(result); //이름은 홍길동 입니다.! (return)


//class 생성 객체 만들기
class person {
  // name, age:속성 만들기
  // showName(), setName() : 메소드.
  constructor(name,age) {  //생성자. = constructor
    this.name =name;
    this.age = age;
  }
  //메소드.
  showName() {
    return `이름은 ${this.name} 입니다.`;
  }
  setName(name){
    this.name = name;
  }
    showAge() {
      return  `나이는 ${this.age} 입니다.` ;
    }
    setAge(age){
      this.age = age;
    }
}
let num =10;
let choi = new person("최민식" , 22); //인스턴스 생성.
choi.setName("최민수")
console.log (choi.showName());

let chot = new person("박충식", 30);
choi.setAge( 30)
console.log(choi.showAge());

let park = new person("박충식" , 30); //class로 또다른 인스턴스 생성