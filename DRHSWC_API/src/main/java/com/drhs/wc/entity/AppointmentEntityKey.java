package com.drhs.wc.entity;

import java.io.Serializable;
import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
public class AppointmentEntityKey implements Serializable {

	private static final long serialVersioUID = 1L;
	
	@Column(name ="appt_date")
	LocalDate apptDate;
	
	@Column(name ="lunch_type")
	String lunchType;
	
	@Column(name ="time_slot")
	Integer timeSlot;

	
	
	/**
	 * 
	 */
	public AppointmentEntityKey() {
		super();
		// TODO Auto-generated constructor stub
	}


    
	/**
	 * @param apptDate
	 * @param lunchType
	 * @param timeSlot
	 */
	public AppointmentEntityKey(LocalDate apptDate, String lunchType, Integer timeSlot) {
		super();
		this.apptDate = apptDate;
		this.lunchType = lunchType;
		this.timeSlot = timeSlot;
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



	public static long getSerialversiouid() {
		return serialVersioUID;
	}


}
