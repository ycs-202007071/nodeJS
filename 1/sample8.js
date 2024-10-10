//promise(pending(작업중), fulfilled(성공상태), rejected(실패 상태))

var promise = new Promise((resolve, reject)=>{
    var flg = true;
    setTimeout(()=>{
        if(flg){
            resolve("성공");
        }else{
            reject("실패");
        }
    },1000);
});

promise
    .then((data)=>{
        console.log(data);
    })
    .catch((err)=>{
        console.log(err);
    })