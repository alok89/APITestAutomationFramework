Feature: Validating TheCat API's
Description: This Feature File is used to test the publicly avaliable webservices "TheCAT" API's.
  Below are different scenarios written to test the webservices.

Scenario Outline: Fetch all public images
Given Add BaseURI alongwith Authentication
And Add "<QueryAttribute1>" and "<QueryValue1>" and "<QueryAttribute2>" and "<QueryValue2>" as QueryParameters
When Call "GET_ALL_PUBLIC_IMAGES_URI" "GET" HttpRequest
Then All the public images should be listed
And Status Code should be returned as 200
Examples:
|QueryAttribute1|QueryValue1|QueryAttribute2|QueryValue2|
|limit          |5          |page           |15         |
|limit          |3          |page           |100        |


Scenario: Vote for an image
Given Add BaseURI alongwith headers
And Add API Key authentication mode in request header
When Call "CREATE_A_VOTE_URI" "POST" HttpRequest
Then A vote with a uniqueID should be created for the image and returned
And Status Code should be returned as 200
And "message" in response body is "SUCCESS"


Scenario: Save the favorite image
Given Add BaseURI alongwith headers
And Add API Key authentication mode in request header
When Call "SAVE_IMAGE_AS_FAVORITE_URI" "POST" HttpRequest
Then An image as Favorite with an ID has been added to the account and returned
And Status Code should be returned as 200
And "message" in response body is "SUCCESS"


Scenario: Search breeds by name
Given Add BaseURI alongwith Authentication
And Add "q" and "sib" as QueryParameter
When Call "SEARCH_BREEDS_BYNAME_URI" "GET" HttpRequest
Then All the breeds that match the queryparameter should be listed
And Status Code should be returned as 200