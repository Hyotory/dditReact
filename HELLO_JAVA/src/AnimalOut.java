
public class AnimalOut {
	public static void main(String[] args) {
		Animal ani = new Animal();
		System.out.println("2x:" +ani.x);
		System.out.println("2y:" +ani.y);
		ani.move(10, 10);
		System.out.println("2x:" +ani.x);
		System.out.println("2y:" +ani.y);
	}
}
