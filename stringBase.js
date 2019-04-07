//50분

//알파벳 e가 문자열의 중간에 위치 할 경우 문자로 인식하지 않고 숫자로 인식하여 오류 도출,
//오룸차순으로 e를 문자열의 가장 앞으로 보내 해결

function solution(s) {
  var a = "12e456";
  var s = a.split("");
  var answer = null;
  for (var i = 0; i < s.length; i++) {
    if (s[i] < s[i + 1]) {
      var t = s[i];
      s[i] = s[i + 1];
      s[i + 1] = t;
      i = -1;
    }
  }
  var s = s.join("");
  console.log(s);
  if (s.length == 4 || s.length == 6) {
    var a = isNaN(s);
    if (a == true) {
      answer = false;
    } else {
      answer = true;
    }
    console.log(a);
  } else {
    answer = false;
  }
  console.log(answer);
  return answer;
}
solution();

//문자열 s의 길이가 4 또는 6이고, 숫자로만 구성되어있는지 확인

//a234이면 false, 1234 : true;
