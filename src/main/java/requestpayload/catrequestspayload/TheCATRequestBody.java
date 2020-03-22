package requestpayload.catrequestspayload;

public class TheCATRequestBody {

	public static String createVote(String imageId, int value) {
		return "{\"image_id\":\""+imageId+"\", \"value\":"+value+"}";
	}
	
	public static String saveImageAsFavorite(String imageId) {
		return "{\"image_id\":\""+imageId+"\"}";
	}
}
