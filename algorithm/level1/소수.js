function a(n){
    var n=11;
    answerArray=Array();
    var answer=0;

    if(n%2!==0){
        answerArray.push(2);
    }
    console.log(answerArray.length);

    for(var i=0;i<answerArray.length;i++){
        answer+=answerArray[i];
    }
    console.log(answer);
}
a();