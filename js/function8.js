//function8.js
//JSON.parse vs. JSON.stringify
console.log(json); // 문자열
let data = JSON.parse(json); //json문자열 =>객체로 변환 시켜주는 것 
console.log(data); //객체

//button(삿제) 탬플릿;
let butTemplate = "<button class='btn btn-danger' onclick='deleteTr(event)'>삭제</button>"; 


// 속성을 정의 =id , firstname , email
let fields = ['id', 'first_name', 'gender', 'salary'];


//사원목록을(table 형식) 출력.
let elist = "<table class = 'table'><thead>"
for (let field of fields) {
  elist += `<th>${field}</th>`
}
elist += '<th>삭제</th>';
elist += "</tr></thead><tbody>";

for (let emp of data) {
  // console.log (emp);
  elist += makeTr(emp)
}
elist += "</tbody></table>"
document.write(elist);

///////////////////////////////////////////////
//이벤트.Event
document.querySelector('button#searchBtn') //-> 버튼 테그인데 #serchBtn btn primary 라는 버튼 이라는 뜻.(선택자)
  .addEventListener('click', function () {
    // 입력값
    let searchValue = document.querySelector('#userValue').value;
    let list = "";
    for (let emp of data) {
      if (searchValue == 'All' || searchValue == emp.gender) {
        list += makeTr(emp);
      }
    }
    document.querySelector('table.table>tbody').innerHTML = list;
  }); //->클릭 이라는 이벤트를 발생 하면 function이라는 현상을 발생하겠다.


//2.select change
document.querySelector('select#selectGender')
  .addEventListener('change', function () {
    // 입력값
    console.log(this) //->this 는 이벤트 대상
    let searchValue = document.querySelector('#selectGender').value;
    let list = "";
    for (let emp of data) {
      if (searchValue == 'All' || searchValue == emp.gender) {
        list += makeTr(emp);
      }
    }
    document.querySelector('table.table>tbody').innerHTML = list;
  });



  //3.버튼 삭제
  function deleteTr(button) {
    console.log(button);
    button.target.parentElement.parentElement.remove();
  }

  //   let tr = Delet.target.closest('tr');  
  //   if (tr) {
  //     tr.remove(); 
  //   }
  
  


//tr을 생상하는 함수.
function makeTr(emp = {}) {
  let str = '<tr>';
  for (let field of fields) {
    // console.log(emp[field]); //emp['id'] ==emp.id
    str += `<td>${emp[field]}</td>`;
  }
  str +=`<td>${butTemplate}</td>`
  str += "</tr>"
  return str;
}