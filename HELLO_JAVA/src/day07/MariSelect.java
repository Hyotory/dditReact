package day07;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.sql.SQLException;

public class MariSelect {
    public static void main(String[] args) {
        Connection conn = null;
        Statement stmt = null;
        ResultSet rs = null;

        try {
            // MySQL JDBC 드라이버 로드
            Class.forName("com.mysql.cj.jdbc.Driver");

            // 데이터베이스 연결
            conn = DriverManager.getConnection(
                    "jdbc:mysql://localhost:3305/react",
                    "root",
                    "react"
            );

            // SQL 쿼리 작성
            String sql = "SELECT e_id, e_name, gen, addr FROM emp";

            // Statement 생성
            stmt = conn.createStatement();

            // 쿼리 실행
            rs = stmt.executeQuery(sql);

            // 결과 출력
            System.out.println("결과:");
            while (rs.next()) {
                String eId = rs.getString("e_id");
                String eName = rs.getString("e_name");
                String gen = rs.getString("gen");
                String addr = rs.getString("addr");

                System.out.println("ID: " + eId + ", 이름: " + eName + ", 성별: " + gen + ", 주소: " + addr);
            }

        } catch (ClassNotFoundException e) {
            System.out.println("JDBC 드라이버를 찾을 수 없습니다: " + e.getMessage());
        } catch (SQLException e) {
            System.out.println("데이터베이스 오류 발생: " + e.getMessage());
        } finally {
            // 리소스 해제
            try {
                if (rs != null) rs.close();
                if (stmt != null) stmt.close();
                if (conn != null) conn.close();
            } catch (SQLException e) {
                System.out.println("리소스 해제 중 오류 발생: " + e.getMessage());
            }
        }
    }
}