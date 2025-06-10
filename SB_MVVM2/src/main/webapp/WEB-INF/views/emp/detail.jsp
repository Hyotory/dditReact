<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>직원 상세정보</title>
</head>
<body>
<h1>직원 상세정보</h1>

<c:if test="${not empty emp}">
    <table>
        <tr><th>직원 ID</th><td>${emp.EId}</td></tr>
        <tr><th>이름</th><td>${emp.EName}</td></tr>
        <tr><th>전화번호</th><td>${emp.gen}</td></tr>
        <tr><th>이메일</th><td>${emp.addr}</td></tr>
    </table>

    <br>
    <a href="/emp/edit?EId=${emp.EId}">수정</a>
    <a href="/emp/list">목록으로</a>
</c:if>

<c:if test="${empty emp}">
    <p>해당 직원을 찾을 수 없습니다.</p>
    <a href="/emp/list">목록으로</a>
</c:if>
</body>
</html>