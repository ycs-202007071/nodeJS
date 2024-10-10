const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})
app.get('/test', (req, res)=>{
    res.send('I want go home(get)');
})
app.post('/test', (req, res)=>{
    res.send('I want go home(post)');
})

//데이터를 가져오는 주소값
app.get('/board/:boardNo', (req, res)=>{
    //req.params.boardNo값을 통해서 db 조회 후 화면에 출력
    res.send(`${req.params.boardNo}번 게시글 상세보기 화면`);
})

//데이터를 수정하겠다는 주소값
app.put('/board/:boardNo', (req, res)=>{
    //req.params.boardNo값을 통해서 db에서 수정
    res.send(`${req.params.boardNo}번 게시글 업데이트`);
})

//데이터를 삭제하겠다는 주소값
app.delete('/board/:boardNo', (req, res)=>{
    //req.params.boardNo값을 통해서 db에서 삭제
    res.send(`${req.params.boardNo}번 게시글 삭제`);
})

app.listen(3000, ()=>{
    console.log("server start!");
})