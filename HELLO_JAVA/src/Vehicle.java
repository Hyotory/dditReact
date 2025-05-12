
public class Vehicle {
	int speed = 0;
	
	public void excel() {
		speed++;
	}
	
	public static void main(String[] args) {
		Vehicle ve = new Vehicle();
		System.out.println("speed: "+ ve.speed);
		ve.excel();
		System.out.println("speed: "+ ve.speed);
	}
}
