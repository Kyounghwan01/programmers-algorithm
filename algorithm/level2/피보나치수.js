//피보나치 수는 F(0) = 0, F(1) = 1일 때, 1 이상의 n에 대하여 F(n) = F(n-1) + F(n-2) 가 적용되는 수 입니다.
//2 이상의 n이 입력되었을 때, n번째 피보나치 수를 1234567으로 나눈 나머지를 리턴
//1시간

function sol(n){
    var n =1234568;
    var answer=0;
    f=[0,1,1];
    for(var i=3;i<=n;i++){
        // 0,1,1,2,3,5,8,13
     f[i]=(f[i-1]+f[i-2])%1234567
    }
    console.log(f[n])
    
    answer=f[n]
    console.log(answer); 
}
sol();