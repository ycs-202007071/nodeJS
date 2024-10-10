// 아래코드는 C:\Users\tj-bu-708-00\Desktop\nodeJS\2\qwer\text.txt라고 출력
const path = require("path");
var txtPath = path.join(__dirname, "qwer", "text.txt");
console.log(txtPath);

//아래와 주석은 같다. C:\Users\tj-bu-708-00\Desktop\nodeJS\2\qwer 라고 출력됨
// var dirPath = path.dirname(__filename);
var dirPath = path.dirname("C:\\Users\\tj-bu-708-00\\Desktop\\nodeJS\\2\\qwer\\text.txt");
console.log(dirPath);


//아래는 마지막 텍스트 파일만 text.txt라고 출력.
var filename = path.basename("C:\\Users\\tj-bu-708-00\\Desktop\\nodeJS\\2\\qwer\\text.txt", ".txt");
console.log(filename);
