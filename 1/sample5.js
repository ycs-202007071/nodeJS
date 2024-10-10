function fun1(callback){
    setTimeout(()=>{
        console.log(1);
        callback();
    }, 1000);
}
function fun2(callback){
    setTimeout(()=>{
        console.log(2);
        callback();
    }, 1000);
}
function fun3(callback){
    setTimeout(()=>{
        console.log(3);
        callback();
    }, 1000);
}
function fun4(callback){
    setTimeout(()=>{
        console.log(4);
        callback();
    }, 1000);
}

fun1(()=>{
    fun2(()=>{
        fun3(()=>{
            fun4(()=>{
                setTimeout(()=>{
                    console.log("끝");
                }, 1000);
            })
        });
    });
});


const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const myAsyncFunction = async () => {
    await delay(1000);
    console.log(1);
    
    await delay(1000);
    console.log(2);
    
    await delay(1000);
    console.log(3);
    
    await delay(1000);
    console.log(4);
};

myAsyncFunction();
