package ma.ensias.beans;

public class Image extends Content {
	
	private String url;
	
	
	public Image()
	{
		super();
	}
	public Image(String url) {
		this.url = url;
	}
	
	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	

}
