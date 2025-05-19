package day07;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class MariInsert {
    public static void main(String[] args) throws Exception {
        // JDBC URL, 사용자 이름, 비밀번호 설정
        String url = "jdbc:mysql://localhost:3305/react";
        String user = "root";
        String password = "react";
        
        Class.forName("com.mysql.cj.jdbc.Driver");
        Connection conn = DriverManager.getConnection(url, user, password);
        
        // Connection 객체 선언
        String sql = """
        		INSERT INTO emp
        		VALUES('3','3','3','3')
        """;
        Statement stmt = conn.createStatement();
        int cnt = stmt.executeUpdate(sql);
        System.out.println(cnt);
        stmt.close();
        conn.close();
        
        // conn과 stmt 의 기능을 node js 에서는 conn이 전부 처리 
        // node에서는 rows가 rs이고
        // next 원리 커서가 제일 처음 컬럼위치에 있으면 그 밑에 뭐가 있는지 찾는것
        
    }
}