const mysql = require('sync-mysql');
const express = require('express');
const bodyParser = require('body-parser');
const DaoEmp = require("./daoemp.js");

const de = new DaoEmp();
const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());  // JSON 데이터 파싱

app.get('/', (req, res) => {
    res.redirect(`/emp_list.do`);
})

app.get('/emp_list.do', (req, res) => {
    let myList = de.selectList();
    res.render('emp.html', {myList: myList});
})

app.get('/emp_detail.do', (req, res) => {
    const e_id = req.query.e_id;
    console.log('e_id: ',e_id);
    let vo = de.selectOne(e_id);
    console.log("vo:",vo);
    res.render('emp_detail.html', {vo: vo});
})

app.get('/emp_mod.do', (req, res) => {
    const e_id = req.query.e_id;
    console.log('e_id: ',e_id);
    let emp = de.selectOne(e_id);
    console.log("emp:",emp);
    res.render('emp_mod.html', {emp: emp});
});

app.post('/emp_mod_act.do', (req, res) => {
    const { e_id, e_name, gen, addr } = req.body;
    const vo = { e_id, e_name, gen, addr };
    console.log("vo:",vo);
    let result = de.update(vo);
    res.render('emp_mod_act.html', {
        success: result > 0,
        message: result > 0 ? '' : '수정 실패',
        e_id: e_id
    });
});

app.post('/emp_del_act.do', (req, res) => {
    const e_id = req.body.e_id;
    console.log('e_id: ',e_id);
    let result = de.delete(e_id);

    res.render('emp_del_act.html', {
        success: result > 0,
        message: result > 0 ? '' : '삭제실패',
    });
})

app.get('/emp_add.do', (req, res) => {
    res.render('emp_add.html');
});

app.post('/emp_add_act.do', (req, res) => {
    const { e_id, e_name, gen, addr } = req.body;
    const vo = { e_id, e_name, gen, addr };
    console.log("vo:",vo);
    let result = de.insert(vo);

    res.render('emp_add_act.html', {
        success: result > 0,
        message: result > 0 ? '' : '수정 실패',
        e_id: e_id
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