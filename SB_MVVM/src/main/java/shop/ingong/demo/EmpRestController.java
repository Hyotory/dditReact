package shop.ingong.demo;

import org.springframework.web.bind.annotation.*;
import shop.ingong.demo.myba.DaoEmp;
import shop.ingong.demo.myba.EmpVO;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/emp")
@CrossOrigin(origins = "http://localhost:5173")
public class EmpRestController {

    private DaoEmp daoEmp = new DaoEmp();

    // 직원 목록 조회
    @GetMapping("/list")
    public Map<String, Object> getEmpList() {
        Map<String, Object> result = new HashMap<>();

        try {
            List<EmpVO> empList = daoEmp.selectList();
            result.put("success", true);
            result.put("list", empList);
            result.put("message", "직원 목록 조회 성공");
        } catch (Exception e) {
            e.printStackTrace();
            result.put("success", false);
            result.put("list", null);
            result.put("message", "직원 목록 조회 실패: " + e.getMessage());
        }

        return result;
    }

    // 직원 상세 조회
    @GetMapping("/detail")
    public Map<String, Object> getEmpDetail(@RequestParam("e_id") Integer e_id) {
        Map<String, Object> result = new HashMap<>();

        try {
            EmpVO vo = new EmpVO();
            vo.setE_id(e_id);

            EmpVO emp = daoEmp.select(vo);

            if (emp != null) {
                result.put("success", true);
                result.put("emp", emp);
                result.put("message", "직원 조회 성공");
            } else {
                result.put("success", false);
                result.put("emp", null);
                result.put("message", "해당 직원을 찾을 수 없습니다.");
            }
        } catch (Exception e) {
            e.printStackTrace();
            result.put("success", false);
            result.put("emp", null);
            result.put("message", "직원 조회 실패: " + e.getMessage());
        }

        return result;
    }

    // 직원 추가 (시퀀스 사용)
    @PostMapping("/add")
    public Map<String, Object> addEmp(@RequestBody EmpVO empVO) {
        Map<String, Object> result = new HashMap<>();

        try {
            // 유효성 검사 (e_id는 시퀀스로 자동 생성되므로 제외)
            if (empVO.getE_name() == null || empVO.getGen() == null ||
                    empVO.getAddr() == null) {
                result.put("success", false);
                result.put("message", "필수 정보가 누락되었습니다.");
                return result;
            }

            int cnt = daoEmp.insert(empVO);

            if (cnt > 0) {
                result.put("success", true);
                result.put("cnt", cnt);
                result.put("message", "직원 추가 성공");
            } else {
                result.put("success", false);
                result.put("cnt", 0);
                result.put("message", "직원 추가 실패");
            }
        } catch (Exception e) {
            e.printStackTrace();
            result.put("success", false);
            result.put("cnt", 0);
            result.put("message", "직원 추가 중 오류 발생: " + e.getMessage());
        }

        return result;
    }

    // 직원 수정
    @PostMapping("/update")
    public Map<String, Object> updateEmp(@RequestBody EmpVO empVO) {
        Map<String, Object> result = new HashMap<>();

        try {
            // 유효성 검사
            if (empVO.getE_id() == null || empVO.getE_name() == null ||
                    empVO.getGen() == null || empVO.getAddr() == null) {
                result.put("success", false);
                result.put("cnt", 0);
                result.put("message", "필수 정보가 누락되었습니다.");
                return result;
            }

            int cnt = daoEmp.update(empVO);

            result.put("success", cnt > 0);
            result.put("cnt", cnt);
            result.put("message", cnt > 0 ? "직원 수정 성공" : "수정할 직원이 없습니다.");

        } catch (Exception e) {
            e.printStackTrace();
            result.put("success", false);
            result.put("cnt", 0);
            result.put("message", "직원 수정 중 오류 발생: " + e.getMessage());
        }

        return result;
    }

    // 직원 삭제
    @PostMapping("/delete")
    public Map<String, Object> deleteEmp(@RequestBody Map<String, Object> params) {
        Map<String, Object> result = new HashMap<>();

        try {
            // String으로 받아서 Integer로 변환
            Object e_idObj = params.get("e_id");
            Integer e_id = null;

            if (e_idObj != null) {
                if (e_idObj instanceof String) {
                    e_id = Integer.parseInt((String) e_idObj);
                } else if (e_idObj instanceof Integer) {
                    e_id = (Integer) e_idObj;
                }
            }

            if (e_id == null) {
                result.put("success", false);
                result.put("cnt", 0);
                result.put("message", "직원 ID가 필요합니다.");
                return result;
            }

            EmpVO vo = new EmpVO();
            vo.setE_id(e_id);

            int cnt = daoEmp.delete(vo);

            result.put("success", cnt > 0);
            result.put("cnt", cnt);
            result.put("message", cnt > 0 ? "직원 삭제 성공" : "삭제할 직원이 없습니다.");

        } catch (Exception e) {
            e.printStackTrace();
            result.put("success", false);
            result.put("cnt", 0);
            result.put("message", "직원 삭제 중 오류 발생: " + e.getMessage());
        }

        return result;
    }
}