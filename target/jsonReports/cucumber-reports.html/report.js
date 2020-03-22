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
  "name": "Add an endpoint",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Search NYTimes Article",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Add \"q\u003delection\" as QueryParameter",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Call the \"ARTICLE_SEARCH_URI\" \"GET\" HttpRequest",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "An array of matched articles should be listed",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Status Code should be returned as 200",
  "keyword": "And "
});
formatter.match({
  "location": "TheCatTests.status_Code_should_be_returned_as(Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "name": "Get Book Reviews by Author, ISBN, Title",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Add \"\u003cQueryAttribute\u003e\" and \"\u003cQueryValue\u003e\" as QueryParameters",
  "keyword": "Given "
});
formatter.step({
  "name": "Call the \"REVIEWS_URI\" \"GET\" HttpRequest",
  "keyword": "When "
});
formatter.step({
  "name": "Book Review based on QueryParameters should be returned",
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
        "QueryAttribute",
        "QueryValue"
      ]
    },
    {
      "cells": [
        "author",
        "Michelle Obama"
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
  "name": "Add an endpoint",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Get Book Reviews by Author, ISBN, Title",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Add \"author\" and \"Michelle Obama\" as QueryParameters",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Call the \"REVIEWS_URI\" \"GET\" HttpRequest",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Book Review based on QueryParameters should be returned",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Status Code should be returned as 200",
  "keyword": "And "
});
formatter.match({
  "location": "TheCatTests.status_Code_should_be_returned_as(Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "Add EndPoint",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Add an endpoint",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Get Book Reviews by Author, ISBN, Title",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Add \"isbn\" and \"9781524763138\" as QueryParameters",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Call the \"REVIEWS_URI\" \"GET\" HttpRequest",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Book Review based on QueryParameters should be returned",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Status Code should be returned as 200",
  "keyword": "And "
});
formatter.match({
  "location": "TheCatTests.status_Code_should_be_returned_as(Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "Add EndPoint",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Add an endpoint",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Get Book Reviews by Author, ISBN, Title",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Add \"title\" and \"Becoming\" as QueryParameters",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Call the \"REVIEWS_URI\" \"GET\" HttpRequest",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Book Review based on QueryParameters should be returned",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Status Code should be returned as 200",
  "keyword": "And "
});
formatter.match({
  "location": "TheCatTests.status_Code_should_be_returned_as(Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "Add EndPoint",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Add an endpoint",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Get Book Reviews by Author, ISBN, Title",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Add \"author\" and \"Stephen King\" as QueryParameters",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Call the \"REVIEWS_URI\" \"GET\" HttpRequest",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Book Review based on QueryParameters should be returned",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Status Code should be returned as 200",
  "keyword": "And "
});
formatter.match({
  "location": "TheCatTests.status_Code_should_be_returned_as(Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "Add EndPoint",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Add an endpoint",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Get BestSellers List History",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Call the \"BESTSELLERS_URI\" \"GET\" HttpRequest",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "A list of BestSellers books details should be listed",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Status Code should be returned as 200",
  "keyword": "And "
});
formatter.match({
  "location": "TheCatTests.status_Code_should_be_returned_as(Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "Add EndPoint",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Add an endpoint",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Get articles currently on the section front or the home page",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Add \"science.json\" as PathParameter",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Call the \"TOPSTORIES_URI\" \"GET\" HttpRequest",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "An array of matched articles should be listed",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Status Code should be returned as 200",
  "keyword": "And "
});
formatter.match({
  "location": "TheCatTests.status_Code_should_be_returned_as(Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("file:src/test/java/featurefiles/TheCatAPIsValidation.feature");
formatter.feature({
  "name": "Validating TheCat API\u0027s",
  "description": "",
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