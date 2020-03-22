package stepdefinitions;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;

import java.util.HashMap;
import java.util.Map;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.restassured.RestAssured;
import io.restassured.http.Method;
import io.restassured.response.ExtractableResponse;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import pojo.restfulbooker.Booking;
import pojo.restfulbooker.BookingResponse;
import requestpayload.restfulbookerrequestspayload.RestfulbookerRequestBody;
import requestspecifications.RestfulBookerRequestSpecifications;
import responsespecifications.GenerateResponseSpecification;
import utils.JsonParser;

public class RestfulBookerTests {
	
	private RestfulBookerRequestSpecifications reqSpec = new RestfulBookerRequestSpecifications();
	private RequestSpecification specification;
	private Response response;
	private static String tokenValue;
	private Booking requestBody = RestfulbookerRequestBody.createBooking(); 
	
	@Given("Add BaseURI along with AuthBasePath")
	public void add_BaseURI_along_with_AuthBasePath() {
		specification = reqSpec.generateJSONRequestSpecWithAuthBasePath();
	}

	@Given("Add BaseURI, BasePath and required headers")
	public void add_BaseURI_BasePath_and_required_headers() {
		specification = reqSpec.generateJSONRequestSpecWithBasePathAndHeaders(tokenValue);
	}
	
	@And("Add {string} as username and {string} as password in request body")
	public void add_username_and_password_as_request_body(String username, String password) {
		Map<String, String> credentials = new HashMap<>();
		credentials.put("username", username);
		credentials.put("password", password);
	    specification.body(credentials);
	}

	@When("Call {string} as URI and {string} as HttpRequest method")
	public void call_URI_and_HttpRequest_method(String uri, String method) {
		switch(method) {
		case"GET" :
			break;
		case "POST" :
			if(uri.equals("RestfulBookerAuth")) {
				response = RestAssured
								.given()
									.spec(specification)
								.when()
									.request(Method.POST);
			}else{
				response = RestAssured
								.given()
									.spec(specification)
									.body(requestBody)
								.when()
									.request(Method.POST);
			}
			break;
		case "PUT" :
			break;
		case "PATCH" :
			break;
		case "DELETE" :
			break;
		}
	}

	@Then("200 should be returned as Status Code")
	public void should_be_returned_as_Status_Code() {
	    response
	    	.then()
	    		.spec(GenerateResponseSpecification.generateSuccessResponseSpecWithJsonContentType());
	}
	
	@And("Created booking data should be returned in response")
	public void created_booking_data_should_be_returned_in_response() {
		BookingResponse bookingResponse = JsonParser.getPOJOObjectFromJsonResponse(response, "", BookingResponse.class);
		assertThat(bookingResponse.getBooking().getFirstname(), is(equalTo(requestBody.getFirstname())));
		assertThat(bookingResponse.getBooking().getTotalprice(), is(equalTo(requestBody.getTotalprice())));
		assertThat(bookingResponse.getBookingid(), greaterThan(0));
	}
	
	@And("ContentType response header should be same as Accept request header")
	public void contentType_response_header_should_be_same_as_Accept_request_header() {
		String headerValue = JsonParser.getHeaderValue(response, "Content-Type");
		assertThat(headerValue, is(equalTo("application/json; charset=utf-8")));
	}

	@And("A random generated token should be returned")
	public void a_token_with_should_be_returned() {
	   ExtractableResponse<Response> extractedResponse = response.then().extract();
	   tokenValue = extractedResponse.path("token");
	   assertThat(tokenValue, not(isEmptyOrNullString()));
	}

}
