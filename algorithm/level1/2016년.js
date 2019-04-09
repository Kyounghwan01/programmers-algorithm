//30분
//2016/1/1 -> 금요일 
//2016/a/b는 무슨요일?
//윤년 : 2월 29일

//일단 월별로 날짜를 정해야하고 
//일별로 나누어서 나머지 값에 대해 날짜를 지정한다.
/*
1월 : 31일 
2월 : 29일 

31+4=35/7=5
if(a=3){
    더한다 31+29+b
    그 값을%7해서 나머지 값으로 날짜를 선정
}
*/



function solution(a, b) {
    var a=10;
    var b=1;
    var c=0;
    var answer = '';
    var month=[31,29,31,30,31,30,31,31,30,31,30,31];
    var day=["FRI","SAT","SUN","MON","TUE","WED","THU"];
    var sum=0;
    for(var i=0;i<a-1;i++){
        sum+=month[i];
    }
    sum= sum+b-1;
    answer=day[sum%7];

    // if(a==1){
    //     var c=b%7
    // }else if(a==2){
    //     var c=(31+b)%7;
    // }else if(a==3){
    //     var c=(31+29+b)%7;
    // }else if(a==4){
    //     var c=(31+29+31+b)%7;
    // }else if(a==5){
    //     var c=(31+29+31+30+b)%7;
    // }else if(a==6){
    //     var c=(31+29+31+30+31+b)%7;
    // }else if(a==7){
    //     var c=(31+29+31+30+31+30+b)%7;
    // }else if(a==8){
    //     var c=(31+29+31+30+31+30+31+b)%7;
    // }else if(a==9){
    //     var c=(31+29+31+30+31+30+31+31+b)%7;
    // }else if(a==10){
    //     var c=(31+29+31+30+31+30+31+31+30+b)%7;
    // }else if(a==11){
    //     var c=(31+29+31+30+31+30+31+31+30+31+b)%7;
    // }else if(a==12){
    //     var c=(31+29+31+30+31+30+31+31+30+31+30+b)%7;
    // }
    
    
    
    // switch(c){
        
    //     case 1:
    //     answer="FRI"
    //     break;
    //     case 2:
    //     answer="SAT"
    //     break;
    //     case 3:
    //     answer="SUN"
    //     break;
    //     case 4:
    //     answer="MON"
    //     break;
    //     case 5:
    //     answer="TUE"
    //     break;
    //     case 6:
    //     answer="WED"
    //     break;
    //     case 0:
    //     answer="THU"
    // }
    console.log(answer);
    
    return answer;
}
solution();