//5시30분

//두 정수 a,b가 있으면 a,b에 있는 모든 정수 사이의 값을 더하라

function solution(a, b) {
    var a=3;
    var b=2;
    var answer=0;
    if(a>b){
        for(var i=b;i<=a;i++){
             answer+=i;
        }
    }else if(a==b){
        answer=a;
    }else if(a<b){
        for(var i=a;i<=b;i++){
            answer+=i;
        }
    }
    console.log(answer);
    return answer;
}

solution();