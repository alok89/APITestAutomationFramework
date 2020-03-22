package pojo.nytimes;

public class Byline {
	
	private String original;
	private PersonDetails[] person;
	private String organization;
	
	public String getOriginal() {
		return original;
	}
	
	public void setOriginal(String original) {
		this.original = original;
	}
	
	public PersonDetails[] getPerson() {
		return person;
	}
	
	public void setPerson(PersonDetails[] person) {
		this.person = person;
	}
	
	public String getOrganization() {
		return organization;
	}
	
	public void setOrganization(String organization) {
		this.organization = organization;
	}

}
