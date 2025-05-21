package shop.ingong.demo;

import jakarta.servlet.http.HttpServletRequest;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import shop.ingong.dto.Store;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
@Slf4j
@Controller
class MyController {

    @GetMapping("/hello")
    public String hello() {
        return "hello";
    }

    @GetMapping("/welcome")
    public String welcome(Model model) {
        String a = "홍길동";
        String[] b = {"전우치", "이순신"};
        ArrayList<Store> c = new ArrayList<>();
        c.add(new Store("1", "1"));
        c.add(new Store("2", "2"));
        model.addAttribute("c", c);
        model.addAttribute("a", a);
        model.addAttribute("b", b);
        return "welcome";
    }

    @GetMapping("/param")
    public String param(@RequestParam(required = false) String menu, Store st, HttpServletRequest req) {
        System.out.println("menu: " + menu);
        System.out.println("st: " + st);
        System.out.println("req: " + req.getParameter("menu"));
        return "param" + menu;
    }

    @PostMapping("/post")
    public String post(@RequestParam(required = false) String menu, Store st, HttpServletRequest req) {
//        System.out.println("menu: " + menu);
//        System.out.println("st: " + st);
//        System.out.println("req: " + req.getParameter("menu"));
        log.info("menu: " + menu);
        log.info("st: " + st);
        log.info("req: " + req.getParameter("menu"));
        return "post";
    }
}
