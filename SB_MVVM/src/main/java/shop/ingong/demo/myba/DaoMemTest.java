package shop.ingong.demo.myba;

import java.util.List;

public class DaoMemTest {
	public static void main(String[] args) {
		DaoMem dm = new DaoMem();

		// 전체 조회 테스트
		System.out.println("===== 전체 회원 조회 =====");
		List<MemVO> list = dm.selectList();
		for (MemVO vo : list) {
			System.out.println("ID: " + vo.getM_id() + ", 이름: " + vo.getM_name() +
					", 전화: " + vo.getTel() + ", 이메일: " + vo.getEmail());
		}

		// 개별 조회 테스트 (ID가 1인 회원)
		System.out.println("\n===== ID=1 회원 조회 =====");
		MemVO searchVo = new MemVO();
		searchVo.setM_id(1);
		MemVO result = dm.select(searchVo);
		if (result != null) {
			System.out.println("찾은 회원: " + result.getM_name());
		} else {
			System.out.println("해당 ID의 회원이 없습니다.");
		}
	}
}