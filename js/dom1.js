//dom1.js

//createElement(), appendChild(), setAttribute(), qurerySelector()

//////////////////////////////////////////
//이벤트.
document.querySelector('#addBtn')
  .addEventListener('click', addcallback);

//삭제버튼들
document.querySelectorAll('ul button').forEach(function (item) {
  console.log(item)
  item.addEventListener('click', function () {
    item.parentElement.remove(); //요소 삭제
  })
});

//li에 스타일 
document.querySelectorAll('ul').forEach(item => {
item.addEventListener('mouseover',function(){
  item.style.backgroundColor = "cyan"
})
item.addEventListener('mouseout',function(){
  item.style.backgroundColor = ""

item
})
});





//콜백 함수
function addcallback() {
  let fruit = document.getElementById('fruit').value;
  let price = document.querySelector('#price').value;

  //입력값이 있는지 체크.
  if (!fruit || !price) {
    alert('값을 입력하세요.')
    return; //함수 실행 종료
  }


  let newList = createLi(fruit, price);
  document.querySelector('ul').appendChild(newList); //부모-자식 관계

  //입력값을 초기화
  document.getElementById('fruit').value = "";
  document.querySelector('#price').value = 0;
}

function createLi(fruitName, fruitPrice) {
  let li = document.createElement("li"); //<li /> 
  // li.innerText ="test"
  let sp1 = document.createElement("span");
  sp1.innerText = fruitName;
  let sp2 = document.createElement("span");
  sp2.innerText = fruitPrice + "원";
  let txt = document.createTextNode(" "); // 공백

  //삭제 버튼
  let btn = document.createElement("button"); // <button id ="delBtn" class ="btn btn-danger">삭제</button>
  btn.innerText = "삭제";
  //  btn.setAttribute('class','btn btn-danger')
  btn.className = "btn btn-danger";
  btn.addEventListener('click', function () {
    btn.parentElement.remove();
  }); //클릭 이벤트 등록

  li.appendChild(sp1); //부모요소와 자식요소 관계
  li.appendChild(txt);
  li.appendChild(sp2);
  li.appendChild(btn);

  return li; //<li /> 반환.
} //end of createLi