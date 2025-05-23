const mysql = require('sync-mysql');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios'); // axios 추가
const DaoEmp = require("./daoemp.js");

const de = new DaoEmp();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'static')));

app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());  // JSON 데이터 파싱

app.get('/', (req, res) => {
    res.send('HELLO CHAENWOO');
})

app.get('/emp_list.ajax', (req, res) => {
    try{
        let empList = de.selectList();
        console.log(empList);
        res.json({
            success: true,
            empList: empList,
            message: "성공",
        });
    } catch (error) {
        console.log(error);
    }
})


// 서버 시작
app.listen(PORT, () => {
    console.log(`서버가 포트 ${PORT}에서 실행 중입니다.`);
});

// 프로세스 종료 시 DB 연결 종료
process.on('SIGINT', () => {
    conn.end();
    process.exit();
});