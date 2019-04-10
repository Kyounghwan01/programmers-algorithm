//정수 x, 자연수 n을 입력 x 부터 시작해 x씩 증가하는 숫자 n개




function solution(x, n) {
    var x=-4;
    var n=2;
    var answer = [];
    var a=0;
    var num =0;



    while( a<n){
        num=num+x;
        answer.push(num);
        a++;
    }
    
    
    
    console.log(answer);
    return answer;
    
}
solution();