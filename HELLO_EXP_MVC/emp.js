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

app.get('/emp_detail.do/:id', (req, res) => {
    const e_id = req.params.id;
    let sql = `
                    select
                        e_id, e_name, gen, addr
                    from
                        emp
                    where e_id = ?
                        `;

    conn.query(sql, [e_id], function(err, rows, fields) {
        if(err) {
            console.log('DB오류 : ',err);
            return res.status(500).send('DB오류');
        }
        if(rows.length === 0) {
            return res.status(404).send('해당하는 행을 찾을 수 없다.');
        }
        console.log("DB에서 가져온 데이터:", rows);
        res.render('emp_detail.ejs', { emp: rows[0] });
    })
});

app.get('/emp_mod.do/:id', (req, res) => {
    const e_id = req.params.id;
    let sql = `
                        select
                            e_id, e_name, gen, addr
                        from
                            emp
                        where e_id = ?
                        `;

    conn.query(sql, [e_id], function(err, rows, fields) {
        if(err) {
            console.log('DB오류 : ',err);
            return res.status(500).send('DB오류');
        }
        if(rows.length === 0) {
            return res.status(404).send('해당하는 행을 찾을 수 없다.');
        }
        console.log("DB에서 가져온 데이터:", rows);
        res.render('emp_mod.ejs', { emp: rows[0] });
    })
});

app.post('/emp_mod_act.do', (req, res) => {
    const { e_id, e_name, gen, addr } = req.body;
    let sql = `
        UPDATE emp
        SET e_name = ?, gen = ?, addr = ?
        WHERE e_id = ?
    `;

    conn.query(sql, [e_name, gen, addr, e_id], function(err, result) {
        if(err) {
            console.log('DB오류 : ',err);
            return res.render('emp_mod_act.ejs', {
                success: false,
                message: err.message,
                e_id: e_id
            });
        }

        res.render('emp_mod_act.ejs', {
            success: true,
            message: '',
            e_id: e_id
        });
    });
});

app.get('/emp_del_act.do/:id', (req, res) => {
    const e_id = req.params.id;

    let sql = `
                        DELETE FROM emp
                        WHERE e_id = ?
                        `;

    conn.query(sql, [e_id], function(err, result) {
        if(err) {
        console.log('DB<UNK> : ',err);
        return res.status(500).send('DB<UNK>');
        }
        res.render('emp_del_act.ejs', {
            success: true,
            message: '',
            e_id: e_id
        });
    });
});

app.get('/emp_add.do', (req, res) => {
    res.render('emp_add.ejs');
});

app.post('/emp_add_act.do', (req, res) => {
    const { e_id, e_name, gen, addr } = req.body;

    let sql = `
    INSERT INTO emp (e_id, e_name, gen, addr)
    VALUES (?, ?, ?, ?)
    `;

    conn.query(sql, [e_id, e_name, gen, addr], function(err, result) {
        if(err) {
            console.log('DB오류 : ', err);
            return res.render('emp_add_act.ejs', {
                success: false,
                message: err.message,
                e_id: e_id
            });
        }

        res.render('emp_add_act.ejs', {
            success: true,
            message: '',
            e_id: e_id
        });
    });
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

