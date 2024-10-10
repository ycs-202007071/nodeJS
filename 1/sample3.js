function print1(){
    console.log("첫번재 출력");
}
setTimeout(function() {console.log("뭘까")}, 3000);
setTimeout(()=>{console.log("뭔데")}, 3000);
