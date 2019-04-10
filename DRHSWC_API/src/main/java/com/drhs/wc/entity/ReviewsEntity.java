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
	
	@Column(name="student_first_name")
	private String firstName;
	
	@Column(name="student_last_name")
	private String lastName;
	
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

	public ReviewsEntity(int consultant_id, String firstName, String lastName, int grade, String topic, String teacher,
			String review) {
		super();
		this.consultant_id = consultant_id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.grade = grade;
		this.topic = topic;
		this.teacher = teacher;
		this.review = review;
	}

	/**
	 * @return the consultant_id
	 */
	public int getConsultant_id() {
		return consultant_id;
	}

	/**
	 * @return the firstName
	 */
	public String getFirstName() {
		return firstName;
	}

	/**
	 * @return the lastname
	 */
	public String getLastName() {
		return lastName;
	}

	/**
	 * @return the grade
	 */
	public int getGrade() {
		return grade;
	}

	/**
	 * @return the topic
	 */
	public String getTopic() {
		return topic;
	}

	/**
	 * @return the teacher
	 */
	public String getTeacher() {
		return teacher;
	}

	/**
	 * @return the review
	 */
	public String getReview() {
		return review;
	}

	/**
	 * @param consultant_id the consultant_id to set
	 */
	public void setConsultant_id(int consultant_id) {
		this.consultant_id = consultant_id;
	}

	/**
	 * @param firstName the firstName to set
	 */
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	/**
	 * @param lastname the lastname to set
	 */
	public void setLastname(String lastName) {
		this.lastName = lastName;
	}

	/**
	 * @param grade the grade to set
	 */
	public void setGrade(int grade) {
		this.grade = grade;
	}

	/**
	 * @param topic the topic to set
	 */
	public void setTopic(String topic) {
		this.topic = topic;
	}

	/**
	 * @param teacher the teacher to set
	 */
	public void setTeacher(String teacher) {
		this.teacher = teacher;
	}

	/**
	 * @param review the review to set
	 */
	public void setReview(String review) {
		this.review = review;
	}
	
	
	
}
