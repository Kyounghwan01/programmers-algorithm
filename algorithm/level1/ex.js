
function solution(answers) {
    var answers=[1,2,3,4,5];
    var answer = [];
    var A_count=0;
    var B_count=0;
    var C_count=0;

    var A = [1,2,3,4,5];
    var B = [2,1,2,3,2,4,2,5];
    var C = [3,3,1,1,2,2,4,4,5,5];


    for(var i=0;i<10000;i++){
        A.push(A[i]);
        B.push(B[i]);
        C.push(C[i]);
    }

    for(var i=0;i<A.length;i++){
        if(A[i%5]==answers[i]){
            A_count++;
        }
        if(B[i%8]==answers[i]){
            B_count++;
        }
        if(C[i%10]==answers[i]){
            C_count++;
        }
    }

    if(A_count==B_count&&A_count==C_count&&B_count==C_count){
        answer=[1,2,3];   
    }else if(A_count==B_count&&A_count>C_count){ 
        answer=[1,2]
    }else if(A_count==C_count&&A_count>B_count){
        answer=[1,3]
    }else if(B_count==C_count&&B_count>A_count){
        answer=[2,3]
    }else if(A_count>B_count&&A_count>C_count){
        answer=[1]
    }else if(B_count>C_count&&B_count>A_count){
        answer=[2]
    }else if(C_count>B_count&&C_count>A_count){
        answer=[3]
    } 

    console.log(answer);
    return answer;
}
solution();



//가장 많이 맞춘 1명