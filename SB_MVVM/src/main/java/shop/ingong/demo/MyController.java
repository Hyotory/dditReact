package shop.ingong.demo;

import lombok.extern.slf4j.Slf4j;

import java.io.IOException;
import java.io.PrintWriter;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import jakarta.servlet.http.HttpServletResponse;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.RedirectView;

@Slf4j
@Controller
class MyController {

    @GetMapping("/")
    public ModelAndView index(HttpServletResponse resp) {
        RedirectView rv = new RedirectView("/mem.html");
        return new ModelAndView(rv);
    }
}