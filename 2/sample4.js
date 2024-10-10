//test 함수를 만들어서 1초뒤에 콜백함수가 실행되도록
test(()=>{console.log("첫번째 함수")}, 1000);
function test(x,y){
    setTimeout(x,y);
}
