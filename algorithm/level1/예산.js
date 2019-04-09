/*
신청금액만큼 정확히 지불 
예산이있는 배열 d, 예산이 매개변수 최대 몇개의 d 배열인지 알려줘

key: 부서의 최대값을 넣는 것 : 오름차순으로 바꿔야 가장 많이 부서 포함됨.

*/

function solution(d, budget) {
  var d = [-1, -5, 2, 1, 5, 4];
  var budget = 10;
  var sum = 0;

  for (var i = 0; i < d.length; i++) {
    if (d[i] > d[i + 1]) {
      var temp = d[i];
      d[i] = d[i + 1];
      d[i + 1] = temp;
      i = -1;
    }
  }
  console.log(d);
  for (var i = 0; i < d.length; i++) {
    sum += d[i];
    if (sum > budget) {
      break;
    }
  }
  var answer = i;
  console.log(answer);

  return answer;
}
solution();
