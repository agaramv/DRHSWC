package com.drhs.wc.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.drhs.wc.param.EmailResponse;

@Service
public class EmailServiceImpl implements EmailService {

	
	@Autowired
    public JavaMailSender emailSender;
	
	@Override
	public void sendSimpleMessage(EmailResponse emailResponse) {
		
		//Simple email message without attachment
		SimpleMailMessage message = new SimpleMailMessage(); 
		
		//Set email response properties
        message.setTo(emailResponse.getEmailTo()); 
        message.setSubject(emailResponse.getEmailSubject()); 
        message.setText(emailResponse.getEmailBody());
        
        //send message
        emailSender.send(message);
		
	}

}
