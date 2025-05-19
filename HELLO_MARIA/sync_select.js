// mari_select_sync_mysql.js
const SyncMySQL = require('sync-mysql');

    // 동기식 MySQL 연결 생성
    const connection = new SyncMySQL({
        host: 'localhost',
        port: 3305,
        user: 'root',
        password: 'react',
        database: 'react'
    });

    // SQL 쿼리 작성
    const sql = `
        SELECT
            e_id, e_name, gen, addr
        FROM
            emp
    `;

    // 동기식으로 쿼리 실행 (await나 콜백 없이)
    const results = connection.query(sql);

    // 결과 출력
    console.log('조회 결과:');
    console.log(results);

    console.log('처리 완료:', results.length + '개의 레코드가 조회되었습니다.');