
// Express 모듈 불러오기
const express = require('express');
const path = require('path');  // path 모듈 추가

// Express 애플리케이션 생성
const app = express();

// 포트 설정 (환경 변수가 있으면 그 값 사용, 없으면 3000 사용)
const PORT = process.env.PORT || 3000;

const bodyParser = require('body-parser');


// 루트 경로('/')에 대한 GET 요청 처리
app.get('/', (req, res) => {
    res.send('Hello CHAEUNWOO!');
});

app.get('/param', (req, res) => {
    const menu = req.query.menu;
    console.log("menu",menu);
    res.send(`PARAM: ${menu}`);
});

// POST 요청의 본문을 파싱하기 위한 미들웨어 설정
// app.use(express.urlencoded({ extended: true }));  // HTML 폼 데이터 파싱
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());  // JSON 데이터 파싱



app.post('/post', (req, res) => {
    const menu = req.body.menu;
    console.log("POST menu", menu);
    res.send(`POST: ${menu}`);
});

// 정적 파일 제공 설정 (옵션)
app.use(express.static('public'));

// app.get('/forw', (req, res) => {
//     res.sendFile(path.join(__dirname, 'forw.html'));
// })

app.set('view engine', 'ejs');
app.set('views', __dirname);

app.get('/forw', (req, res) => {
    let a = "홍길동";
    let arr = ["전우치", "이순신", "애순이"];
    let myList = [
        {'e_id':1, 'e_name':1, 'gen':1, 'addr':1},
        {'e_id':2, 'e_name':2, 'gen':2, 'addr':2},
        {'e_id':3, 'e_name':3, 'gen':3, 'addr':3},
    ]

    // sendFile 대신 render 사용
    res.render('forw', { name: a, array: arr, myList: myList });
});

// 서버 시작
app.listen(PORT, () => {
    console.log(`서버가 포트 ${PORT}에서 실행 중입니다.`);
});