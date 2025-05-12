class Animal {
	constructor() {
		this.x = 0;
		this.y = 0;
	}

	move(x, y) {
		this.x = x;
		this.y = y;
	}
}

function main() {
	const ani = new Animal();
	console.log("x:", ani.x);
	console.log("y:", ani.y);
	ani.move(5,5);
	console.log("x:", ani.x);
	console.log("y:", ani.y);
}

if (require.main === module) {
	main();
}

module.exports = Animal;
	


/*class Human extends Animal {
	constructor() {
		super();
		this.job = "student";
	}

	chibbo(job) {
		this.job = job;
	}
}

function main() {


}*/