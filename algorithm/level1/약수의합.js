//10분
//1~본인까지 i (나눠서 0이면 본인과 나눈 몪을 더한다.)

function sol() {
  var a = 5;
  var answer = 0;

  for (var i = 1; i<=a; i++) {
    if (a%i==0) {
      answer += i;
    }
    
  }
  console.log(answer);
}
sol();