/*
 * java SocketRequestResponseServer response.txt request.txt
 */
package com.demo.demo_jaxb.demo_package;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.PrintStream;
import java.net.ServerSocket;
import java.net.Socket;

public class SocketRequestResponseServer {

	public static void main(String[] args) {
		PrintStream out = System.out;
		String inFile = "response.txt";
		String outFile = "request.txt";

		// Checking command line arguments
		if (args.length == 2) {
			inFile = args[0];
			outFile = args[1];
		}

		try {
			// Reading the response from a file
			File objFile = new File(inFile);
			int resLen = (int) objFile.length();
			byte[] resBytes = new byte[resLen];
			FileInputStream inStream = new FileInputStream(objFile);
			inStream.read(resBytes);
			inStream.close();

			// Creating socket socket
			ServerSocket server = new ServerSocket(8888);
			out.println("Listening at 8888");
			Socket con = server.accept();
			out.println("Connection received from " + con.getInetAddress().toString());

			// Receiving the request
			InputStream reqStream = con.getInputStream();
			byte[] reqBytes = new byte[10240];
			int reqLen = reqStream.read(reqBytes);

			// Sending the response
			OutputStream resStream = con.getOutputStream();
			resStream.write(resBytes);

			reqStream.close();
			resStream.close();

			// Writing the request to a file
			FileOutputStream outStream = new FileOutputStream(outFile);
			outStream.write(reqBytes, 0, reqLen);
			outStream.close();

			// Output counts
			out.println("Request length: " + reqLen);
			out.println("Response length: " + resLen);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

}
