// var a ="-1 -2 -3 -4";

// var a=a.split(' ');
// console.log(a);
// var smallest = Number(a[0]);
//     var biggest = Number(a[0]);
// for(var i =1;i<a.length;i++){
//     if(Number(a[i])<smallest){
//         smallest=a[i];
//     }
//     if(Number(a[i])>biggest){
//         biggest=Number(a[i]);
//     }
// }

// console.log(typeof(biggest));
// console.log(smallest+" "+biggest);



// const b = a.split(' ').map(v => +v);
// // a=a.toString();
// // a=Number(a);
// // a=a.join('');
// // a=parseFloat(a);

// console.log(typeof(b))
// console.log(b)
// console.log(b.length);

// var answer=[Math.min(...b), Math.max(...b)].join(' ');

// console.log(answer);



// //값의 최댓값,최솟값을 return

function solution(s) {
  var max = 0;
  var min = 0;
  var s = "-1 2 3 -4";
  var sum = 0;
  var a = s.split(" ");
//   var a= Number(s);
 
  // .join('');
//   var b = a.split('');
  for (var i = 0; i < a.length; i++) {
    
    if (a[i] < a[i + 1]) {
      var temp = a[i + 1];
      a[i + 1] = a[i];
      a[i] = temp;
      i = -1;
    }
  }
    
console.log(typeof(a));
console.log(a);

  // if (a[i] >= 0) {
  //   max = a[0];

  // } else if (a[i] < 0) {
  //   min = a[0];
  // }

  console.log("max : " + max);
  console.log("min : " + min);

  var answer = "";
  return answer;
}

solution();


function solution(s) {

  var a=s.split(' ');
  console.log(a);
  var smallest = Number(a[0]);
      var biggest = Number(a[0]);
  for(var i =1;i<a.length;i++){
      if(Number(a[i])<smallest){
          smallest=a[i];
      }
      if(Number(a[i])>biggest){
          biggest=Number(a[i]);
      }
  }
      var answer = smallest+" "+biggest;
      return answer;
  }