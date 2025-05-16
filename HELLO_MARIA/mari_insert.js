const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    port: 3305,
    user: 'root',
    password: 'react',
    database: 'react'
});

conn.connect();

let sql = `
                    insert into emp(e_id, e_name, gen, addr)
                    values ('3', '3', '3', '3')
                        `;

conn.query(sql, function(err, rows, fields) {
    if(err) {
        console.error('SQL오류:',err);
        return;
    }
    console.log('rows',rows.affectedRows);
    console.log('fields',fields);
});

conn.end();

