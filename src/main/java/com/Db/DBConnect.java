package com.Db;

import java.sql.Connection;
import java.sql.DriverManager;

public class DBConnect {
	private static Connection conn;
	public static Connection getConn() {
		if(conn==null) {
			try {
				
				Class.forName("com.mysql.jdbc.Driver");
				
				String user ="root";
				String password="root";
				String url= "jdbc:mysql://localhost:3306/enotes";
				
				conn=DriverManager.getConnection(url, user, password);
			
			
			
			
			
			
			} catch (Exception e) {
				
				e.printStackTrace();
			}
			
			
			
		}
		
		
		return conn;
	}
}
