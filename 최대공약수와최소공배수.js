//두 수의 최대공약수, 최소공배수를 반환하는 함수 
//최소공배수는 최대공약수로 두 값을 곱한 값을 나누면 된다. 

function solution(n,m){
    var n=4;
    var m=12;
    var max=0;
    var min=0;
    var answer=[];

    if(n<=m){
        for(var i=0;i<=n;i++){
            if((n%i==0)&&(m%i==0)){
                max=i;
                console.log(max);
            }
        }
    }else{
        for(var i=0;i<m;i++){
            if((n%i==0)&&(m%i==0)){
                max=i;
            }
        }
    }
    min = (n*m)/max;
    console.log(min);
    console.log(max);
    answer.push(max,min);
    // answer.push(min);
    console.log(answer);

}
solution();