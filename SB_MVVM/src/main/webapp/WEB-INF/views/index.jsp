<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>${title}</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 50px; }
        .container { max-width: 800px; margin: 0 auto; }
        .header { background-color: #f4f4f4; padding: 20px; border-radius: 5px; }
        .content { margin-top: 20px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>${title}</h1>
            <p>${message}</p>
        </div>
        
        <div class="content">
            <h2>현재 시간</h2>
            <p>서버 시간: ${currentTime}</p>
            
            <h2>링크</h2>
            <ul>
                <li><a href="/test">테스트 페이지로 이동</a></li>
            </ul>
            
            <h2>JSP 특징</h2>
            <ul>
                <li>Java 코드 직접 사용 가능</li>
                <li>JSTL 태그 라이브러리 지원</li>
                <li>스크립틀릿(&lt;% %&gt;) 사용 가능</li>
            </ul>
        </div>
    </div>
</body>
</html>