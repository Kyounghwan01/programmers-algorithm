//length 같은 배열 a,b => 자연수로 이루어짐 

//각 한개의 숫자를 뽑아 두 수를 곱한다 

//이 과정을 배열의 길이만큼 반복, 두수를 ㄱ돕한 값을 누적하여 더람 

//이 과정이 최소가 되는 것이 목표 

//가장 큰값이랑 가장 작은 값을 곱하

// console.log(A);
// console.log(B);
// for(var i=0;i<B.length;i++){
//     if(A[i]>A[i+1]){
//         var temp = A[i];
//         A[i]=A[i+1];
//         A[i+1]=temp;
//         i=0;
//     }
// }


// function solution(A,B){
//     var A=[1,2]
//     var B=[3,4]
//     var answer = 0;

//     for(var i=0;i<A.length;i++){
//         if(A[i]>A[i+1]){
//             var temp = A[i];
//             A[i]=A[i+1];
//             A[i+1]=temp;
//         }
//         if(B[i]<B[i+1]){
//             var temp = B[i+1];
//             B[i+1]=B[i];
//             B[i]=temp;
//             i=0;
//         }
//     }
//     console.log(B);

//     for(var i=0;i<A.length;i++){
//         answer+=A[i]*B[i];
//         console.log(answer);
//     }
//     console.log(answer);
//     return answer;
// }
// solution();
function solution(A,B){
    var answer = 0;
        var A=[1,2]
    var B=[3,4]
    for(var i=0;i<A.length;i++){
        if(A[i]>A[i+1]){
            var temp = A[i];
            A[i]=A[i+1];
            A[i+1]=temp;
            i=-1;
        }
    }
    for(var i=0;i<B.length;i++){
        if(B[i]<B[i+1]){
            var temp = B[i+1];
            B[i+1]=B[i];
            B[i]=temp;
            i=-1;
        }
    }

    for(var i=0;i<A.length;i++){
        answer+=A[i]*B[i];
        console.log(answer);
    }
    console.log(answer);
    return answer;
}
solution();