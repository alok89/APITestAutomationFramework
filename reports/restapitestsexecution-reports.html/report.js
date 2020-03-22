$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/featurefiles/NYTimesAPIsValidation.feature");
formatter.feature({
  "name": "Validating NYTimes APIs",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "Add EndPoint",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Add BaseURI and BasePath",
  "keyword": "Given "
});
formatter.match({
  "location": "NYTimesTests.add_baseURI_and_basepath()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search NYTimes Article",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Add \"q\" and \"new york times\" and \"page\" and 2 and \"sort\" and \"oldest\" as QueryParameters using parameterization",
  "keyword": "Given "
});
formatter.match({
  "location": "NYTimesTests.add_multiple_QueryParameters_using_Parameterization(String,String,String,Integer,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Call the \"ARTICLE_SEARCH_URI\" \"GET\" HttpRequest",
  "keyword": "When "
});
formatter.match({
  "location": "NYTimesTests.call_the_HttpRequest(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "An array of matched articles should be listed",
  "keyword": "Then "
});
formatter.match({
  "location": "NYTimesTests.an_array_of_matched_articles_should_be_listed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Status Code should be 200",
  "keyword": "And "
});
formatter.match({
  "location": "NYTimesTests.status_Code_should_be_returned_as(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Get Book Reviews by Author, ISBN, Title",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Add \"\u003cQueryAttribute\u003e\" and \"\u003cQueryValue\u003e\" as QueryParameter using Scenario Outline",
  "keyword": "Given "
});
formatter.step({
  "name": "Call the \"REVIEWS_URI\" \"GET\" HttpRequest",
  "keyword": "When "
});
formatter.step({
  "name": "Status Code should be 200",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "QueryAttribute",
        "QueryValue"
      ]
    },
    {
      "cells": [
        "isbn",
        "9781524763138"
      ]
    },
    {
      "cells": [
        "title",
        "Becoming"
      ]
    },
    {
      "cells": [
        "author",
        "Stephen King"
      ]
    }
  ]
});
formatter.background({
  "name": "Add EndPoint",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Add BaseURI and BasePath",
  "keyword": "Given "
});
formatter.match({
  "location": "NYTimesTests.add_baseURI_and_basepath()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Get Book Reviews by Author, ISBN, Title",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Add \"isbn\" and \"9781524763138\" as QueryParameter using Scenario Outline",
  "keyword": "Given "
});
formatter.match({
  "location": "NYTimesTests.add_QueryParameter_using_Scenario_Outline(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Call the \"REVIEWS_URI\" \"GET\" HttpRequest",
  "keyword": "When "
});
formatter.match({
  "location": "NYTimesTests.call_the_HttpRequest(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Status Code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "NYTimesTests.status_Code_should_be_returned_as(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Add EndPoint",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Add BaseURI and BasePath",
  "keyword": "Given "
});
formatter.match({
  "location": "NYTimesTests.add_baseURI_and_basepath()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Get Book Reviews by Author, ISBN, Title",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Add \"title\" and \"Becoming\" as QueryParameter using Scenario Outline",
  "keyword": "Given "
});
formatter.match({
  "location": "NYTimesTests.add_QueryParameter_using_Scenario_Outline(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Call the \"REVIEWS_URI\" \"GET\" HttpRequest",
  "keyword": "When "
});
formatter.match({
  "location": "NYTimesTests.call_the_HttpRequest(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Status Code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "NYTimesTests.status_Code_should_be_returned_as(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Add EndPoint",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Add BaseURI and BasePath",
  "keyword": "Given "
});
formatter.match({
  "location": "NYTimesTests.add_baseURI_and_basepath()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Get Book Reviews by Author, ISBN, Title",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Add \"author\" and \"Stephen King\" as QueryParameter using Scenario Outline",
  "keyword": "Given "
});
formatter.match({
  "location": "NYTimesTests.add_QueryParameter_using_Scenario_Outline(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Call the \"REVIEWS_URI\" \"GET\" HttpRequest",
  "keyword": "When "
});
formatter.match({
  "location": "NYTimesTests.call_the_HttpRequest(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Status Code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "NYTimesTests.status_Code_should_be_returned_as(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Add EndPoint",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Add BaseURI and BasePath",
  "keyword": "Given "
});
formatter.match({
  "location": "NYTimesTests.add_baseURI_and_basepath()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Get BestSellers List History",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Add \"publisher\" and \"HarperCollins\" and \"author\" and \"Megan Whalen Turner\" as QueryParameters using parameterization",
  "keyword": "Given "
});
formatter.match({
  "location": "NYTimesTests.add_multiple_QueryParameters_using_Parameterization(String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Call the \"BESTSELLERS_URI\" \"GET\" HttpRequest",
  "keyword": "When "
});
formatter.match({
  "location": "NYTimesTests.call_the_HttpRequest(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Status Code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "NYTimesTests.status_Code_should_be_returned_as(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "2 BestSeller books details should be listed",
  "keyword": "And "
});
formatter.match({
  "location": "NYTimesTests.BestSellers_books_details_should_be_listed(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Print the title of SecondBook as \"THE QUEEN\u0027S THIEF\" and rank as 8",
  "keyword": "And "
});
formatter.match({
  "location": "NYTimesTests.print_the_title_of_SecondBook_as_and_Rank_as(String,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Print the price of Firstbook as 16.99 and isbn13 as \"9780061870934\" and article chapter link as \"\"",
  "keyword": "And "
});
formatter.match({
  "location": "NYTimesTests.print_the_price_of_Firstbook_as_and_isbn_as_and_article_chapter_link_as(Double,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Add EndPoint",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Add BaseURI and BasePath",
  "keyword": "Given "
});
formatter.match({
  "location": "NYTimesTests.add_baseURI_and_basepath()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Get articles currently on the section front or the home page",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Call the \"TOPSTORIES_URI\" \"GET\" HttpRequest",
  "keyword": "When "
});
formatter.match({
  "location": "NYTimesTests.call_the_HttpRequest(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Status Code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "NYTimesTests.status_Code_should_be_returned_as(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "25 matched articles should be listed based on the PathParameter",
  "keyword": "And "
});
formatter.match({
  "location": "NYTimesTests.matched_articles_should_be_listed_based_on_the_PathParameter(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Print the count for \"health\", \"business\", \"climate\" and \"books\" sections",
  "keyword": "And "
});
formatter.match({
  "location": "NYTimesTests.print_the_count_for_and_sections(String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/java/featurefiles/RestfulBookerAPIsValidation.feature");
formatter.feature({
  "name": "Validating RestfulBookers API\u0027s",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Create a token",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Add BaseURI along with AuthBasePath",
  "keyword": "Given "
});
formatter.match({
  "location": "RestfulBookerTests.add_BaseURI_along_with_AuthBasePath()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Add \"admin\" as username and \"password123\" as password in request body",
  "keyword": "And "
});
formatter.match({
  "location": "RestfulBookerTests.add_username_and_password_as_request_body(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Call \"RestfulBookerAuth\" as URI and \"POST\" as HttpRequest method",
  "keyword": "When "
});
formatter.match({
  "location": "RestfulBookerTests.call_URI_and_HttpRequest_method(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "200 should be returned as Status Code",
  "keyword": "Then "
});
formatter.match({
  "location": "RestfulBookerTests.should_be_returned_as_Status_Code()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "A random generated token should be returned",
  "keyword": "And "
});
formatter.match({
  "location": "RestfulBookerTests.a_token_with_should_be_returned()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Create a booking",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Add BaseURI, BasePath and required headers",
  "keyword": "Given "
});
formatter.match({
  "location": "RestfulBookerTests.add_BaseURI_BasePath_and_required_headers()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Call \"CreateBooking\" as URI and \"POST\" as HttpRequest method",
  "keyword": "When "
});
formatter.match({
  "location": "RestfulBookerTests.call_URI_and_HttpRequest_method(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "200 should be returned as Status Code",
  "keyword": "Then "
});
formatter.match({
  "location": "RestfulBookerTests.should_be_returned_as_Status_Code()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Created booking data should be returned in response",
  "keyword": "And "
});
formatter.match({
  "location": "RestfulBookerTests.created_booking_data_should_be_returned_in_response()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ContentType response header should be same as Accept request header",
  "keyword": "And "
});
formatter.match({
  "location": "RestfulBookerTests.contentType_response_header_should_be_same_as_Accept_request_header()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/java/featurefiles/TheCatAPIsValidation.feature");
formatter.feature({
  "name": "Validating TheCat API\u0027s",
  "description": "Description: This Feature File is used to test the publicly avaliable webservices \"TheCAT\" API\u0027s.\n  Below are different scenarios written to test the webservices.",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Fetch all public images",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Add BaseURI alongwith Authentication",
  "keyword": "Given "
});
formatter.step({
  "name": "Add \"\u003cQueryAttribute1\u003e\" and \"\u003cQueryValue1\u003e\" and \"\u003cQueryAttribute2\u003e\" and \"\u003cQueryValue2\u003e\" as QueryParameters",
  "keyword": "And "
});
formatter.step({
  "name": "Call \"GET_ALL_PUBLIC_IMAGES_URI\" \"GET\" HttpRequest",
  "keyword": "When "
});
formatter.step({
  "name": "All the public images should be listed",
  "keyword": "Then "
});
formatter.step({
  "name": "Status Code should be returned as 200",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "QueryAttribute1",
        "QueryValue1",
        "QueryAttribute2",
        "QueryValue2"
      ]
    },
    {
      "cells": [
        "limit",
        "5",
        "page",
        "15"
      ]
    },
    {
      "cells": [
        "limit",
        "3",
        "page",
        "100"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Fetch all public images",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Add BaseURI alongwith Authentication",
  "keyword": "Given "
});
formatter.match({
  "location": "TheCatTests.add_baseURI_alongwith_authentication()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Add \"limit\" and \"5\" and \"page\" and \"15\" as QueryParameters",
  "keyword": "And "
});
formatter.match({
  "location": "TheCatTests.add_and_and_and_as_QueryParameters(String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Call \"GET_ALL_PUBLIC_IMAGES_URI\" \"GET\" HttpRequest",
  "keyword": "When "
});
formatter.match({
  "location": "TheCatTests.call_HttpRequest(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "All the public images should be listed",
  "keyword": "Then "
});
formatter.match({
  "location": "TheCatTests.all_the_public_images_should_be_listed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Status Code should be returned as 200",
  "keyword": "And "
});
formatter.match({
  "location": "TheCatTests.status_Code_should_be_returned_as(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Fetch all public images",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Add BaseURI alongwith Authentication",
  "keyword": "Given "
});
formatter.match({
  "location": "TheCatTests.add_baseURI_alongwith_authentication()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Add \"limit\" and \"3\" and \"page\" and \"100\" as QueryParameters",
  "keyword": "And "
});
formatter.match({
  "location": "TheCatTests.add_and_and_and_as_QueryParameters(String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Call \"GET_ALL_PUBLIC_IMAGES_URI\" \"GET\" HttpRequest",
  "keyword": "When "
});
formatter.match({
  "location": "TheCatTests.call_HttpRequest(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "All the public images should be listed",
  "keyword": "Then "
});
formatter.match({
  "location": "TheCatTests.all_the_public_images_should_be_listed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Status Code should be returned as 200",
  "keyword": "And "
});
formatter.match({
  "location": "TheCatTests.status_Code_should_be_returned_as(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Vote for an image",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Add BaseURI alongwith headers",
  "keyword": "Given "
});
formatter.match({
  "location": "TheCatTests.add_baseURI_alongwith_headers()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Add API Key authentication mode in request header",
  "keyword": "And "
});
formatter.match({
  "location": "TheCatTests.add_API_key_authentication_mode_in_request_header()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Call \"CREATE_A_VOTE_URI\" \"POST\" HttpRequest",
  "keyword": "When "
});
formatter.match({
  "location": "TheCatTests.call_HttpRequest(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "A vote with a uniqueID should be created for the image and returned",
  "keyword": "Then "
});
formatter.match({
  "location": "TheCatTests.a_vote_with_a_uniqueID_should_be_created_for_the_image_and_returned()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Status Code should be returned as 200",
  "keyword": "And "
});
formatter.match({
  "location": "TheCatTests.status_Code_should_be_returned_as(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"message\" in response body is \"SUCCESS\"",
  "keyword": "And "
});
formatter.match({
  "location": "TheCatTests.in_response_body_is(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Save the favorite image",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Add BaseURI alongwith headers",
  "keyword": "Given "
});
formatter.match({
  "location": "TheCatTests.add_baseURI_alongwith_headers()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Add API Key authentication mode in request header",
  "keyword": "And "
});
formatter.match({
  "location": "TheCatTests.add_API_key_authentication_mode_in_request_header()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Call \"SAVE_IMAGE_AS_FAVORITE_URI\" \"POST\" HttpRequest",
  "keyword": "When "
});
formatter.match({
  "location": "TheCatTests.call_HttpRequest(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "An image as Favorite with an ID has been added to the account and returned",
  "keyword": "Then "
});
formatter.match({
  "location": "TheCatTests.an_image_as_Favorite_with_an_ID_has_been_added_to_the_account_and_returned()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Status Code should be returned as 200",
  "keyword": "And "
});
formatter.match({
  "location": "TheCatTests.status_Code_should_be_returned_as(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"message\" in response body is \"SUCCESS\"",
  "keyword": "And "
});
formatter.match({
  "location": "TheCatTests.in_response_body_is(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search breeds by name",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Add BaseURI alongwith Authentication",
  "keyword": "Given "
});
formatter.match({
  "location": "TheCatTests.add_baseURI_alongwith_authentication()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Add \"q\" and \"sib\" as QueryParameter",
  "keyword": "And "
});
formatter.match({
  "location": "TheCatTests.add_as_QueryParameter(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Call \"SEARCH_BREEDS_BYNAME_URI\" \"GET\" HttpRequest",
  "keyword": "When "
});
formatter.match({
  "location": "TheCatTests.call_HttpRequest(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "All the breeds that match the queryparameter should be listed",
  "keyword": "Then "
});
formatter.match({
  "location": "TheCatTests.all_the_breeds_that_match_the_queryparameter_should_be_listed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Status Code should be returned as 200",
  "keyword": "And "
});
formatter.match({
  "location": "TheCatTests.status_Code_should_be_returned_as(Integer)"
});
formatter.result({
  "status": "passed"
});
});