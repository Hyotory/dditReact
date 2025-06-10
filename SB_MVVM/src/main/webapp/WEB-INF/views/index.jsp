<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>메인 페이지</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; }
        .menu { margin: 20px 0; }
        .menu a {
            display: inline-block;
            padding: 10px 20px;
            background-color: #4CAF50;
            color: white;
            text-decoration: none;
            border-radius: 5px;
            margin-right: 10px;
        }
        .menu a:hover { background-color: #45a049; }
    </style>
</head>
<body>
<h1>Hello JSP!</h1>
<p>${message}</p>

<div class="menu">
    <h2>메뉴</h2>
    <a href="/mem/list">회원 목록 보기</a>
</div>
</body>
</html>