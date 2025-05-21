package shop.ingong.demo;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
class MyController {

    @GetMapping("/hello")
    public String hello() {
        return "hello";
    }

    @GetMapping("/welcome")
    public String welcome(Model model) {
        model.addAttribute("title", "Welcome to My Spring Boot App");
        model.addAttribute("message", "This is a demonstration of Mustache templating.");

        List<String> items = Arrays.asList("Item 1", "Item 2", "Item 3");
        model.addAttribute("items", items);

        model.addAttribute("showHeader", true); // For conditional rendering

        return "welcome"; // Corresponds to src/main/resources/templates/index.mustache
    }
}
