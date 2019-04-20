package com.drhs.wc.entity;

import java.io.Serializable;
import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
public class ReviewsEntityKey implements Serializable {

	private static final long serialVersioUID = 1L;
	
	@Column(name ="appt_date")
	LocalDate apptDate;
	
	@Column(name ="lunch_type")
	String lunchType;
	
	@Column(name ="time_slot")
	Integer timeSlot;
}
