//자연수 n 값 수박수박 문자열 반환
//


function solution(){
    var n=3
    var answer='';
 
    for(var i=0;i<n;i++){
        if(i%2==0){
            answer+="수";
        }else{
            answer+="박";
        }
    }

    console.log(answer);
}
solution();