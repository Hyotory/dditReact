<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>직원 목록 관리</title>
    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f5f5f5;
            padding: 20px;
            line-height: 1.6;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            background: white;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            overflow: hidden;
        }

        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 30px;
            text-align: center;
        }

        .header h1 {
            font-size: 2.5rem;
            margin-bottom: 10px;
        }

        .header p {
            opacity: 0.9;
            font-size: 1.1rem;
        }

        .content {
            padding: 30px;
        }

        .stats {
            background: #f8f9ff;
            padding: 15px;
            border-radius: 8px;
            margin-bottom: 25px;
            border-left: 4px solid #667eea;
        }

        .stats p {
            color: #555;
            font-weight: 500;
        }

        .table-container {
            overflow-x: auto;
            margin-bottom: 25px;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
            background: white;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }

        th {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 15px 12px;
            text-align: left;
            font-weight: 600;
            font-size: 0.95rem;
            letter-spacing: 0.5px;
        }

        td {
            padding: 12px;
            border-bottom: 1px solid #eee;
            vertical-align: EIddle;
        }

        tr:hover {
            background-color: #f8f9ff;
            transition: background-color 0.2s ease;
        }

        tr:last-child td {
            border-bottom: none;
        }

        .btn {
            display: inline-block;
            padding: 8px 16px;
            border-radius: 5px;
            text-decoration: none;
            font-weight: 500;
            transition: all 0.2s ease;
            border: none;
            cursor: pointer;
            font-size: 0.9rem;
        }

        .btn-primary {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
        }

        .btn-primary:hover {
            transform: translateY(-1px);
            box-shadow: 0 4px 8px rgba(102, 126, 234, 0.3);
        }

        .btn-success {
            background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
            color: white;
        }

        .btn-success:hover {
            transform: translateY(-1px);
            box-shadow: 0 4px 8px rgba(56, 239, 125, 0.3);
        }

        .empty-state {
            text-align: center;
            padding: 60px 20px;
            color: #666;
        }

        .empty-state i {
            font-size: 4rem;
            color: #ddd;
            margin-bottom: 20px;
            display: block;
        }

        .empty-state h3 {
            font-size: 1.5rem;
            margin-bottom: 10px;
            color: #555;
        }

        .empty-state p {
            margin-bottom: 25px;
            font-size: 1.1rem;
        }

        .actions {
            text-align: center;
            padding: 20px 0;
            border-top: 1px solid #eee;
            background: #f8f9ff;
        }

        .emp-id {
            font-weight: 600;
            color: #667eea;
        }

        .emp-name {
            font-weight: 500;
            color: #333;
        }

        .contact-info {
            color: #666;
            font-size: 0.95rem;
        }

        @media (max-width: 768px) {
            .container {
                margin: 10px;
                border-radius: 0;
            }

            table {
                font-size: 0.9rem;
            }

            th, td {
                padding: 8px 6px;
            }

            .header h1 {
                font-size: 2rem;
            }

            .content {
                padding: 20px;
            }
        }

        /* 로딩 애니메이션 */
        .loading {
            display: none;
            text-align: center;
            padding: 40px;
        }

        .spinner {
            border: 4px solid #f3f3f3;
            border-top: 4px solid #667eea;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            animation: spin 2s linear infinite;
            margin: 0 auto 20px;
        }

        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    </style>
</head>
<body>
<div class="container">
    <div class="header">
        <h1>👥 직원 관리 시스템</h1>
        <p>전체 직원 정보를 확인하고 관리하세요</p>
    </div>

    <div class="content">
        <!-- 통계 정보 -->
        <div class="stats">
            <p>📊 총 직원 수: <strong><c:out value="${empList.size()}" default="0"/></strong>명</p>
        </div>

        <!-- 회원 목록 테이블 -->
        <c:choose>
            <c:when test="${not empty empList}">
                <div class="table-container">
                    <table>
                        <thead>
                        <tr>
                            <th>🆔 직원 ID</th>
                            <th>👤 이름</th>
                            <th>📞 전화번호</th>
                            <th>📧 이메일</th>
                            <th>⚙️ 관리</th>
                        </tr>
                        </thead>
                        <tbody>
                        <c:forEach var="emp" items="${empList}" varStatus="status">
                            <tr>
                                <td>
                                    <span class="emp-id">#<c:out value="${emp.EId}"/></span>
                                </td>
                                <td>
                                    <span class="emp-name"><c:out value="${emp.EName}"/></span>
                                </td>
                                <td>
                                    <span class="contact-info"><c:out value="${emp.gen}"/></span>
                                </td>
                                <td>
                                    <span class="contact-info"><c:out value="${emp.addr}"/></span>
                                </td>
                                <td>
                                    <a href="${pageContext.request.contextPath}/emp/detail?EId=${emp.EId}"
                                       class="btn btn-primary">상세보기</a>
                                </td>
                            </tr>
                        </c:forEach>
                        </tbody>
                    </table>
                </div>
            </c:when>
            <c:otherwise>
                <div class="empty-state">
                    <i>😔</i>
                    <h3>등록된 직원 없습니다</h3>
                    <p>첫 번째 직원 등록해보세요!</p>
                    <a href="${pageContext.request.contextPath}/emp/add" class="btn btn-success">
                        ➕ 첫 직원 등록하기
                    </a>
                </div>
            </c:otherwise>
        </c:choose>
    </div>

    <!-- 하단 액션 버튼 -->
    <div class="actions">
        <a href="${pageContext.request.contextPath}/emp/add" class="btn btn-success">
            ➕ 새 직원 추가
        </a>
    </div>
</div>

<!-- 로딩 오버레이 (필요시 사용) -->
<div class="loading" id="loadingOverlay">
    <div class="spinner"></div>
    <p>데이터를 불러오는 중...</p>
</div>

<script>
    // 페이지 로드 완료 후 실행
    document.addEventListener('DOMContentLoaded', function() {
        console.log('회원 목록 페이지 로드 완료');

        // 테이블 행 클릭 시 상세페이지로 이동 (선택사항)
        const tableRows = document.querySelectorAll('tbody tr');
        tableRows.forEach(row => {
            row.addEventListener('click', function(e) {
                // 버튼 클릭시에는 실행하지 않음
                if (!e.target.classList.contains('btn')) {
                    const detailLink = this.querySelector('.btn-primary');
                    if (detailLink) {
                        window.location.href = detailLink.href;
                    }
                }
            });

            // 마우스 커서 변경
            row.style.cursor = 'pointer';
        });
    });

    // 에러 처리 함수
    function showError(message) {
        alert('오류가 발생했습니다: ' + message);
    }

    // 로딩 표시 함수
    function showLoading() {
        document.getElementById('loadingOverlay').style.display = 'block';
    }

    function hideLoading() {
        document.getElementById('loadingOverlay').style.display = 'none';
    }
</script>
</body>
</html>