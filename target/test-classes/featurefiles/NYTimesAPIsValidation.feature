Feature: Validating NYTimes APIs

Background: Add EndPoint
Given Add BaseURI and BasePath 


Scenario: Search NYTimes Article
Given Add "q" and "new york times" and "page" and 2 and "sort" and "oldest" as QueryParameters using parameterization
When Call the "ARTICLE_SEARCH_URI" "GET" HttpRequest
Then An array of matched articles should be listed
And Status Code should be 200


Scenario Outline: Get Book Reviews by Author, ISBN, Title
Given Add "<QueryAttribute>" and "<QueryValue>" as QueryParameter using Scenario Outline
When Call the "REVIEWS_URI" "GET" HttpRequest 
Then Status Code should be 200
Examples:
|QueryAttribute|QueryValue    |
|isbn		   |9781524763138 |
|title         |Becoming      |
|author        |Stephen King  |


Scenario: Get BestSellers List History
Given Add "publisher" and "HarperCollins" and "author" and "Megan Whalen Turner" as QueryParameters using parameterization
When Call the "BESTSELLERS_URI" "GET" HttpRequest
Then Status Code should be 200
And 2 BestSeller books details should be listed
And Print the title of SecondBook as "THE QUEEN'S THIEF" and rank as 8
And Print the price of Firstbook as 16.99 and isbn13 as "9780061870934" and article chapter link as "" 


Scenario: Get articles currently on the section front or the home page
#Given Add "science.json" as PathParameter
When Call the "TOPSTORIES_URI" "GET" HttpRequest
Then Status Code should be 200
And 25 matched articles should be listed based on the PathParameter
And Print the count for "health", "business", "climate" and "books" sections