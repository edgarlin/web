package com.demo;

import java.io.IOException;
import java.util.Arrays;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class Demo4JSP
 */
@WebServlet("/Demo4JSP")
public class Demo4JSP extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public Demo4JSP() {
		super();
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		request.setAttribute("ATTR_TITLE", "Title from Demo4JSP");
		System.out.println(request.getLocale());
		request.getParameterMap().forEach((String key, String[] value) -> {
			System.out.println(key + ":");
			Arrays.stream(value).forEach(v -> System.out.println("\t" + v));
		});
		request.getRequestDispatcher("demoJSP.jsp").forward(request, response);
		// response.sendRedirect("demoJSP.jsp");
		// response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doGet(request, response);
	}

}
