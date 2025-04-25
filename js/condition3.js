// condition3.js
//30~ 100사이의 점수
let result = 30 + Math.floor(Math.random() * 71); //0 <= x < 10 
console.log(result)

//100 ~ 90 => "A"
//~80 => "B"
// ~70 => "C"
// ~ 60 => "D" 그외 "F"

if (result >= 90) {
  console.log("A")
} else if (result >= 80) {
  console.log("B")
} else if (result >= 70) {
  console.log("C")
} else if (result >= 60) {
  console.log("D")
} else { //위에서 언급이 되지 않은 것들은 else에 포함된다
  console.log("F")
}

// if(result >=60){
//   console.log("pass");
// }
// else{
//   console.log("Fail");
//   }