const fs = require("fs");
fs.readdir("./", (err, files)=>{
    if(err){
        console.log(err + "오류!");
        return;
    }
    console.log(files);
});