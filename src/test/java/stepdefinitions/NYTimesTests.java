package stepdefinitions;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.restassured.RestAssured;
import io.restassured.http.Method;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import pojo.nytimes.ISBNs;
import pojo.nytimes.RanksHistory;
import pojo.nytimes.Reviews;
import pojo.nytimes.TopStoriesResults;
import requestspecifications.NYTimesRequestSpecifications;
import resources.NYTimesResourcesURI;
import responsespecifications.GenerateResponseSpecification;
import utils.JsonParser;

public class NYTimesTests {
	
	private RequestSpecification specification;
	//private static String pathParameter;
	private Response response;
	private int objectsCount;
	
	@Given("Add BaseURI and BasePath")
	public void add_baseURI_and_basepath() {
		NYTimesRequestSpecifications requestSpec = new NYTimesRequestSpecifications();
		specification = requestSpec.generateJSONRequestSpec();
	}
	
	@Given("Add {string} and {string} as QueryParameter using Scenario Outline")
	public void add_QueryParameter_using_Scenario_Outline(String attribute, String value) {
	    specification.queryParam(attribute, value);
	}
	
	@Given("Add {string} and {string} and {string} and {int} and {string} and {string} as QueryParameters using parameterization")
	public void add_multiple_QueryParameters_using_Parameterization(String attribute1, String value1, 
								String attribute2, Integer value2, String attribute3, String value3) {
	    Map<String, Object> queryParameters = new HashMap<>();
	    queryParameters.put(attribute1, value1);
	    queryParameters.put(attribute2, value2);
	    queryParameters.put(attribute3, value3);
	    specification.queryParams(queryParameters);
	}
	
	@Given("Add {string} and {string} and {string} and {string} as QueryParameters using parameterization")
	public void add_multiple_QueryParameters_using_Parameterization(String attribute1, String value1, 
			String attribute2, String value2) {
		Map<String, Object> queryParameters = new HashMap<>();
	    queryParameters.put(attribute1, value1);
	    queryParameters.put(attribute2, value2);
	    specification.queryParams(queryParameters);
	}

	@When("Call the {string} {string} HttpRequest")
	public void call_the_HttpRequest(String uri, String method) {
		String uriTemplate = "";
		for(NYTimesResourcesURI resourceURI : NYTimesResourcesURI.values()) {
			if(uri.equals(resourceURI.toString())) {
				uriTemplate = resourceURI.getURITemplate();
				break;
			}
		}
		response = RestAssured
						.given()
							.spec(specification)
						.when()
							.request(Method.valueOf(method), uriTemplate);
	}

	@Then("An array of matched articles should be listed")
	public void an_array_of_matched_articles_should_be_listed() {
	    int objectsCount = JsonParser.getNumberOfObjectsInJsonArray(response, "response.docs");
	    assertThat(objectsCount, comparesEqualTo(10));
	}

	/*@Then("Book Review based on {string} should be returned")
	public void book_Review_based_on_should_be_returned(String queryParameter) {
	    switch(queryParameter) {
	    case "isbn" :
	    	break;
	    case "title" :
	    	String copyright = JsonParser.getNodeValueFromJson(response, "copyright");
	    	Assert.assertEquals("Copyright (c) 2020 The New York Times Company.  All Rights Reserved.", copyright);
	    	break;
	    case "author" :
	    	String resultCount = JsonParser.getNodeValueFromJson(response, "num_results");
	    	Assert.assertEquals(66, Integer.parseInt(resultCount));
	    	break;
	    }
	}*/

	@Then("{int} BestSeller books details should be listed")
	public void BestSellers_books_details_should_be_listed(Integer expectedCount) {
		objectsCount = JsonParser.getNumberOfObjectsInJsonArray(response, "results");
	    assertThat(objectsCount, comparesEqualTo(expectedCount));
	}
	
	@Then("Print the title of SecondBook as {string} and rank as {int}")
	public void print_the_title_of_SecondBook_as_and_Rank_as(String expectedBookTitle, Integer expectedBookRank) {
	   if(objectsCount > 0) {
		   String actualBookTitle = JsonParser.getNodeValueFromJsonResponse(response, "results[1].title");
		   assertThat(actualBookTitle, is(equalTo(expectedBookTitle)));
		   
		   RanksHistory obj1 = JsonParser.getPOJOObjectFromJsonResponse(response, 
				   								"results[1].ranks_history[0]", RanksHistory.class);
		   int actualBookRank = obj1.getRank();
		   assertThat(actualBookRank, is(equalTo(expectedBookRank)));
	   }else {
		   System.err.println("No BestSellers List found");
	   }
	}

	@Then("Print the price of Firstbook as {double} and isbn13 as {string} and article chapter link as {string}")
	public void print_the_price_of_Firstbook_as_and_isbn_as_and_article_chapter_link_as
														(Double expectedPrice, String expectedISBN, String expectedLink) {
		if(objectsCount > 0) {
			String actualPrice = JsonParser.getNodeValueFromJsonResponse(response, "results[0].price");
			assertThat(Double.parseDouble(actualPrice), is(equalTo(expectedPrice)));
			
			ISBNs obj1 = JsonParser.getPOJOObjectFromJsonResponse(response, "results[0].isbns[0]", ISBNs.class);
			String isbn13 = obj1.getIsbn13();
			assertThat(isbn13, is(equalTo(expectedISBN)));
			
			Reviews obj2 = JsonParser.getPOJOObjectFromJsonResponse(response, "results[0].reviews[0]", Reviews.class);
			String articleChLink = obj2.getArticle_chapter_link();
			assertThat(articleChLink, isEmptyString());
		}else {
			   System.err.println("No BestSellers List found");
		   }
	}
	
	@And("{int} matched articles should be listed based on the PathParameter")
	public void matched_articles_should_be_listed_based_on_the_PathParameter(Integer expectedArticlesCount) {
	    objectsCount = JsonParser.getNumberOfObjectsInJsonArray(response, "results");
	    assertThat(objectsCount, comparesEqualTo(expectedArticlesCount));
	}
	
	@And("Print the count for {string}, {string}, {string} and {string} sections")
	public void print_the_count_for_and_sections(String sec1, String sec2, String sec3, String sec4) {
		List<String> sections = new ArrayList<>();
		sections.add(sec1);
		sections.add(sec2);
		sections.add(sec3);
		sections.add(sec4);
		int value = 0;
		if(objectsCount > 0) {
			for(int i=0; i<objectsCount; i++) {
				TopStoriesResults obj = JsonParser.getPOJOObjectFromJsonResponse(response, "results["+i+"]", 
																					TopStoriesResults.class);
				String section = ((TopStoriesResults) obj).getSection();
				if(sections.contains(section)) {
					 ++value;
				}
			}
		}
		assertThat(value, greaterThanOrEqualTo(9));
	}
	
	@Then("Status Code should be {int}")
	public void status_Code_should_be_returned_as(Integer code) {
		response
			.then()
			.spec(GenerateResponseSpecification.generateSuccessResponseSpecWithJsonContentType());
	}
	
}
