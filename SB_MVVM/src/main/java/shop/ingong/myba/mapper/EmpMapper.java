package shop.ingong.myba.mapper;

import org.apache.ibatis.annotations.*;

import shop.ingong.myba.dto.EmpDto;
import shop.ingong.myba.dto.MemDto;

import java.util.List;

@Mapper
public interface EmpMapper {

    // Ctrl + Alt + O: 필요한 임포트 자동으로 추가

    // 전체 회원 조회 - alias 없이 자동 매핑
    @Select("SELECT E_ID, E_NAME, GEN, ADDR FROM EMP")
    List<EmpDto> selectAll();

    // ID로 회원 조회
    @Select("SELECT E_ID, E_NAME, GEN, ADDR FROM MEM WHERE E_ID = #{eId}")
    EmpDto selectById(int eId);

    // 회원 등록
    @Insert("INSERT INTO MEM(E_ID, E_NAME, GEN, ADDR) VALUES(#{eId}, #{eName}, #{gen}, #{addr})")
    int insert(EmpDto emp);

    // 회원 수정
    @Update("UPDATE MEM SET E_NAME = #{eName}, GEN = #{gen}, ADDR = #{addr} WHERE E_ID = #{eId}")
    int update(EmpDto emp);

    // 회원 삭제
    @Delete("DELETE FROM MEM WHERE E_ID = #{eId}")
    int delete(int eId);

    // 이름으로 검색
    @Select("SELECT E_ID, E_NAME, GEN, ADDR FROM MEM WHERE E_NAME LIKE '%' || #{name} || '%'")
    List<EmpDto> selectByName(String name);
}
