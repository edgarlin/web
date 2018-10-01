package com.demo;

public class UsingLambda {
	static class InnerClass implements SingleMethodInterface {
		@Override
		public String singleMethod(String parm) {
			System.out.println("singleMethod from InnerClass");
			return parm;
		}
	}

	public static void main(String[] args) {
		
		//
		SingleMethodInterface t = new TraditionalClass();
		t.singleMethod("NULL");
		
		//
		SingleMethodInterface i = new InnerClass();
		i.singleMethod("NULL");
		
		//
		class LocalClass implements SingleMethodInterface {
			@Override
			public String singleMethod(String parm) {
				System.out.println("singleMethod from LocalClass");
				return "NULL";
			}
			
		}
		SingleMethodInterface l = new LocalClass();
		l.singleMethod("NULL");
		
		// an anonymous class is an expression
		SingleMethodInterface a = new SingleMethodInterface() {
			@Override
			public String singleMethod(String parm) {
				System.out.println("singleMethod from AnonymousClass");
				return parm;
			}
		};
		a.singleMethod("NULL");
		
		// lambda expression
		SingleMethodInterface s = (String parm) -> {
			System.out.println("singleMethod from AnonymousClass");
			return parm;
		};
		s.singleMethod("NULL");
		
		// 
		s = parm -> parm.toUpperCase();
		System.out.println(s.singleMethod("null"));

		
		// method reference
		SingleMethodInterface m = String::toUpperCase;
		System.out.println(m.singleMethod("null"));
	}

}
