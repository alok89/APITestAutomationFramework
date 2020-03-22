package requestspecifications;

import io.restassured.builder.RequestSpecBuilder;
import io.restassured.filter.log.LogDetail;
import io.restassured.http.ContentType;
import io.restassured.specification.RequestSpecification;

public class GenerateRequestSpecifications {
	
	protected RequestSpecification generateRequestSpec(String baseURI, ContentType type) {
		RequestSpecBuilder requestBuilder = new RequestSpecBuilder();
		return requestBuilder
				.setBaseUri(baseURI)
				.setContentType(type)
				.log(LogDetail.ALL)
				.build();
	}
	
	protected RequestSpecification generateRequestSpec(String baseURI, String contentType) {
		RequestSpecBuilder requestBuilder = new RequestSpecBuilder();
		return requestBuilder
				.setBaseUri(baseURI)
				.setContentType(contentType)
				.log(LogDetail.ALL)
				.build();
	}
	
	
	protected RequestSpecification generateRequestSpec(String baseURI, ContentType type, String apiKey) {
		RequestSpecBuilder requestBuilder = new RequestSpecBuilder();
		return requestBuilder
				.setBaseUri(baseURI)
				.addQueryParam("key", apiKey)
				.setContentType(type)
				.log(LogDetail.ALL)
				.build();
	}
	
	protected RequestSpecification generateRequestSpec(String baseURI, String basePath, ContentType type, String apiKey) {
		RequestSpecBuilder requestBuilder = new RequestSpecBuilder();
		return requestBuilder
				.setBaseUri(baseURI)
				.setBasePath(basePath)
				.addQueryParam("api-key", apiKey)
				.setContentType(type)
				.log(LogDetail.ALL)
				.build();
	}
	
	protected RequestSpecification generateRequestSpec(String baseURI, String basePath, ContentType type) {
		return new RequestSpecBuilder()
				.setBaseUri(baseURI)
				.setBasePath(basePath)
				.setContentType(type)
				.log(LogDetail.ALL)
				.build();
	}

}
