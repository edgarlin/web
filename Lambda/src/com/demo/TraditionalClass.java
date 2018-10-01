package com.demo;

public class TraditionalClass implements SingleMethodInterface {

	@Override
	public String singleMethod(String parm) {
		System.out.println("singleMethod from TraditionalClass");
		return parm;
	}

}
