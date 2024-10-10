const fs = require("fs");
fs.readFile("text.txt", "utf-8",(err, data)=>{
    if(err){
        console.log(err);
        return;
    }
    // console.log(data);
    fs.writeFile("text2.txt", "날 집에 보내줘", (err)=>{
        if(err){
            console.log("저장 실패");
            return;
        }
        console.log("저장되었습니다.")
    });
});