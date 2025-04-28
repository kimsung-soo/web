//while3.js
//친구이름을 입력. => quit 누르면 종료
//table 형식으로 만들기

//화면 요소를 삭제하는 함수.
function removeElement(parameter1) {
  console.dir(parameter1.target.parentElement.parentElement);
   parameter1.target.parentElement.parentElement.remove(); //제거
   //parentElement ->상위요소를 말한다.

}


let str = `<table class = "table"> 
            <tbody>`;

while (true) {
  let uservalue = prompt('친구이름을 입력하세요')
  if (uservalue == "quit"){
    break;//종료 조건
    continue; //continue 아래
}// end of if

str += `<tr><td>${uservalue}</td>
        <td><button  onclick = "removeElement(event)" class = 'btn btn-danger'>삭제</button></td></tr>`;
}// end of while

str += `</tbody></table>`; //table
document.write(str)

