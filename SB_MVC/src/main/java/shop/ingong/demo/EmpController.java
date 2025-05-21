package shop.ingong.demo;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import shop.ingong.myba.DaoEmp;
import shop.ingong.myba.EmpVO;

import java.util.ArrayList;

@Controller
public class EmpController {

    @GetMapping("/emp_list.do")
    public String do_emp_list(Model model) {
        // Create DAO instance
        DaoEmp daoEmp = new DaoEmp();

        // Get employee list from database
        ArrayList<EmpVO> empList = daoEmp.selectList();

        // Add list to the model to make it available in the view
        model.addAttribute("empList", empList);

        return "emp_list";
    }
}