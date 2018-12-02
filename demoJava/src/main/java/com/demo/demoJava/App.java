package com.demo.demoJava;

import java.io.IOException;
import java.io.StringReader;
import java.io.StringWriter;

import javax.json.Json;
import javax.json.JsonArray;
import javax.json.JsonObject;
import javax.json.JsonReader;
import javax.json.JsonWriter;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

/**
 * Hello world!
 *
 */
public class App {
	public static void main(String[] args) throws JsonParseException, JsonMappingException, IOException {
		// jackson demo
		String json2obj = "{\"key\":\"value\"}";
		ObjectMapper objectMapper = new ObjectMapper();
		KeyValue v = objectMapper.readValue(json2obj, KeyValue.class);
		System.out.println(v.getKey());
		System.out.println(v.getNoKey());
		
		String obj2json = objectMapper.writeValueAsString(v);
		System.out.println(obj2json);

		// javax demo
		JsonObject obj_write = Json.createObjectBuilder().add("key", "value")
				.add("o", Json.createObjectBuilder().build()).add("a", Json.createArrayBuilder().build()).build();
		System.out.println(obj_write);

		StringWriter stringWriter = new StringWriter();
		JsonWriter writer = Json.createWriter(stringWriter);
		writer.writeObject(obj_write);
		writer.close();
		System.out.println(stringWriter.getBuffer().toString());

		JsonReader reader = Json.createReader(new StringReader(stringWriter.getBuffer().toString()));
		JsonObject obj_read = reader.readObject();
		reader.close();

		JsonArray arr_read = obj_read.getJsonArray("a");
		System.out.println(arr_read.size());
		System.out.println(obj_read.getString("key"));
	}
}
