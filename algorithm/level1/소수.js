function solution(){
    var n=10;
    var answer=0;
    for(var i=2;i<=n;i++){
        var check=true;
        for(var j=2;j<i;j++){
            if(i%j==0){
                check=false;
            }
        }
        if(check){
            answer++;
        }
    }
    console.log(answer);

}

solution();