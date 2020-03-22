package requestspecifications;

import io.restassured.http.ContentType;
import io.restassured.specification.RequestSpecification;
import utils.PropertiesReader;

public class TheCatRequestSpecifications extends GenerateRequestSpecifications {
	
	private static final String BASE_URI = PropertiesReader.readProperty("CAT_BASE_URI");
	private static final String API_KEY = PropertiesReader.readProperty("CAT_API_KEY");
	private static final String BASE_PATH = PropertiesReader.readProperty("CAT_BASE_PATH");
	
	public RequestSpecification generateJSONRequestSpec() {
		return generateRequestSpec(BASE_URI, BASE_PATH, ContentType.JSON, API_KEY);
	}
	
	public RequestSpecification generateJSONRequestSpecWithoutAuth() {
		return generateRequestSpec(BASE_URI, BASE_PATH, ContentType.JSON);
	}
	
	public RequestSpecification generateXMLRequestSpec() {
		return generateRequestSpec(BASE_URI, BASE_PATH, ContentType.XML, API_KEY);
	}

}
