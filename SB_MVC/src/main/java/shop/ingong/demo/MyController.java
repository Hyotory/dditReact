package shop.ingong.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
class MyController {

    @GetMapping("/hello")
    public String hello() {
        return "hello";
    }
}
