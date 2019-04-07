function solution(lettering){
    var lettering = "12345";
    if(lettering.length%2==0){
        var div = lettering.length/2 -1;
        var answer =lettering.substring(div,div+2);
        console.log(answer);
        
        console.log("짝수")
    }else{
        var div = lettering.length/2 -0.5;
        var answer=lettering.substring(div,div+1);
        console.log(answer);
        console.log('홀수');
    }
}
solution();

/*
6시 30분 시작 6시 45분 완료
1. 단어길이가 짝수이면 가운데 2글자, 홀수면 1글자
2. (1)글자길이를 나눠서 나머지 0,1로 홀수와 짝수를 나눈다.
    (2)홀수의 경우


3. 코드

*/