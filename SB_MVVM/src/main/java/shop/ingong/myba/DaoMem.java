package shop.ingong.myba;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;

public class DaoMem {
	private SqlSessionFactory sqlMapper = SqlSessionFactoryManager.getSqlSessionFactory();

	public List<MemVO> selectList() {
		SqlSession session = null;
		try {
			session = sqlMapper.openSession();
			return session.selectList("mem.selectList");
		} finally {
			if (session != null) session.close();
		}
	}

	public MemVO select(MemVO vo) {
		SqlSession session = null;
		try {
			session = sqlMapper.openSession();
			return session.selectOne("mem.select", vo);
		} finally {
			if (session != null) session.close();
		}
	}

	public int insert(MemVO vo) {
		SqlSession session = null;
		try {
			session = sqlMapper.openSession(false);
			int cnt = session.insert("mem.insert", vo);
			session.commit();
			return cnt;
		} catch (Exception e) {
			if (session != null) session.rollback();
			throw e;
		} finally {
			if (session != null) session.close();
		}
	}

	public int update(MemVO vo) {
		SqlSession session = null;
		try {
			session = sqlMapper.openSession(false);
			int cnt = session.update("mem.update", vo);
			session.commit();
			return cnt;
		} catch (Exception e) {
			if (session != null) session.rollback();
			throw e;
		} finally {
			if (session != null) session.close();
		}
	}

	public int delete(MemVO vo) {
		SqlSession session = null;
		try {
			session = sqlMapper.openSession(false);
			int cnt = session.delete("mem.delete", vo);
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