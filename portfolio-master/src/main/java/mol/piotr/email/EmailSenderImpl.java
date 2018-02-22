package mol.piotr.email;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

@Service
public class EmailSenderImpl implements EmailSender {

    @Autowired
    private JavaMailSender javaMailSender;

	@Override
	public void sendEmail( String subject, String content, String replyTo) {
        MimeMessage mail = javaMailSender.createMimeMessage();
        try {
            MimeMessageHelper helper = new MimeMessageHelper(mail, true);
            helper.setTo("piotradammol@gmail.com");
            helper.setReplyTo(replyTo);
            helper.setFrom("molu1994lp@gmail.com");
            helper.setSubject(subject);
            helper.setText(content, true);

        } catch (MessagingException e) {
            e.printStackTrace();
        }

        javaMailSender.send(mail);
    }
		
}
    
    

