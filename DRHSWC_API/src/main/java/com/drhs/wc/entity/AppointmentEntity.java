package com.drhs.wc.entity;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name="appointment")
public class AppointmentEntity {
	
	//PK appt_date, lunch_type and time_slot
	@EmbeddedId
	AppointmentEntityKey appointmentEntityKey;
	
	@Column(name="student_first_name")
	private String firstName;
	
	@Column(name="student_last_name")
	private String lastName;
	
	@Column(name="student_grade")
	private int grade;
	
	@Column(name="student_teacher")
	private String teacher;
	
	@Column(name="student_topic")
	private String topic;

	@Column(name="consultant_id")
	private Integer consultant_id;
	
	@Column(name="review")
	private String review;
		
	/**
	 * 
	 */
	public AppointmentEntity() {
		super();
		// TODO Auto-generated constructor stub
	}

	

	/**
	 * @param appointmentEntityKey
	 * @param firstName
	 * @param lastName
	 * @param grade
	 * @param teacher
	 * @param topic
	 * @param consultant_id
	 * @param review
	 */
	public AppointmentEntity(AppointmentEntityKey appointmentEntityKey, String firstName, String lastName, int grade,
			String teacher, String topic, Integer consultant_id, String review) {
		super();
		this.appointmentEntityKey = appointmentEntityKey;
		this.firstName = firstName;
		this.lastName = lastName;
		this.grade = grade;
		this.teacher = teacher;
		this.topic = topic;
		this.consultant_id = consultant_id;
		this.review = review;
	}



	public AppointmentEntityKey getAppointmentEntityKey() {
		return appointmentEntityKey;
	}

	public void setAppointmentEntityKey(AppointmentEntityKey appointmentEntityKey) {
		this.appointmentEntityKey = appointmentEntityKey;
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

	public int getGrade() {
		return grade;
	}

	public void setGrade(int grade) {
		this.grade = grade;
	}

	public String getTeacher() {
		return teacher;
	}

	public void setTeacher(String teacher) {
		this.teacher = teacher;
	}

	public String getTopic() {
		return topic;
	}

	public void setTopic(String topic) {
		this.topic = topic;
	}

	public Integer getConsultant_id() {
		return consultant_id;
	}

	public void setConsultant_id(Integer consultant_id) {
		this.consultant_id = consultant_id;
	}

	public String getReview() {
		return review;
	}

	public void setReview(String review) {
		this.review = review;
	}
	
	

}
