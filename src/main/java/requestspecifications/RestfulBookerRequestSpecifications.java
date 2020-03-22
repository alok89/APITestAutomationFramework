package requestspecifications;

import io.restassured.http.ContentType;
import io.restassured.specification.RequestSpecification;
import utils.PropertiesReader;

public class RestfulBookerRequestSpecifications extends GenerateRequestSpecifications {
	
	private static final String BASE_URI = PropertiesReader.readProperty("RestfulBooker_BASE_URI");
	private static final String BASE_PATH = PropertiesReader.readProperty("RestfulBooker_BASE_PATH");
	private static final String AUTH_BASE_PATH = PropertiesReader.readProperty("RestfulBooker_AUTH_BASE_PATH");
	private static final String DATA_FORMAT = "application/json";
	
	public RequestSpecification generateJSONRequestSpec() {
		return generateRequestSpec(BASE_URI, DATA_FORMAT);
	}
	
	public RequestSpecification generateJSONRequestSpecWithAuthBasePath() {
		return generateRequestSpec(BASE_URI, AUTH_BASE_PATH, ContentType.JSON);
	}
	
	public RequestSpecification generateJSONRequestSpecWithBasePathAndHeaders(String tokenValue) {
		return generateJSONRequestSpec()
					.basePath(BASE_PATH)
					.accept(DATA_FORMAT)
					.cookie("token", tokenValue);
	}
}
