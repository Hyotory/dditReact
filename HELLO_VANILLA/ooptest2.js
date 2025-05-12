const Animal = require('./ooptest.js');

class Human extends Animal {
	constructor() {
		super();
		this.job = "student";
	}
	
	chibbo(job) {
		this.job = job;
	}
}

function main() {
	const hum = new Human();
	console.log(hum.x);
	console.log(hum.y);
	console.log(hum.job);
	hum.move(100, 50);
	hum.chibbo("programmer");
	console.log(hum.x);
	console.log(hum.y);
	console.log(hum.job);
}

// 이 파일이 직접 실행될 때만 main 함수 실행
if (require.main === module) {
  main();
}

module.exports = Human;