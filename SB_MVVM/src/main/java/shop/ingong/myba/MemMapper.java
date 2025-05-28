package shop.ingong.myba;

import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface MemMapper {

    // Ctrl + Alt + O: 필요한 임포트 자동으로 추가

    // 전체 회원 조회 - alias 없이 자동 매핑
    @Select("SELECT M_ID, M_NAME, TEL, EMAIL FROM MEM")
    List<MemDto> selectAll();

    // ID로 회원 조회
    @Select("SELECT M_ID, M_NAME, TEL, EMAIL FROM MEM WHERE M_ID = #{mId}")
    MemDto selectById(int mId);

    // 회원 등록
    @Insert("INSERT INTO MEM(M_ID, M_NAME, TEL, EMAIL) VALUES(#{mId}, #{mName}, #{tel}, #{email})")
    int insert(MemDto member);

    // 회원 수정
    @Update("UPDATE MEM SET M_NAME = #{mName}, TEL = #{tel}, EMAIL = #{email} WHERE M_ID = #{mId}")
    int update(MemDto member);

    // 회원 삭제
    @Delete("DELETE FROM MEM WHERE M_ID = #{mId}")
    int delete(int mId);

    // 이름으로 검색
    @Select("SELECT M_ID, M_NAME, TEL, EMAIL FROM MEM WHERE M_NAME LIKE '%' || #{name} || '%'")
    List<MemDto> selectByName(String name);
}
