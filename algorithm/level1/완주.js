//1명 제외 나머지 모두 완주함
//완주한 선수들의 이름이 담긴 배열을 줌

function solution(participant, completion) {
  var participant = ["mislav", "stanko", "mislav", "ana"];
  var completion = ["stanko", "ana", "mislav"];
  var answer = "";

    for(var i=0;i<participant.length;i++){
        
        if(participant[i]>participant[i+1]){
            var temp =participant[i];
            participant[i]=participant[i+1];
            participant[i+1]=temp;
            i=-1;
        }
    }
    for(var i=0;i<completion.length;i++){
        if(completion[i]>completion[i+1]){
            var temp =completion[i];
            completion[i]=completion[i+1];
            completion[i+1]=temp;
            i=-1;
        }
    }
    //participant.sort(); completion.sort();

    for(var i=0;i<participant.length;i++){
        if(participant[i]!==completion[i]){
            answer = participant[i]
            
            break;
        }
    }
    console.log(typeof(answer));
  return answer;
  
}

solution();

//두개다 오름차순으로 만들고 
//두개를 비교해서 다르면 빼낸다 