package com.drhs.wc.entity;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="reviews")
public class ReviewsEntity {
	
	@Column(name ="appt_date")
	LocalDate apptDate;
	
	@Column(name ="lunch_type")
	String lunchType;
	
	@Column(name ="time_slot")
	Integer timeSlot;
	
	@Id
	@Column(name="consultant_id")
	private int consultant_id;
	
	@Column(name="review")
	private String review;

	public ReviewsEntity() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @param apptDate
	 * @param lunchType
	 * @param timeSlot
	 * @param consultant_id
	 * @param review
	 */
	public ReviewsEntity(LocalDate apptDate, String lunchType, Integer timeSlot, int consultant_id, String review) {
		super();
		this.apptDate = apptDate;
		this.lunchType = lunchType;
		this.timeSlot = timeSlot;
		this.consultant_id = consultant_id;
		this.review = review;
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
