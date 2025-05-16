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
                    select
                        e_id, e_name, gen, addr
                    from
                        emp
                        `;


conn.query(sql, function(err, rows, fields) {
    console.log('rows',rows);
});

conn.end();

