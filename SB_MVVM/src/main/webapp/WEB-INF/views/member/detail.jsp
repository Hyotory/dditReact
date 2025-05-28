<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>회원 상세정보</title>
</head>
<body>
<h1>회원 상세정보</h1>

<c:if test="${not empty member}">
    <table>
        <tr><th>회원 ID</th><td>${member.MId}</td></tr>
        <tr><th>이름</th><td>${member.MName}</td></tr>
        <tr><th>전화번호</th><td>${member.tel}</td></tr>
        <tr><th>이메일</th><td>${member.email}</td></tr>
    </table>

    <br>
    <a href="/member/edit?mId=${member.MId}">수정</a>
    <a href="/member/list">목록으로</a>
</c:if>

<c:if test="${empty member}">
    <p>해당 회원을 찾을 수 없습니다.</p>
    <a href="/member/list">목록으로</a>
</c:if>
</body>
</html>