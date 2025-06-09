package shop.ingong.myba.repository;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Repository;

import shop.ingong.myba.dto.EmpDto;
import shop.ingong.myba.dto.MemDto;
import shop.ingong.myba.mapper.EmpMapper;
import shop.ingong.myba.mapper.MemMapper;

import java.util.List;
import java.util.Optional;

@Repository
@RequiredArgsConstructor
@Slf4j
public class EmpRepository {

    private final EmpMapper empMapper;

    // 기본 CRUD - 강력한 디버깅 추가
    public List<EmpDto> findAll() {
        log.info("🔍 Repository.findAll() 시작");

        try {
            log.info("🔍 Mapper 호출 직전");
            List<EmpDto> result = empMapper.selectAll();
            log.info("🔍 Mapper 호출 직후");
            log.info("🔍 Mapper 결과: {}", result);
            log.info("🔍 결과 개수: {}", result != null ? result.size() : "null");

            if (result != null && !result.isEmpty()) {
                for (int i = 0; i < result.size(); i++) {
                	EmpDto emp = result.get(i);
                    log.info("🔍 회원[{}]: eId={}, eName={}, gen={}, addr={}",
                            i, emp.getEId(), emp.getEName(), emp.getGen(), emp.getAddr());
                }
            } else {
                log.warn("🔍 조회된 데이터가 없습니다!");
            }

            return result;

        } catch (Exception e) {
            log.error("🔍 Repository.findAll() 오류 발생: ", e);
            e.printStackTrace();
            throw e;
        }
    }

    public Optional<EmpDto> findById(int eId) {
        log.debug("회원 조회: mId={}", eId);
        EmpDto emp = empMapper.selectById(eId);
        return Optional.ofNullable(emp);
    }

    public boolean existsById(int eId) {
        return findById(eId).isPresent();
    }

    public EmpDto save(EmpDto emp) {
        if (emp.getEId() == 0 || !existsById(emp.getEId())) {
            log.debug("새 회원 등록: {}", emp.getEName());
            empMapper.insert(emp);
        } else {
            log.debug("회원 정보 수정: mId={}", emp.getEId());
            empMapper.update(emp);
        }
        return emp;
    }

    public boolean deleteById(int eId) {
        if (!existsById(eId)) {
            log.warn("삭제할 회원이 존재하지 않음: eId={}", eId);
            return false;
        }
        log.debug("회원 삭제: eId={}", eId);
        return empMapper.delete(eId) > 0;
    }

    // 비즈니스 로직이 포함된 메서드들
    public List<EmpDto> findByNameContaining(String name) {
        log.debug("이름 검색: {}", name);
        if (name == null || name.trim().isEmpty()) {
            return List.of(); // 빈 리스트 반환
        }
        return empMapper.selectByName(name.trim());
    }

    public long count() {
        return findAll().size(); // 실제로는 COUNT 쿼리 사용 권장
    }

    public boolean hasAnyMembers() {
        return count() > 0;
    }

    // 레거시 호환용 메서드들 (기존 DaoMem 스타일)
    @Deprecated
    public List<EmpDto> selectList() {
        return findAll();
    }

    @Deprecated
    public EmpDto select(EmpDto dto) {
        return findById(dto.getEId()).orElse(null);
    }

    @Deprecated
    public int insert(EmpDto dto) {
        save(dto);
        return 1; // 성공 가정
    }

    @Deprecated
    public int update(EmpDto dto) {
        save(dto);
        return 1; // 성공 가정
    }

    @Deprecated
    public int delete(EmpDto dto) {
        return deleteById(dto.getEId()) ? 1 : 0;
    }
}