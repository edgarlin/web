package com.demo;

import java.util.Optional;

public class UsingOptions {

	public static void main(String[] args) {
		Optional<String> s1;

		s1 = Optional.of("of");
		System.out.println(s1.get());
		System.out.println(s1.isPresent());
		s1 = Optional.ofNullable(null);
		System.out.println(s1);
		System.out.println(s1.isPresent());
		s1 = Optional.empty();
		System.out.println(s1.orElse("EMPTY"));
	}

}
