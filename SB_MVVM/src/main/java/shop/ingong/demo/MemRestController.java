package shop.ingong.demo;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import jakarta.servlet.http.HttpServletResponse;
import org.springframework.web.bind.annotation.*;

import shop.ingong.demo.myba.DaoMem;
import shop.ingong.demo.myba.MemVO;

@RestController
@RequestMapping("/api/mem")
public class MemRestController {

    private DaoMem daoMem = new DaoMem();

    // 회원 목록 조회
    @GetMapping("/list")
    public Map<String, Object> getMemList() {
        Map<String, Object> result = new HashMap<>();

        try {
            List<MemVO> memList = daoMem.selectList();
            result.put("success", true);
            result.put("list", memList);
            result.put("message", "회원 목록 조회 성공");
        } catch (Exception e) {
            e.printStackTrace();
            result.put("success", false);
            result.put("list", null);
            result.put("message", "회원 목록 조회 실패: " + e.getMessage());
        }

        return result;
    }

    // 회원 상세 조회
    @GetMapping("/detail")
    public Map<String, Object> getMemDetail(@RequestParam("m_id") Integer m_id) {
        Map<String, Object> result = new HashMap<>();

        try {
            MemVO vo = new MemVO();
            vo.setM_id(m_id);

            MemVO member = daoMem.select(vo);

            if (member != null) {
                result.put("success", true);
                result.put("member", member);
                result.put("message", "회원 조회 성공");
            } else {
                result.put("success", false);
                result.put("member", null);
                result.put("message", "해당 회원을 찾을 수 없습니다.");
            }
        } catch (Exception e) {
            e.printStackTrace();
            result.put("success", false);
            result.put("member", null);
            result.put("message", "회원 조회 실패: " + e.getMessage());
        }

        return result;
    }

    // 회원 추가
    @PostMapping("/add")
    public Map<String, Object> addMem(@RequestBody MemVO memVO) {
        Map<String, Object> result = new HashMap<>();

        try {
            // 유효성 검사
            if (memVO.getM_id() == null || memVO.getM_name() == null ||
                    memVO.getTel() == null || memVO.getEmail() == null) {
                result.put("success", false);
                result.put("message", "필수 정보가 누락되었습니다.");
                return result;
            }

            int cnt = daoMem.insert(memVO);

            if (cnt > 0) {
                result.put("success", true);
                result.put("cnt", cnt);
                result.put("message", "회원 추가 성공");
            } else {
                result.put("success", false);
                result.put("cnt", 0);
                result.put("message", "회원 추가 실패");
            }
        } catch (Exception e) {
            e.printStackTrace();
            result.put("success", false);
            result.put("cnt", 0);
            result.put("message", "회원 추가 중 오류 발생: " + e.getMessage());
        }

        return result;
    }

    // 회원 수정
    @PostMapping("/update")
    public Map<String, Object> updateMem(@RequestBody MemVO memVO) {
        Map<String, Object> result = new HashMap<>();

        try {
            // 유효성 검사
            if (memVO.getM_id() == null || memVO.getM_name() == null ||
                    memVO.getTel() == null || memVO.getEmail() == null) {
                result.put("success", false);
                result.put("cnt", 0);
                result.put("message", "필수 정보가 누락되었습니다.");
                return result;
            }

            int cnt = daoMem.update(memVO);

            result.put("success", cnt > 0);
            result.put("cnt", cnt);
            result.put("message", cnt > 0 ? "회원 수정 성공" : "수정할 회원이 없습니다.");

        } catch (Exception e) {
            e.printStackTrace();
            result.put("success", false);
            result.put("cnt", 0);
            result.put("message", "회원 수정 중 오류 발생: " + e.getMessage());
        }

        return result;
    }

    // 회원 삭제
    @PostMapping("/delete")
    public Map<String, Object> deleteMem(@RequestBody Map<String, Object> params) {
        Map<String, Object> result = new HashMap<>();

        try {
            Integer m_id = (Integer) params.get("m_id");

            if (m_id == null) {
                result.put("success", false);
                result.put("cnt", 0);
                result.put("message", "회원 ID가 필요합니다.");
                return result;
            }

            MemVO vo = new MemVO();
            vo.setM_id(m_id);

            int cnt = daoMem.delete(vo);

            result.put("success", cnt > 0);
            result.put("cnt", cnt);
            result.put("message", cnt > 0 ? "회원 삭제 성공" : "삭제할 회원이 없습니다.");

        } catch (Exception e) {
            e.printStackTrace();
            result.put("success", false);
            result.put("cnt", 0);
            result.put("message", "회원 삭제 중 오류 발생: " + e.getMessage());
        }

        return result;
    }
}