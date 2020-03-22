package requestspecifications;

import io.restassured.http.ContentType;
import io.restassured.specification.RequestSpecification;
import utils.PropertiesReader;

public class NYTimesRequestSpecifications extends GenerateRequestSpecifications {
	
	private static final String BASE_URI = PropertiesReader.readProperty("NYTimes_BASE_URI");
	private static final String API_KEY = PropertiesReader.readProperty("NYTimes_API_KEY");
	private static final String BASE_PATH = PropertiesReader.readProperty("NYTimes_BASE_PATH");
	
	public RequestSpecification generateJSONRequestSpec() {
		return generateRequestSpec(BASE_URI, BASE_PATH, ContentType.JSON, API_KEY);
	}
	
	public RequestSpecification generateXMLRequestSpec() {
		return generateRequestSpec(BASE_URI, BASE_PATH, ContentType.XML, API_KEY);
	}

}
