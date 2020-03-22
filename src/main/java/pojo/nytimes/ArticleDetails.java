package pojo.nytimes;

public class ArticleDetails {
	
	private String _abstract;
    private String web_url;
    private String snippet;
    private String lead_paragraph;
    private String print_page;
    private String source;
    private Object[] multimedia;
    private Headline headline;
    private PersonsInfo[] keywords;
    private String pub_date;
    private String document_type;
    private String news_desk;
    private String section_name;
    private Byline byline;
    private String type_of_material;
    private String _id;
    private int word_count;
    private String uri;
    
	public String get_abstract() {
		return _abstract;
	}
	
	public void set_abstract(String _abstract) {
		this._abstract = _abstract;
	}
	
	public String getWeb_url() {
		return web_url;
	}
	
	public void setWeb_url(String web_url) {
		this.web_url = web_url;
	}
	
	public String getSnippet() {
		return snippet;
	}
	
	public void setSnippet(String snippet) {
		this.snippet = snippet;
	}
	
	public String getLead_paragraph() {
		return lead_paragraph;
	}
	
	public void setLead_paragraph(String lead_paragraph) {
		this.lead_paragraph = lead_paragraph;
	}
	
	public String getPrint_page() {
		return print_page;
	}
	
	public void setPrint_page(String print_page) {
		this.print_page = print_page;
	}
	
	public String getSource() {
		return source;
	}
	
	public void setSource(String source) {
		this.source = source;
	}
	
	public Object[] getMultimedia() {
		return multimedia;
	}
	
	public void setMultimedia(Object[] multimedia) {
		this.multimedia = multimedia;
	}
	
	public Headline getHeadline() {
		return headline;
	}
	
	public void setHeadline(Headline headline) {
		this.headline = headline;
	}
	
	public PersonsInfo[] getKeywords() {
		return keywords;
	}
	
	public void setKeywords(PersonsInfo[] keywords) {
		this.keywords = keywords;
	}
	
	public String getPub_date() {
		return pub_date;
	}
	
	public void setPub_date(String pub_date) {
		this.pub_date = pub_date;
	}
	
	public String getDocument_type() {
		return document_type;
	}
	
	public void setDocument_type(String document_type) {
		this.document_type = document_type;
	}
	
	public String getNews_desk() {
		return news_desk;
	}
	
	public void setNews_desk(String news_desk) {
		this.news_desk = news_desk;
	}
	
	public String getSection_name() {
		return section_name;
	}
	
	public void setSection_name(String section_name) {
		this.section_name = section_name;
	}
	
	public Byline getByline() {
		return byline;
	}
	
	public void setByline(Byline byline) {
		this.byline = byline;
	}
	
	public String getType_of_material() {
		return type_of_material;
	}
	
	public void setType_of_material(String type_of_material) {
		this.type_of_material = type_of_material;
	}
	
	public String get_id() {
		return _id;
	}
	
	public void set_id(String _id) {
		this._id = _id;
	}
	
	public int getWord_count() {
		return word_count;
	}
	
	public void setWord_count(int word_count) {
		this.word_count = word_count;
	}
	
	public String getUri() {
		return uri;
	}
	
	public void setUri(String uri) {
		this.uri = uri;
	}

}
