// 정수를 담고 있는 배열의 평균값을 구하시오

function solution(arr){
    var arr=[1,2,3,4,5]
    var answer=0;
    for(var i=0;i<arr.length;i++){
        answer +=arr[i];
    }
    answer=answer/arr.length;
    
    console.log(answer);
}

solution();
