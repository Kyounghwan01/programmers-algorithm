//행렬의 덧셈은 행과 열은 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과
//2개의 행렬 arr1,arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수

//조건 : 두가지의 행렬의 길이는 무조건 같다. 행렬의 길이는 500을 안넘는다

function solution(arr1, arr2) {
    var answer=Array();
    for(var i=0;i<arr1.length;i++){
        answer[i]=[];
        for(var j=0;j<arr1[0].length;j++){
            answer[i][j]=arr1[i][j]+arr2[i][j];
        }
    }
    
    return answer;
}
solution();
