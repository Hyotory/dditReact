package shop.ingong.myba;

import java.util.ArrayList;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;

public class DaoEmp {
	SqlSessionFactory sqlMapper = SqlSessionFactoryManager.getSqlSessionFactory();

	public ArrayList<EmpVO> selectList() {
		return (ArrayList) sqlMapper.openSession().selectList("emp.selectList");
	}

	public EmpVO select(EmpVO vo) {
		return sqlMapper.openSession().selectOne("emp.select",vo);
	}

	public int insert(EmpVO vo) {
		SqlSession session = sqlMapper.openSession();
		int cnt = session.update("emp.insert",vo);
		session.commit();
		session.close();
		return cnt;
	}

	public int update(EmpVO vo) {
		return sqlMapper.openSession(true).update("emp.update",vo);
	}

	public int delete(EmpVO vo) {
		return sqlMapper.openSession(true).update("emp.delete",vo);
	}


}
