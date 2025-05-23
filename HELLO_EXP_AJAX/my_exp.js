const mysql = require('sync-mysql');
const express = require('express');
const bodyParser = require('body-parser');

const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'static')));

app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());  // JSON 데이터 파싱

app.get('/', (req, res) => {
    res.redirect('/index.do');
});
app.get('/index.do', (req, res) => {
    res.render('index.html');
});

app.post('/jquery.ajax', (req, res) => {
// app.get('/jquery.ajax', (req, res) => {

    console.log(req.body.menu);
    res.json({ message: 'Hello KARINA!' }); // JSON 형식으로 응답
});
app.post('/axios.ajax', (req, res) => {

    console.log(req.body.params.menu);
    // console.log(req.body.menu);
    res.json({ message: 'Hello WINTER!' }); // JSON 형식으로 응답
});
app.post('/fetch.ajax', (req, res) => {
    console.log(req.body.menu);
    // console.log(req.query.menu); getqkdtlr
    res.json({ message: 'Hello NINGNING!' }); // JSON 형식으로 응답
});
app.get('/one.ajax', (req, res) => {
    res.json({ cnt: 1 });
});
app.get('/two.ajax', (req, res) => {
    res.json({ cnt: 2 });
});

// 서버 시작
app.listen(PORT, () => {
    console.log(`서버가 포트 ${PORT}에서 실행 중입니다.`);
});

// 프로세스 종료 시 DB 연결 종료
process.on('SIGINT', () => {
    conn.end();
    process.exit();
});