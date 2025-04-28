//while2.js

//사용자에게 1~10까지 임의의 수를 입력. promt
// 범위 밖의 값을 입력하면 종료. 입력값의 누적 합을 콘솔에 출력



let sum = 0;

while(true) { 
  let num =parseInt(prompt ('1~10까지 임의의 수를 입력'))

  if(num < 1 || num > 10 ){
    break;
  }
  
  sum += num;  //누적 값

  console.log(`누적 값은 ${sum} 입니다`)  
}

  
  
    

    
  
