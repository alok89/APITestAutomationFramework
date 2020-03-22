Feature: Validating RestfulBookers API's


Scenario: Create a token
Given Add BaseURI along with AuthBasePath
And Add "admin" as username and "password123" as password in request body
When Call "RestfulBookerAuth" as URI and "POST" as HttpRequest method
Then 200 should be returned as Status Code
And A random generated token should be returned


Scenario: Create a booking
Given Add BaseURI, BasePath and required headers
When Call "CreateBooking" as URI and "POST" as HttpRequest method
Then 200 should be returned as Status Code
And Created booking data should be returned in response
And ContentType response header should be same as Accept request header


 