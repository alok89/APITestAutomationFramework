package pojo.thecat;

public class ImageDetails {
	
	private String id;
	private String url;
	private int width;
	private int height;
	private Breeds[] breeds;
	
	public String getId() {
		return id;
	}
	
	public void setId(String id) {
		this.id = id;
	}
	
	public String getUrl() {
		return url;
	}
	
	public void setUrl(String url) {
		this.url = url;
	}
	
	public int getWidth() {
		return width;
	}
	
	public void setWidth(int width) {
		this.width = width;
	}
	
	public int getHeight() {
		return height;
	}
	
	public void setHeight(int height) {
		this.height = height;
	}
	
	public Breeds[] getBreeds() {
		return breeds;
	}
	
	public void setBreeds(Breeds[] breeds) {
		this.breeds = breeds;
	}

}
