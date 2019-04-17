package com.drhs.wc.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="reviews")
public class ReviewsEntity {
	
	@Id
	@Column(name="consultant_id")
	private int consultant_id;
	
	@Column(name="consultant_first_name")
	private String firstName;
	
	@Column(name="consultant_last_name")
	private String lastName;
	
	@Column(name="student_first_name")
	private String firstNameS;
	
	@Column(name="student_last_name")
	private String lastNameS;
	
	@Column(name="grade")
	private int grade;
	
	@Column(name="topic")
	private String topic;
	
	@Column(name="teacher")
	private String teacher;
	
	@Column(name="review")
	private String review;

	public ReviewsEntity() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @param consultant_id
	 * @param firstName
	 * @param lastName
	 * @param firstNameS
	 * @param lastNameS
	 * @param grade
	 * @param topic
	 * @param teacher
	 * @param review
	 */
	public ReviewsEntity(int consultant_id, String firstName, String lastName, String firstNameS, String lastNameS,
			int grade, String topic, String teacher, String review) {
		super();
		this.consultant_id = consultant_id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.firstNameS = firstNameS;
		this.lastNameS = lastNameS;
		this.grade = grade;
		this.topic = topic;
		this.teacher = teacher;
		this.review = review;
	}

	public int getConsultant_id() {
		return consultant_id;
	}

	public void setConsultant_id(int consultant_id) {
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

	public String getFirstNameS() {
		return firstNameS;
	}

	public void setFirstNameS(String firstNameS) {
		this.firstNameS = firstNameS;
	}

	public String getLastNameS() {
		return lastNameS;
	}

	public void setLastNameS(String lastNameS) {
		this.lastNameS = lastNameS;
	}

	public int getGrade() {
		return grade;
	}

	public void setGrade(int grade) {
		this.grade = grade;
	}

	public String getTopic() {
		return topic;
	}

	public void setTopic(String topic) {
		this.topic = topic;
	}

	public String getTeacher() {
		return teacher;
	}

	public void setTeacher(String teacher) {
		this.teacher = teacher;
	}

	public String getReview() {
		return review;
	}

	public void setReview(String review) {
		this.review = review;
	}

	
	
	
	
}
