//짝수면 2로 나눔, 홀수면 3을 곱하고 1을 더해 결과로 나온수 계속 진행 500번 해도 안되면 -1반환.
//정수

function sol() {
  var number = 6;
  var answer = 0;
  var i = 0;

  while (i < 500) {
    if (number == 1) {
      answer = i;
      break;
    } else{
      if (number % 2 == 0) {
        number = number / 2;
      } else {
        number = number * 3 + 1;
      }
      i++;
    //   console.log("number:"+number);
    //   console.log("i:"+i);
    answer=i;
    }
    
  }
  if(i==500){
      answer=-1;
  }
  console.log("answer : "+ answer);
  
  return answer;
}

sol();