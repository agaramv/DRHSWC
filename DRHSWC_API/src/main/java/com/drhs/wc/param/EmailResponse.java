package com.drhs.wc.param;

public class EmailResponse {
	private String emailTo; 
	private String emailSubject;
	private String emailBody;
	/**
	 * 
	 */
	public EmailResponse() {
		super();
		// TODO Auto-generated constructor stub
	}
	/**
	 * @param emailTo
	 * @param emailSubject
	 * @param emailBody
	 */
	public EmailResponse(String emailTo, String emailSubject, String emailBody) {
		super();
		this.emailTo = emailTo;
		this.emailSubject = emailSubject;
		this.emailBody = emailBody;
	}
	public String getEmailTo() {
		return emailTo;
	}
	public void setEmailTo(String emailTo) {
		this.emailTo = emailTo;
	}
	public String getEmailSubject() {
		return emailSubject;
	}
	public void setEmailSubject(String emailSubject) {
		this.emailSubject = emailSubject;
	}
	public String getEmailBody() {
		return emailBody;
	}
	public void setEmailBody(String emailBody) {
		this.emailBody = emailBody;
	} 
	
	
}
