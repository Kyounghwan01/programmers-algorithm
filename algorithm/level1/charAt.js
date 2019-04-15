//string,n이 주어지면, n번째 글자를 기준으로 오름차순
//n값을 기준으로 오름차순으로 정렬하는데, 리턴값은 원래대로 해야함


function solution(strings, n) {
    var strings=['sun', 'bed', 'car']
    var n=1;
    var answer = [];

    for(var i=0;i<strings.length;i++){
        for(var j=0;j<strings.length-1;j++){
            if(strings[j].charAt(n)>strings[j+1].charAt(n)){
                var temp=strings[j];
                strings[j]=strings[j+1];
                strings[j+1]=temp;
            }else if(strings[j].charAt(n)==strings[j+1].charAt(n)){
                if(strings[i]>strings[i+1]){
                    temp=strings[i];
                    strings[i]=strings[i+1];
                    strings[i+1]=temp;
                }
            }
        }
    }
    

    console.log(strings);
}


solution();