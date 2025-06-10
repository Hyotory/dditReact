package shop.ingong.demo.myba;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;

import java.util.List;

public class DaoEmp {
	private SqlSessionFactory sqlMapper = SqlSessionFactoryManager.getSqlSessionFactory();

	public List<EmpVO> selectList() {
		SqlSession session = null;
		try {
			session = sqlMapper.openSession();
			return session.selectList("emp.selectList");
		} finally {
			if (session != null) session.close();
		}
	}

	public EmpVO select(EmpVO vo) {
		SqlSession session = null;
		try {
			session = sqlMapper.openSession();
			return session.selectOne("emp.select", vo);
		} finally {
			if (session != null) session.close();
		}
	}

	public int insert(EmpVO vo) {
		SqlSession session = null;
		try {
			session = sqlMapper.openSession(false);
			int cnt = session.insert("emp.insert", vo);
			session.commit();
			return cnt;
		} catch (Exception e) {
			if (session != null) session.rollback();
			throw e;
		} finally {
			if (session != null) session.close();
		}
	}

	public int update(EmpVO vo) {
		SqlSession session = null;
		try {
			session = sqlMapper.openSession(false);
			int cnt = session.update("emp.update", vo);
			session.commit();
			return cnt;
		} catch (Exception e) {
			if (session != null) session.rollback();
			throw e;
		} finally {
			if (session != null) session.close();
		}
	}

	public int delete(EmpVO vo) {
		SqlSession session = null;
		try {
			session = sqlMapper.openSession(false);
			int cnt = session.delete("emp.delete", vo);
			session.commit();
			return cnt;
		} catch (Exception e) {
			if (session != null) session.rollback();
			throw e;
		} finally {
			if (session != null) session.close();
		}
	}
}