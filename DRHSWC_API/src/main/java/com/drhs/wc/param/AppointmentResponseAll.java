package com.drhs.wc.param;

import java.time.LocalDate;
import java.time.LocalDateTime;

public class AppointmentResponseAll {
	
	
	private LocalDate apptDate;
	private String lunchType;
	private Integer timeSlot;
	private String firstName;
	private String lastName;
	private int grade;
	private String teacher;
	private String topic;
	private Integer consultant_id;
	private String review;
	private LocalDateTime reviewDate;
	private LocalDateTime createTimestamp;
	/**
	 * 
	 */
	public AppointmentResponseAll() {
		super();
		// TODO Auto-generated constructor stub
	}

	
	

	/**
	 * @param apptDate
	 * @param lunchType
	 * @param timeSlot
	 * @param firstName
	 * @param lastName
	 * @param grade
	 * @param teacher
	 * @param topic
	 * @param consultant_id
	 * @param review
	 * @param reviewDate
	 * @param createTimestamp
	 */
	public AppointmentResponseAll(LocalDate apptDate, String lunchType, Integer timeSlot, String firstName,
			String lastName, int grade, String teacher, String topic, Integer consultant_id, String review,
			LocalDateTime reviewDate, LocalDateTime createTimestamp) {
		super();
		this.apptDate = apptDate;
		this.lunchType = lunchType;
		this.timeSlot = timeSlot;
		this.firstName = firstName;
		this.lastName = lastName;
		this.grade = grade;
		this.teacher = teacher;
		this.topic = topic;
		this.consultant_id = consultant_id;
		this.review = review;
		this.reviewDate = reviewDate;
		this.createTimestamp = createTimestamp;
	}




	public LocalDate getApptDate() {
		return apptDate;
	}
	public void setApptDate(LocalDate apptDate) {
		this.apptDate = apptDate;
	}
	public String getLunchType() {
		return lunchType;
	}
	public void setLunchType(String lunchType) {
		this.lunchType = lunchType;
	}
	public Integer getTimeSlot() {
		return timeSlot;
	}
	public void setTimeSlot(Integer timeSlot) {
		this.timeSlot = timeSlot;
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

	
}
