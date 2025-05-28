package shop.ingong.myba;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
@RequiredArgsConstructor
@Slf4j
public class MemRepository {

    private final MemMapper memMapper;

    // 기본 CRUD - 강력한 디버깅 추가
    public List<MemDto> findAll() {
        log.info("🔍 Repository.findAll() 시작");

        try {
            log.info("🔍 Mapper 호출 직전");
            List<MemDto> result = memMapper.selectAll();
            log.info("🔍 Mapper 호출 직후");
            log.info("🔍 Mapper 결과: {}", result);
            log.info("🔍 결과 개수: {}", result != null ? result.size() : "null");

            if (result != null && !result.isEmpty()) {
                for (int i = 0; i < result.size(); i++) {
                    MemDto member = result.get(i);
                    log.info("🔍 회원[{}]: mId={}, mName={}, tel={}, email={}",
                            i, member.getMId(), member.getMName(), member.getTel(), member.getEmail());
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

    public Optional<MemDto> findById(int mId) {
        log.debug("회원 조회: mId={}", mId);
        MemDto member = memMapper.selectById(mId);
        return Optional.ofNullable(member);
    }

    public boolean existsById(int mId) {
        return findById(mId).isPresent();
    }

    public MemDto save(MemDto member) {
        if (member.getMId() == 0 || !existsById(member.getMId())) {
            log.debug("새 회원 등록: {}", member.getMName());
            memMapper.insert(member);
        } else {
            log.debug("회원 정보 수정: mId={}", member.getMId());
            memMapper.update(member);
        }
        return member;
    }

    public boolean deleteById(int mId) {
        if (!existsById(mId)) {
            log.warn("삭제할 회원이 존재하지 않음: mId={}", mId);
            return false;
        }
        log.debug("회원 삭제: mId={}", mId);
        return memMapper.delete(mId) > 0;
    }

    // 비즈니스 로직이 포함된 메서드들
    public List<MemDto> findByNameContaining(String name) {
        log.debug("이름 검색: {}", name);
        if (name == null || name.trim().isEmpty()) {
            return List.of(); // 빈 리스트 반환
        }
        return memMapper.selectByName(name.trim());
    }

    public long count() {
        return findAll().size(); // 실제로는 COUNT 쿼리 사용 권장
    }

    public boolean hasAnyMembers() {
        return count() > 0;
    }

    // 레거시 호환용 메서드들 (기존 DaoMem 스타일)
    @Deprecated
    public List<MemDto> selectList() {
        return findAll();
    }

    @Deprecated
    public MemDto select(MemDto dto) {
        return findById(dto.getMId()).orElse(null);
    }

    @Deprecated
    public int insert(MemDto dto) {
        save(dto);
        return 1; // 성공 가정
    }

    @Deprecated
    public int update(MemDto dto) {
        save(dto);
        return 1; // 성공 가정
    }

    @Deprecated
    public int delete(MemDto dto) {
        return deleteById(dto.getMId()) ? 1 : 0;
    }
}