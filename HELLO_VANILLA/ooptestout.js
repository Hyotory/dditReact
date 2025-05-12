const Animal = require('./ooptest.js');

if(require.main === module) {
	const ani = new Animal();
	console.log("x:", ani.x);
	console.log("y:", ani.y);
	ani.move(5,5);
	console.log("x:", ani.x);
	console.log("y:", ani.y);
}