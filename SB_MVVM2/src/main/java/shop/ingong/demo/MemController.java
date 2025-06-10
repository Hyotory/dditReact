package shop.ingong.demo;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import jakarta.servlet.http.HttpServletResponse;
import shop.ingong.myba.DaoMem;
import shop.ingong.myba.MemVO;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
public class MemController {

	@GetMapping("/mem_list.ajax")
	public Map<String, Object> ajax_emp_list(HttpServletResponse resp) throws IOException {
		DaoMem dm = new DaoMem();
		ArrayList<MemVO> list = dm.selectList();
		
		HashMap<String, Object> map = new HashMap();
		map.put("list", list);
		return map;
	}
	
	@GetMapping("/mem_detail.ajax")
	public Map<String, Object> ajax_emp_detail(@RequestParam String m_id,HttpServletResponse resp) throws IOException {
		
		System.out.println(m_id);
		DaoMem dm = new DaoMem();
		MemVO vo = dm.select(new MemVO(m_id, "", "", ""));
		
		
		HashMap<String, Object> map = new HashMap();
		map.put("vo", vo);
		return map;
	}
	
	@PostMapping("/mem_add.ajax")
	public Map<String, Object> ajax_mem_add(@RequestBody MemVO pvo,HttpServletResponse resp) throws IOException {
		
		System.out.println(pvo);
		DaoMem dm = new DaoMem();
		int cnt = dm.insert(pvo);
		
		
		HashMap<String, Object> map = new HashMap();
		map.put("cnt", cnt);
		return map;
	}
	
	@PostMapping("/mem_mod.ajax")
	public Map<String, Object> ajax_mem_mod(@RequestBody MemVO pvo,HttpServletResponse resp) throws IOException {
		
		System.out.println(pvo);
		DaoMem dm = new DaoMem();
		int cnt = dm.update(pvo);
		
		
		HashMap<String, Object> map = new HashMap();
		map.put("cnt", cnt);
		return map;
	}
	
	@PostMapping("/mem_del.ajax")
	public Map<String, Object> ajax_mem_del(@RequestBody MemVO pvo,HttpServletResponse resp) throws IOException {
		
		System.out.println(pvo);
		DaoMem dm = new DaoMem();
		int cnt = dm.delete(pvo);
		
		
		HashMap<String, Object> map = new HashMap();
		map.put("cnt", cnt);
		return map;
	}
}





