
function solution(arr) {
  var answer = [];
  var arr = [1, 3, 2, 3, 1, 2, 3, 3, 3];
  var mode = 0;

  for (var i = 0; i < arr.length; i++) {
    if (answer.length == 0) {
      answer += arr[i];
    } else {
      var cor = true;
      for (var j = 0; j < answer.length; j++) {
        if (answer[j] == arr[i]) {
          cor = false;
          break;
        }
      }
      if (cor == true) {
        answer += arr[i];
      }
    }
  }

  console.log(answer);
}
solution();
