<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>회원 목록</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; }
        table { border-collapse: collapse; width: 100%; margin-top: 20px; }
        th, td { border: 1px solid #ddd; padding: 12px; text-align: left; }
        th { background-color: #f2f2f2; }
        tr:nth-child(even) { background-color: #f9f9f9; }
        .header { color: #333; margin-bottom: 20px; }
        .no-data { text-align: center; color: #666; padding: 20px; }
    </style>
</head>
<body>
<h1 class="header">회원 목록</h1>

<c:choose>
    <c:when test="${not empty memList}">
        <table>
            <thead>
            <tr>
                <th>회원 ID</th>
                <th>이름</th>
                <th>전화번호</th>
                <th>이메일</th>
            </tr>
            </thead>
            <tbody>
            <c:forEach var="mem" items="${memList}">
                <tr>
                    <td>${mem.m_id}</td>
                    <td>${mem.m_name}</td>
                    <td>${mem.tel}</td>
                    <td>${mem.email}</td>
                </tr>
            </c:forEach>
            </tbody>
        </table>
        <p>총 ${memList.size()}명의 회원이 있습니다.</p>
    </c:when>
    <c:otherwise>
        <div class="no-data">등록된 회원이 없습니다.</div>
    </c:otherwise>
</c:choose>

<c:if test="${not empty error}">
    <div style="color: red; margin-top: 20px;">
            ${error}
    </div>
</c:if>
</body>
</html>