//자연수가 주어지면, 각 자릿수의 합을수해서 리턴 
//15분

//해결 : 자연수를 string로 바꾸고 바꾼것을 객체화 시키고 더할때마다 숫자로 바꾸고 출력

// function solution(n)
// {
//     var answer = 0;
//     var n=987
    
//     var a=String(n);
//     var a=a.split('');
//     console.log(a.length);
//     for(var i=0;i<a.length;i++){
//         answer+=Number(a[i]);
//     }
    
    
//     console.log(answer);
    
//     return answer;
// }
// solution();


function solution(n){
    var n=123;
    var a=n.toString().split('')
    
     var a=a.reduce((prev,cur)=>prev+Number(cur),0);
    console.log(a)

    // return n.toString().split('').reduce((prev,cur) => prev+parseInt(cur),0);
}

solution();