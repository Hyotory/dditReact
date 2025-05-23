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

app.get('/emp_detail.ajax', (req, res) => {
    try{
        const e_id = req.query.e_id;
        console.log('e_id: ',e_id);

        let emp = de.selectOne(e_id);
        console.log("emp:",emp);

        res.json ({
            success: true,
                emp: emp,
            message: "성공",
        });
    } catch(e) {
        console.log(e);
    }
})

app.post('/emp_mod.ajax', (req, res) => {
    try{
        const { e_id, e_name, gen, addr } = req.body;

        const empVo = {
            e_id: e_id,
            e_name: e_name,
            gen: gen,
            addr: addr,
        }
        console.log('추가된 empVo 정보: ',empVo);

        // 실제 업데이트 실행
        const result = de.update(empVo);

        res.json({
            success: true,
            message: "직원 정보가 성공적으로 수정되었습니다.",
            affectedRows: result
        });

    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: "수정 중 오류가 발생했습니다."
        });
    }
})

app.post('/emp_add.ajax', (req, res) => {
    try{
        const { e_id, e_name, gen, addr } = req.body;

        const empVo = {
            e_id: e_id,
            e_name: e_name,
            gen: gen,
            addr: addr,
        }
        console.log('추가된 empVo 정보: ',empVo);

        // 실제 업데이트 실행
        const result = de.insert(empVo);

        res.json({
            success: true,
            message: "직원 정보가 성공적으로 추가되었습니다.",
            affectedRows: result
        });

    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: "수정 중 오류가 발생했습니다."
        });
    }
})

app.post('/emp_del.ajax', (req, res) => {
    try{
        const e_id = req.body.e_id;
        console.log('e_id: ',e_id);

        let result = de.delete(e_id);
        console.log("res:",result);

        res.json({
            success: true,
            message: "직원 정보가 성공적으로 삭제되었습니다.",
            affectedRows: result
        });

    } catch(e) {
        console.log(e);
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