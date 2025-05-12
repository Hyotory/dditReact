const Animal = require('./ooptest.js');
const Human = require('./ooptest2.js');

if(require.main === module) {
	const ani = new Animal();
	console.log("x:", ani.x);
	console.log("y:", ani.y);
	ani.move(5,5);
	console.log("x:", ani.x);
	console.log("y:", ani.y);
	
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