//object5.js
//Date 객체: 날짜, 시간

let now = new Date(1000);
// now = new Date ("2025-04-30")
// now.setDate(21);
console.log(now)
console.log(now.getDate() + "일(은)는" +getkorDay(now.getDay()));//4월30일 => 3  0부터 시작하기 때문
//요일:getDay() 0 (sun), 1(mon),2 (tue)... 6(sat)

function getkorDay(day =1 ) {
  switch(day){
    case 0:return '일요일';
    case 1:return '월요일';
    case 2:return '화요일';
    case 3:return '수요일';
    case 4:return '목요일';
    case 5:return '금요일';
    case 6:return '토요일';
  }
}
    

