package com.demo;

@FunctionalInterface
public interface SingleMethodInterface {	
	public String singleMethod(String parm);
	public default String defaultMethod(String parm) {
		return "default";
	}
	
	public static String staticMethod(String parm) {
		return "static";
	}
	
	public static String staticProperty = "static Porperty";
}
