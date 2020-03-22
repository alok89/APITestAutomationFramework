package stepdefinitions;

import java.util.HashMap;
import java.util.Map;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.restassured.RestAssured;
import io.restassured.http.Header;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import requestpayload.catrequestspayload.TheCATRequestBody;
import requestspecifications.TheCatRequestSpecifications;
import resources.TheCatResourcesURI;
import responsespecifications.GenerateResponseSpecification;
import utils.JsonParser;
import utils.PropertiesReader;

public class TheCatTests {
	
	private TheCatRequestSpecifications reqSpec;
	private RequestSpecification spec;
	private Response response;
	private Map<String, String> parametersMap;
	
	@Given("Add BaseURI alongwith Authentication")
	public void add_baseURI_alongwith_authentication() {
	    reqSpec = new TheCatRequestSpecifications();
	    spec = reqSpec.generateJSONRequestSpec();
	}
	
	@Given("Add BaseURI alongwith headers")
	public void add_baseURI_alongwith_headers() {
	    reqSpec = new TheCatRequestSpecifications();
	    spec = reqSpec.generateJSONRequestSpecWithoutAuth();
	}
	
	@And("Add {string} and {string} and {string} and {string} as QueryParameters")
	public void add_and_and_and_as_QueryParameters(String queryAtt1, String queryVal1, 
								String queryAtt2, String queryVal2) {
	    parametersMap = new HashMap<>();
	    parametersMap.put(queryAtt1, queryVal1);
	    parametersMap.put(queryAtt2, queryVal2);
	    spec = spec.queryParams(parametersMap);
	}
	
	@And("Add {string} and {string} as QueryParameter")
	public void add_as_QueryParameter(String queryAtt, String queryVal) {
		spec = spec.queryParam(queryAtt, queryVal);
	}
	
	@And("Add API Key authentication mode in request header")
	public void add_API_key_authentication_mode_in_request_header() {
		Header header = new Header("x-api-key", PropertiesReader.readProperty("CAT_API_KEY"));
		spec.header(header);
	}
	
	@When("Call {string} {string} HttpRequest")
	public void call_HttpRequest(String uri, String method) {
		TheCatResourcesURI resourceURI = TheCatResourcesURI.valueOf(uri);
		String uriTemplate = resourceURI.getURITemplate();
		switch(method) {
		case "GET":
			response = RestAssured
							.given(spec)
								.get(uriTemplate);
			break;
		case "POST":
			String requestBody = "";
			if(uri.equals("CREATE_A_VOTE_URI")) {
				requestBody = TheCATRequestBody.createVote("acur", 1); 
			}else if(uri.equals("SAVE_IMAGE_AS_FAVORITE_URI")) {
				requestBody = TheCATRequestBody.saveImageAsFavorite("9ccXTANkb");
			}
			response = RestAssured
							.given(spec)
								.body(requestBody)
									.post(uriTemplate);
			break;
		default:
			System.err.println("Either URI or Method does not match");
		}
	}
	
	@Then("All the public images should be listed")
	public void all_the_public_images_should_be_listed() {
	    int totalObjects = JsonParser.getNumberOfObjectsInJsonArray(response, "");
	    assertThat(totalObjects, is(equalTo(Integer.parseInt(parametersMap.get("limit")))));
	}
	
	@Then("A vote with a uniqueID should be created for the image and returned")
	public void a_vote_with_a_uniqueID_should_be_created_for_the_image_and_returned() {
	    String id = JsonParser.getNodeValueFromJsonResponse(response, "id");
	    assertThat(id, notNullValue());
	}
	
	@Then("An image as Favorite with an ID has been added to the account and returned")
	public void an_image_as_Favorite_with_an_ID_has_been_added_to_the_account_and_returned() {
		 JsonParser.getNodeValueFromJsonResponse(response, "id");
		 JsonParser.getStatusLine(response);
	}
	
	@Then("All the breeds that match the queryparameter should be listed")
	public void all_the_breeds_that_match_the_queryparameter_should_be_listed() {
		String altNames = JsonParser.getNodeValueFromJsonResponse(response, "alt_names");
		assertThat(altNames, containsString("HairSiberian Forest Cat"));
	}
	
	@And("{string} in response body is {string}")
	public void in_response_body_is(String key, String expectedValue) {
	    String actualValue = JsonParser.getNodeValueFromJsonResponse(response, key);
	    assertThat(actualValue, is(equalTo(expectedValue)));
	}
	
	@And("Status Code should be returned as {int}")
	public void status_Code_should_be_returned_as(Integer code) {
		response
			.then()
			.spec(GenerateResponseSpecification.generateSuccessResponseSpecWithJsonContentType());
	}	

}
