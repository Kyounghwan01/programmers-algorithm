// n을 뒤집어 각 자리 숫자를 원소로 가지는 배열의 형태


function sol(){
    var n =12345;
    var a=0;
    
    var a=(n+"").split("").reverse().map(function(o){
        return parseInt(o);
    });


    
    

    


    console.log(a);
}
sol();