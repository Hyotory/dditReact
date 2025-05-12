
public class Maker extends Vehicle {
	
	String maker_name = "현대";
	
	public Maker(String mn) {
		maker_name = mn;
	}
	
	public void buyACar(String mn) {
		maker_name = mn;
	}
	
	public static void main(String[] args) {
		Maker mk = new Maker("기아");
		System.out.println("speed: "+mk.speed);
		System.out.println("maker_name: "+mk.maker_name);
		mk.excel();
		mk.buyACar("포르쉐");
		System.out.println("speed: "+mk.speed);
		System.out.println("maker_name: "+mk.maker_name);
	}
}
