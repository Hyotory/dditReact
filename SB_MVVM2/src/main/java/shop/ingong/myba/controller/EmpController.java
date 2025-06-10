package shop.ingong.myba.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import shop.ingong.myba.dto.EmpDto;
import shop.ingong.myba.repository.EmpRepository;

import java.util.List;

@Controller
@RequestMapping("/emp")
@RequiredArgsConstructor
@Slf4j
public class EmpController {

    private final EmpRepository empRepository;

    // 회원 목록 페이지
    @GetMapping("/list")
    public String empList(Model model) {
        log.info("회원 목록 페이지 요청");

        try {
            log.info("🔍 Repository 호출 직전");
            List<EmpDto> empList = empRepository.findAll();
            log.info("🔍 Repository 호출 직후 - 개수: {}", empList.size());

            for (EmpDto Emp : empList) {
                log.info("🔍 회원: {}", Emp);
            }

            model.addAttribute("memberList", empList);

        } catch (Exception e) {
            log.error("❌ 오류 발생: ", e);
            e.printStackTrace();
        }

        log.info("회원 목록 페이지 처리 완료");
        return "member/list";
    }

    // 메인 페이지에서 목록으로 리다이렉트
    @GetMapping("/")
    public String redirectToList() {
        log.info("메인 페이지 접속 -> 회원 목록으로 리다이렉트");
        return "redirect:/emp/list";
    }

    // 회원 상세 페이지
    @GetMapping("/detail")
    public String empDetail(@RequestParam("eId") int eId, Model model) {
        log.info("회원 상세 페이지 요청 - eId: {}", eId);

        EmpDto emp = empRepository.findById(eId).orElse(null);
        model.addAttribute("emp", emp);

        if (emp != null) {
            log.debug("회원 조회 성공 - ID: {}, 이름: {}", emp.getEId(), emp.getEName());
        } else {
            log.warn("회원 조회 실패 - 존재하지 않는 mId: {}", eId);
        }

        log.info("회원 상세 페이지 처리 완료");
        return "emp/detail";
    }
}