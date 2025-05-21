package shop.ingong.myba;

import java.util.ArrayList;

public class DaoEmpTest {
	public static void main(String[] args) {
		DaoEmp de = new DaoEmp();
		ArrayList<EmpVO> list = de.selectList();
		for (EmpVO vo : list) {
			System.out.println(vo.getE_id());
		}




	}

}
