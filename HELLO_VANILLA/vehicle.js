class Vehicle {
	constructor() {
		this.speed = 0;
	}
	
	excel() {
		this.speed++;
	}
}

if (require.main === module) {
	const ve = new Vehicle();
	console.log(ve.speed);
	ve.excel();
	console.log(ve.speed);
}

module.exports = Vehicle;

