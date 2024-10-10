const sum = function (x,y){
    return x+y;
};
console.log(sum(10, 20));

const sum2 = (x,y)=>{
    return x+y;
}
console.log(sum2(10,20));

const sum2_1 = (x,y)=> x+y;
console.log(sum2_1(10,20));


const print = name=>console.log(`${name}님 안녕하세요.`);
