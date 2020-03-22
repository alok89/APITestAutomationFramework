package requestpayload.restfulbookerrequestspayload;

import pojo.restfulbooker.Booking;
import pojo.restfulbooker.BookingDates;

public class RestfulbookerRequestBody {
	
	public static Booking createBooking() {
		Booking booking = new Booking();
		booking.setFirstname("Chris");
		booking.setLastname("Henry");
		booking.setTotalprice(269);
		booking.setDepositpaid(false);
		booking.setAdditionalneeds("Early Check-in");
		BookingDates bookingDates = new BookingDates();
		bookingDates.setCheckin("2020-04-01");
		bookingDates.setCheckout("2020-09-01");
		booking.setBookingdates(bookingDates);
		return booking;
	}

}
