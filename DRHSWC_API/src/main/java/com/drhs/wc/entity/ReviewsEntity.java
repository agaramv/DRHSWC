package com.drhs.wc.entity;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="reviews")
public class ReviewsEntity {
	
	@EmbeddedId
	AppointmentEntityKey appointmentEntityKey;
	
	@Column(name="consultant_id")
	private Integer consultant_id;
	
	@Column(name="review")
	private String review;

	public ReviewsEntity() {
		super();
		// TODO Auto-generated constructor stub
	}
	

	/**
	 * @param appointmentEntityKey
	 * @param consultant_id
	 * @param review
	 */
	public ReviewsEntity(AppointmentEntityKey appointmentEntityKey, Integer consultant_id, String review) {
		super();
		this.appointmentEntityKey = appointmentEntityKey;
		this.consultant_id = consultant_id;
		this.review = review;
	}


	public AppointmentEntityKey getAppointmentEntityKey() {
		return appointmentEntityKey;
	}


	public void setAppointmentEntityKey(AppointmentEntityKey appointmentEntityKey) {
		this.appointmentEntityKey = appointmentEntityKey;
	}


	public void setConsultant_id(Integer consultant_id) {
		this.consultant_id = consultant_id;
	}


	public int getConsultant_id() {
		return consultant_id;
	}

	public void setConsultant_id(int consultant_id) {
		this.consultant_id = consultant_id;
	}

	public String getReview() {
		return review;
	}

	public void setReview(String review) {
		this.review = review;
	}
	
	
}
