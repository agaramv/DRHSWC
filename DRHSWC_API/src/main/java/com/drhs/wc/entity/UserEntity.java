package com.drhs.wc.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="r_user_info")
public class UserEntity {
	
	@Id
	@Column(name="consultant_id")
	private Integer consultant_id;
	
	@Column(name="type")
	private String type;
	
	@Column(name="first_name")
	private String firstName;
	
	@Column(name="last_name")
	private String lastName;
	
	@Column(name="grade")
	private Integer grade;
	
	@Column(name="email")
	private String email;
	
	@Column(name="email_second")
	private String emailSec;
	
	@Column(name="active")
	private String active_inactive;
	
	@Column(name="password")
	private String consultantPassword;

	public UserEntity() {
		super();
	}


	public UserEntity(Integer consultant_id, String type, String firstName, String lastName, Integer grade,
			String email, String emailSec, String active_inactive, String consultantPassword) {
		super();
		this.consultant_id = consultant_id;
		this.type = type;
		this.firstName = firstName;
		this.lastName = lastName;
		this.grade = grade;
		this.email = email;
		this.emailSec = emailSec;
		this.active_inactive = active_inactive;
		this.consultantPassword = consultantPassword;
	}



	public Integer getConsultant_id() {
		return consultant_id;
	}



	public void setConsultant_id(Integer consultant_id) {
		this.consultant_id = consultant_id;
	}



	public String getFirstName() {
		return firstName;
	}



	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}



	public String getLastName() {
		return lastName;
	}



	public void setLastName(String lastName) {
		this.lastName = lastName;
	}



	public Integer getGrade() {
		return grade;
	}



	public void setGrade(Integer grade) {
		this.grade = grade;
	}



	public String getEmail() {
		return email;
	}



	public void setEmail(String email) {
		this.email = email;
	}



	public String getEmailSec() {
		return emailSec;
	}



	public void setEmailSec(String emailSec) {
		this.emailSec = emailSec;
	}



	public String getActive_inactive() {
		return active_inactive;
	}



	public void setActive_inactive(String active_inactive) {
		this.active_inactive = active_inactive;
	}



	public String getConsultantPassword() {
		return consultantPassword;
	}



	public void setConsultantPassword(String consultantPassword) {
		this.consultantPassword = consultantPassword;
	}


	public String getType() {
		return type;
	}


	public void setType(String type) {
		this.type = type;
	}
	
	
	
}
