//양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나눠져야함
//18 = 1+8 =9 18%9 =0 : 하샤드


function sol(){
    var qwe=12;
    var copy=qwe;
    var arr=[];
    var sum=0;
    var answer=true;

    // while(qwe>0){
    //     var r = qwe%10;
    //     qwe=parseInt(qwe/10);
    //     arr.unshift(r);
    // }
    var arr=String(qwe).split('');

    console.log(arr);
    for(var i=0;i<arr.length;i++){
        sum+=Number(arr[i]);
    }
    console.log("sum : "+sum);
    console.log("copy : "+copy);
    console.log("qwe : "+qwe);

    if(copy%sum==0){
        answer=true;
    }else{
        answer=false;
    }
    console.log(answer);
    
    
    
}

sol();