package resources;

public enum RestfulBookerResourcesURI {
	
	AUTH_URI("/auth");
	
	RestfulBookerResourcesURI(String uriValue) {
		this.uriValue = uriValue;
	}
	
	private String uriValue;
	
	public String getURIValue() {
		return uriValue;
	}

}
