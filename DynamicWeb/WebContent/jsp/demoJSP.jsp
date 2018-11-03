<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<%--
<%@ include file="demo_include.jsp"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>

request = HttpServletRequest
response = HttpServletResponse
out = PrintWriter
session = HttpSession
application = ServletContext
config = ServletConfig
pageContext 
page = this
Exception
--%>
<html>
<head>
<%-- comment --%>
<%!String title = "Title";%>
<meta charset="UTF-8">
<title><%=title%></title>
</head>
<body>
	${ATTR_TITLE}
</body>
</html>