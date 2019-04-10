// //n을 입력 받고, 각 자릿수를 큰것부터 작은 순으로 하고 리턴

function sol(){
    var num =118372;
    var a=0;
    var answer=0;

    a=(num+"").split('');
    // a=String(num).split('');
    for(var i=0;i<a.length;i++){
        if(a[i]<a[i+1]){
            var temp=a[i];
            a[i]=a[i+1];
            a[i+1]=temp;
            i=-1;
        }
    }
    answer=a.join('');
    console.log(+answer);
}
sol();
// function solution(n) {
//     const newN = n + "";
//     const newArr = newN
//       .split("")
//       .sort()
//       .reverse()
//       .join("");
    
//     return +newArr;
    
//   }

//   solution();