function solution(arr,divisor){
    var arr=[2,36,10,3];
    var divisor=[1];
    var answer=[];
    for(var i=0;i<arr.length;i++){
        if(arr[i]%divisor ==0){
            answer.push(arr[i])
        }
    }
    for(var i=0;i<answer.length;i++){
        if(answer[i]>answer[i+1]){
            var t = answer[i];
            answer[i]=answer[i+1];
            answer[i+1]=t;
            i=-1;
        }
    }
    if(answer.length ==0){
        answer=[-1];
    }
    console.log(answer);
}
solution();


//나누어서 떨어지면 배열에 넣는다

//배열에 넣은것이 오름차순이 되어야 한다. 

//나누는 인자가 배열 인자들 보다 큰 경우 -1을 출력한다. 