package resources;

public enum NYTimesResourcesURI {

	ARTICLE_SEARCH_URI("/search/v2/articlesearch.json"),	// = new NYTimesResourcesURI("ARTICLE_SEARCH_URI", );
	REVIEWS_URI("/books/v3/reviews.json"),
	BESTSELLERS_URI("/books/v3/lists/best-sellers/history.json"),
	TOPSTORIES_URI("/topstories/v2/science.json");
	
	private String uriTemplate;
	
	private NYTimesResourcesURI(String uriTemplate) {
		this.uriTemplate = uriTemplate;
	}
	
	public String getURITemplate() {
		return uriTemplate;
	}
	
}
