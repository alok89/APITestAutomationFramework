package pojo.nytimes;

public class Response {
	
	private ArticleDetails[] docs;
	private Meta meta;
	
	public ArticleDetails[] getDocs() {
		return docs;
	}
	
	public void setDocs(ArticleDetails[] docs) {
		this.docs = docs;
	}
	
	public Meta getMeta() {
		return meta;
	}
	
	public void setMeta(Meta meta) {
		this.meta = meta;
	}

}
