package shop.ingong.demo;

import lombok.extern.slf4j.Slf4j;

import java.io.IOException;
import java.io.PrintWriter;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import jakarta.servlet.http.HttpServletResponse;

@Slf4j
@Controller
class MyController {

    @GetMapping("/")
    public void index(HttpServletResponse resp) throws IOException {
    	PrintWriter out = resp.getWriter();
    	out.println("HELLO ASDFF");
    }
    
//    @GetMapping("/thymeleaf")
//    public String thymeLeaf(Model model) {
//        // 모델에 데이터 추가
//        model.addAttribute("message", "Welcome Thymeleaf!");
//        model.addAttribute("title", "Thymeleaf 예제");
//        
//        // templates/thyme.html을 반환
//        return "thyme";
//    }
    
    	
    @GetMapping("/test")
    public String test(Model model) {
        model.addAttribute("message", "안녕하세요! JSP 페이지입니다.");
        model.addAttribute("title", "Spring Boot + JSP");
        model.addAttribute("currentTime", new java.util.Date());
        
        // /WEB-INF/views/test.jsp 로 이동
        return "index";
    }
    
}
