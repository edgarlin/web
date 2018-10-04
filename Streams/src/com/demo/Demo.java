package com.demo;

import java.util.Arrays;
import java.util.stream.Stream;

public class Demo {

	public static void main(String[] args) {
		int[] iis = {1};
		Arrays.stream(iis).forEach(System.out::println);
		Arrays.asList(2).forEach(System.out::println);
		Stream.of(3).forEach(System.out::println);;
	}
}
