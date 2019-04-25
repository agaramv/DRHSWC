package com.drhs.wc.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.drhs.wc.param.EmailResponse;
import com.drhs.wc.service.ConsultantService;
import com.drhs.wc.service.EmailService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class EmailController {
	
	@Autowired
	EmailService emailService;
	
	   @PostMapping("/sendemail")
	   public String sendEmail(@RequestBody EmailResponse emailResponse) {
	       emailService.sendSimpleMessage(emailResponse);
		   return "Email sent successfully";
	   }   
}
