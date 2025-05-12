
public class Animal {
	int x = 0;
	int y = 0;
	
	public void move(int x, int y) {
		this.x += x;
		this.y += y;
	}
	
	public static void main(String[] args) {
		Animal ani = new Animal();
		System.out.println("x:" +ani.x);
		System.out.println("y:" +ani.y);
		ani.move(10, 10);
		System.out.println("x:" +ani.x);
		System.out.println("y:" +ani.y);
	}
}
