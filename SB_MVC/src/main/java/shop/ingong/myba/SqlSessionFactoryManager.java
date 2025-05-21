package shop.ingong.myba;

import java.io.IOException;
import java.io.InputStream;

import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;

public class SqlSessionFactoryManager {

	private static final SqlSessionFactory sqlMapper;

	static {
		String resource = "shop.ingong.myba/SqlMapConfig.xml";
		InputStream inputStream = null;
		try {
			inputStream = Resources.getResourceAsStream(resource);
		} catch (IOException e) {
			System.out.println("Resource path error: " + resource);
			e.printStackTrace();
		}
		sqlMapper = new SqlSessionFactoryBuilder().build(inputStream);
	}

	public static SqlSessionFactory getSqlSessionFactory() {
		return sqlMapper;
	}
}