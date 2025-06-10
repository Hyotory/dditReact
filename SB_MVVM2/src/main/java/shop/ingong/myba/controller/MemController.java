package shop.ingong.myba.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import shop.ingong.myba.dto.MemDto;
import shop.ingong.myba.repository.MemRepository;

import java.util.List;

@Controller
@RequestMapping("/member")
@RequiredArgsConstructor
@Slf4j
public class MemController {

    private final MemRepository memRepository;

    // 회원 목록 페이지
    @GetMapping("/list")
    public String memberList(Model model) {
        log.info("회원 목록 페이지 요청");

        try {
            log.info("🔍 Repository 호출 직전");
            List<MemDto> memberList = memRepository.findAll();
            log.info("🔍 Repository 호출 직후 - 개수: {}", memberList.size());

            for (MemDto member : memberList) {
                log.info("🔍 회원: {}", member);
            }

            model.addAttribute("memberList", memberList);

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
        return "redirect:/member/list";
    }

    // 회원 상세 페이지
    @GetMapping("/detail")
    public String memberDetail(@RequestParam("mId") int mId, Model model) {
        log.info("회원 상세 페이지 요청 - mId: {}", mId);

        MemDto member = memRepository.findById(mId).orElse(null);
        model.addAttribute("member", member);

        if (member != null) {
            log.debug("회원 조회 성공 - ID: {}, 이름: {}", member.getEId(), member.getEName());
        } else {
            log.warn("회원 조회 실패 - 존재하지 않는 mId: {}", mId);
        }

        log.info("회원 상세 페이지 처리 완료");
        return "member/detail";
    }
}