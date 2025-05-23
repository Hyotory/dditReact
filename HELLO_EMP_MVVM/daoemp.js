const mysql = require('sync-mysql');

class DaoEmp {
	constructor() {
		this.conn = new mysql({
			host: 'localhost',
			port: 3305,
			user: 'root',
			password: 'react',
			database: 'react'
		});
	}

	selectList() {
		let sql = `
                    select
                        e_id, e_name, gen, addr
                    from
                        emp
                        `;
		const list = this.conn.query(sql);
		return list;
	}

	selectOne(e_id) {
		let sql = `
                    select
                        e_id, e_name, gen, addr
                    from
                        emp
                    where e_id = '${e_id}'
                        `
		console.log("sql",sql);
		const list = this.conn.query(sql);
		return list[0];
	}

	insert(vo) {
		let sql = `
			INSERT INTO emp (e_id, e_name, gen, addr)
			VALUES ('${vo.e_id}', '${vo.e_name}', '${vo.gen}', '${vo.addr}')
			`;
		console.log("sql",sql);
		const res = this.conn.query(sql);
		return res.affectedRows;
	}

	update(vo) {
		let sql = `
        UPDATE emp
        SET e_name = ?, gen = ?, addr = ?
        WHERE e_id = ?
    `;
		console.log("sql",sql);
		const res = this.conn.query(sql,[vo.e_name, vo.gen, vo.addr, vo.e_id]);
		return res.affectedRows;
	}

	delete(e_id) {
		let sql = `
                        DELETE FROM emp
                        WHERE e_id = '${e_id}'
                        `;
		console.log("sql",sql);
		const res = this.conn.query(sql);
		return res.affectedRows;
	}
}

module.exports = DaoEmp;

// if(require.main === module) {
// 	const de = new DaoEmp();
// 	let list = de.selectList();
// 	console.log(list);
// }

if(require.main === module) {
	const de = new DaoEmp();
	let pvo = {'e_id': 3, 'e_name': 7, 'gen': 6, 'addr': 6};
	let cnt = de.delete('3');
	console.log("cnt",cnt);
}