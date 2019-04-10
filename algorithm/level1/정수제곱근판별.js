//n에 대해 정수 x의 제곱인지 아닌지 판단.
//제곱이면 x+1의 제곱 리턴 , 아니면 -1 리턴

function sol(){
    var num = 121;
    var answer=0;

    if(Math.sqrt(num)*10%10 ==0){
        var a= Math.sqrt(num) +1;
        answer=a*a;
    }else{
        answer=-1;
    }
    console.log(answer);
}
sol();