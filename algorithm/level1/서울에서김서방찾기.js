//string 배열 seoul의 속성 중 kim의 위치 x를 찾아 , 김서방은 x에 있다 스트링 반환
function solution(seoul) {
    var seoul=['awd','srrb','sesef','Kim','awdawd'];
    var answer = '';
    for(var i=0;i<seoul.length;i++){
        if(seoul[i]=='Kim'){
            answer="김서방은 "+i+"에 있다"
        }
    }
    console.log(answer);

    return answer;
}

solution();