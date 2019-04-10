package com.drhs.wc.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="r_consultants")
public class ConsultantEntity {
	
	@Id
	@Column(name="consultant_id")
	private int consultant_id;
	
	@Column(name="first_name")
	private String firstName;
	
	@Column(name="last_name")
	private String lastName;
	
	@Column(name="grade")
	private int grade;
	
	@Column(name="email")
	private String email;
	
	@Column(name="email_second")
	private String emailSec;
	
	@Column(name="active")
	private String active_inactive;

	public ConsultantEntity() {
		super();
	}

	public ConsultantEntity(int consultant_id, String firstName, String lastName, int grade, String email,
			String emailSec, String active_inactive) {
		super();
		this.consultant_id = consultant_id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.grade = grade;
		this.email = email;
		this.emailSec = emailSec;
		this.active_inactive = active_inactive;
	}

	public int getConsultant_id() {
		return consultant_id;
	}

	public String getFirstName() {
		return firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public int getGrade() {
		return grade;
	}

	public String getEmail() {
		return email;
	}

	public String getEmailSec() {
		return emailSec;
	}
	
	public String getActive_inactive() {
		return active_inactive;
	}

	public void setActive_inactive(String active_inactive) {
		this.active_inactive = active_inactive;
	}

	public void setConsultant_id(int consultant_id) {
		this.consultant_id = consultant_id;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public void setGrade(int grade) {
		this.grade = grade;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public void setEmailSec(String emailSec) {
		this.emailSec = emailSec;
	}
	
	
}
