package resources;

public enum TheCatResourcesURI {
	
	GET_ALL_PUBLIC_IMAGES_URI("/images/search"),
	SEARCH_BREEDS_BYNAME_URI("/breeds/search"),
	SAVE_IMAGE_AS_FAVORITE_URI("/favourites"),
	CREATE_A_VOTE_URI("/votes"),
	DELETE_FAVORITE_URI("/favourites/");
	
	private String uriTemplate;
	
	private TheCatResourcesURI(String uriTemplate) {
		this.uriTemplate = uriTemplate;
	}
	
	public String getURITemplate() {
		return uriTemplate;
	}

}
