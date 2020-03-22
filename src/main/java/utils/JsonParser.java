package utils;

import java.util.List;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import io.restassured.http.Header;
import io.restassured.http.Headers;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;

public class JsonParser {
	
	private static JsonPath jsonEvaluator;
	
	public static <T> T getPOJOObjectFromJsonResponse(Response response, String path, Class<T> genericType) {
		jsonEvaluator = response.jsonPath();
		T genericObject = jsonEvaluator.getObject(path, genericType);
		return genericObject;
	}
	
	public static <T> T getNumberOfImageDetailsObjectsInJson(Response response, Class<T> genericType, String nodeName) {
		ObjectMapper mapper = new ObjectMapper();
		String responseBody = response.asString();
		T object = null;
		try {
			object = mapper.readValue(responseBody, genericType);
		} catch (JsonProcessingException e) {
			e.printStackTrace();
		}
		return object;
	}
	
	public static int getNumberOfObjectsInJsonArray(Response response, String path) {
		jsonEvaluator = response.jsonPath();
		List<Object> objects = jsonEvaluator.getList(path);
		int noOfObjectsInArray = objects.size();
		System.out.println("Total No. of Objects in Json Array : "+noOfObjectsInArray);
		return noOfObjectsInArray;
	}
	
	public static String getNodeValueFromJsonResponse(Response response, String key) {
		jsonEvaluator = response.jsonPath();
		return jsonEvaluator.getString(key);
	}
	
	public static List<Header> getAllHeaders(Response response) {
		Headers headers = response.getHeaders();
		return headers.asList();
	}
	
	public static String getHeaderValue(Response response, Header headerName) {
		List<Header> headersList = getAllHeaders(response);
		String headerValue = null;
		if(headersList.contains(headerName)) {
			headerValue = headerName.getValue();
		}
		return headerValue;
	}
	
	public static String getHeaderValue(Response response, String headerName) {
		List<Header> headersList = getAllHeaders(response);
		String headerValue = null;
		for(Header header : headersList) {
			if(header.getName().equals(headerName)) {
				headerValue = header.getValue();
				break;
			}
		}
		return headerValue;
	}
	
	public static String getStatusLine(Response response) {
		return response.getStatusLine();
	}
	
	public static int getStatusCode(Response response) {
		return response.getStatusCode();
	}

}
