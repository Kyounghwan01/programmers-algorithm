// //문자열 s는 한개 이상의 단어로 구성 각 단어는 하나이상의 공백문자
// //짝수번째 알파벳은 대문자, 홀수번째 알파벳은 소문자

// //(1) split으로 공백별로 문자별로 잘라야하고
// //(2) 잘라진 문자를 length로 구분해서 upper으로 바꾸고
// //(3) join으로 다시 붙인다.

function solution() {
    var s="try hello world";
    var arr=s.split(" ");
    var val=null;
    var answer = [];
    console.log(arr);
    for(let a of arr){
        console.log("a"+a);
        val=a.split("");
        
        
        for(var i=0;i<val.length;i++){
            if(i%2==0){
                val[i]=val[i].toUpperCase();
            }else{
                val[i]=val[i].toLowerCase();   
            }
        }
        console.log(val);
        answer.push(val.join(''))
        
    }
    var real=answer.join(' ');
    console.log(typeof(answer))
    console.log(real)
    return answer;
}
solution();





// function a() {
//   var s = "try hello world";
//   var check = s.split(" ");
//   var answer = [];
//   var val = null;

//   for (let a of check) {
//     console.log('check : '+check);
//       console.log('a : '+a);
//     val = a.split("");
//     for (var i = 0; i < val.length; i++) {
//       if (i % 2 == 0) {
//         val[i] = val[i].toUpperCase();
//       } else {
//         val[i] = val[i].toLowerCase();
//       }
//       console.log(val);
//     }
//     answer.push(val.join(''))
//     var real = answer.join(' ');
//     // console.log(real);
//   }
//   return 
// }
// a();
