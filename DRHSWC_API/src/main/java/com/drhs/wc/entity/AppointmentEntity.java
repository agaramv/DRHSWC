package com.drhs.wc.entity;

import java.time.LocalDateTime;

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
	
	@Column(name="email")
	private String email;
	
	@Column(name="student_teacher")
	private String teacher;
	
	@Column(name="student_topic")
	private String topic;
	
	@Column(name="file_link")
	private String fileLink;

	@Column(name="consultant_id")
	private Integer consultant_id;
	
	@Column(name="review")
	private String review;
		
	@Column(name="review_date")
	private LocalDateTime reviewDate;
	
	@Column(name="create_timestamp")
	private LocalDateTime createTimestamp;
	
	/**
	 * 
	 */
	public AppointmentEntity() {
		super();
		// TODO Auto-generated constructor stub
	}

	
	
	public AppointmentEntity(AppointmentEntityKey appointmentEntityKey, String firstName, String lastName, int grade,
			String email, String teacher, String topic, String fileLink, Integer consultant_id, String review,
			LocalDateTime reviewDate, LocalDateTime createTimestamp) {
		super();
		this.appointmentEntityKey = appointmentEntityKey;
		this.firstName = firstName;
		this.lastName = lastName;
		this.grade = grade;
		this.email = email;
		this.teacher = teacher;
		this.topic = topic;
		this.fileLink = fileLink;
		this.consultant_id = consultant_id;
		this.review = review;
		this.reviewDate = reviewDate;
		this.createTimestamp = createTimestamp;
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

	public LocalDateTime getReviewDate() {
		return reviewDate;
	}

	public void setReviewDate(LocalDateTime reviewDate) {
		this.reviewDate = reviewDate;
	}

	public LocalDateTime getCreateTimestamp() {
		return createTimestamp;
	}

	public void setCreateTimestamp(LocalDateTime createTimestamp) {
		this.createTimestamp = createTimestamp;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getFileLink() {
		return fileLink;
	}

	public void setFileLink(String fileLink) {
		this.fileLink = fileLink;
	}	
	
}
