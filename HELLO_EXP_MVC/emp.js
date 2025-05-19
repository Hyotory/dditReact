// Express 모듈 불러오기
const express = require('express');
const path = require('path');  // path 모듈 추가
const mysql = require('mysql');

// Express 애플리케이션 생성
const app = express();

// 포트 설정 (환경 변수가 있으면 그 값 사용, 없으면 3000 사용)
const PORT = process.env.PORT || 3000;

const bodyParser = require('body-parser');

// POST 요청의 본문을 파싱하기 위한 미들웨어 설정
// app.use(express.urlencoded({ extended: true }));  // HTML 폼 데이터 파싱
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());  // JSON 데이터 파싱

// 정적 파일 제공 설정 (옵션)
app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', __dirname);
app.engine('html', require('ejs').renderFile);

const conn = mysql.createConnection({
    host: 'localhost',
    port: 3305,
    user: 'root',
    password: 'react',
    database: 'react'
});

app.get('/emp_list.do', (req, res) => {
    let sql = `
                    select
                        e_id, e_name, gen, addr
                    from
                        emp
                        `;

    conn.query(sql, function(err, rows, fields) {
        if(err) {
            console.log('DB오류 : ',err);
            return res.status(500).send('DB오류');
        }
        console.log("DB에서 가져온 데이터:", rows);
        res.render('emp_list.ejs', { empList: rows});
    })
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

