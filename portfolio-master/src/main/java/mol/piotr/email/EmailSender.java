package mol.piotr.email;

public interface EmailSender {
	public void sendEmail( String subject, String content, String replyTo);
}
