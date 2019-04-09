function soluction(arr){
    var arr=[1,1,3,3,3,0,1,1];
    var answer=[arr[0]];
    
    
    for(var i=1;i<arr.length;i++){
        if(answer[answer.length-1]!==arr[i]){
            answer.push(arr[i]);
        }
    }
    console.log(answer);
}
soluction();


