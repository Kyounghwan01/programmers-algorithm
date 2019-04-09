// function solution(){
//     var a ="aDbceS";
//     var b =a.split('').sort().reverse().join('');
//     console.log(b);
// }
// solution();
function solution() {
  var a = "Qea";
  var b = a.split("");

  for (var i = 0; i < b.length; i++) {
    if (b[i] < b[i+1]) {
      var t=b[i];
      b[i]=b[i+1];
      b[i+1]=t;
      i=-1;
    }   
  }
  var c=b.join('');
  console.log(c);
  
  //소문자>대문자
}
solution();
