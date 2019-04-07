//this가 실행되는 4가지 방법

/*
    1. 일반 함수 실행 방식
*/

//example 1

function foo(){
    console.log(this); //this == global object : 브러우저 상에서 윈도우 객체 
}
foo();

//example 2

'use strict' //여러가지 보안을 엄격하게 

var name="we";
function a(){
    console.log(this.name);
}
a();