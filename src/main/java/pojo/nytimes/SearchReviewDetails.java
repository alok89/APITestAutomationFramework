package pojo.nytimes;

public class SearchReviewDetails {
	
	private String status;
	private String copyright;
	private int num_results;
    private AuthorReviewResults[] results;
    
	public String getStatus() {
		return status;
	}
	
	public void setStatus(String status) {
		this.status = status;
	}
	
	public String getCopyright() {
		return copyright;
	}
	
	public void setCopyright(String copyright) {
		this.copyright = copyright;
	}
	
	public int getNum_results() {
		return num_results;
	}
	
	public void setNum_results(int num_results) {
		this.num_results = num_results;
	}
	
	public AuthorReviewResults[] getResults() {
		return results;
	}
	
	public void setResults(AuthorReviewResults[] results) {
		this.results = results;
	}

}
