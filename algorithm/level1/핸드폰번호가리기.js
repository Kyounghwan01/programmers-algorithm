//일부를 가린다, 뒷번호4자리빼고 다 *로 하라
//조건 : 문자열 
//length의 뒷자리 4개만 남기는 방법이 뭐가 있을까??


function solution(phone_number){
    var phone_number="01234567890123123"
    var answer="";
    for(var i=0;i<phone_number.length;i++){
        if(i>=phone_number.length-4){
            answer+=phone_number[i];
        }else{
            answer+="*";
        }
    }
    

    console.log(answer);
}

solution();