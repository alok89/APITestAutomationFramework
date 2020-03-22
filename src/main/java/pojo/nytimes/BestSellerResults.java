package pojo.nytimes;

public class BestSellerResults {
	
	private String title;
	private String description;
	private String contributor;
	private String author;
	private String contributor_note;
	private double price;
	private String age_group;
	private String publisher;
    private ISBNs[] isbns;
    private RanksHistory[] ranks_history;
    private Reviews[] reviews;
	
    public String getTitle() {
		return title;
	}
	
    public void setTitle(String title) {
		this.title = title;
	}
	
    public String getDescription() {
		return description;
	}
	
    public void setDescription(String description) {
		this.description = description;
	}
	
    public String getContributor() {
		return contributor;
	}
	
    public void setContributor(String contributor) {
		this.contributor = contributor;
	}
	
    public String getAuthor() {
		return author;
	}
	
    public void setAuthor(String author) {
		this.author = author;
	}
	
    public String getContributor_note() {
		return contributor_note;
	}
	
    public void setContributor_note(String contributor_note) {
		this.contributor_note = contributor_note;
	}
	
    public double getPrice() {
		return price;
	}
	
    public void setPrice(double price) {
		this.price = price;
	}
	
    public String getAge_group() {
		return age_group;
	}
	
    public void setAge_group(String age_group) {
		this.age_group = age_group;
	}
	
    public String getPublisher() {
		return publisher;
	}
	
    public void setPublisher(String publisher) {
		this.publisher = publisher;
	}
	
    public ISBNs[] getIsbns() {
		return isbns;
	}
	
    public void setIsbns(ISBNs[] isbns) {
		this.isbns = isbns;
	}
	
    public RanksHistory[] getRanks_history() {
		return ranks_history;
	}
	
    public void setRanks_history(RanksHistory[] ranks_history) {
		this.ranks_history = ranks_history;
	}
	
    public Reviews[] getReviews() {
		return reviews;
	}
	
    public void setReviews(Reviews[] reviews) {
		this.reviews = reviews;
	}
    
}
