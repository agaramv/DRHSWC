package com.drhs.wc.param;

import java.time.LocalDate;
import java.time.Month;

public class AppointmentResponse {

	
	private LocalDate apptDate;
	private String lunchType;
	private int apptFilled;
	private int apptOpen;
	private Month apptMonth;      //JANUARY, FEBRUARY....	
	
	
	/**
	 * 
	 */
	public AppointmentResponse() {
		super();
		// TODO Auto-generated constructor stub
	}


	/**
	 * @param apptDate
	 * @param lunchType
	 * @param apptFilled
	 * @param apptOpen
	 * @param apptMonth
	 */
	public AppointmentResponse(LocalDate apptDate, String lunchType, int apptFilled, int apptOpen, Month apptMonth) {
		super();
		this.apptDate = apptDate;
		this.lunchType = lunchType;
		this.apptFilled = apptFilled;
		this.apptOpen = apptOpen;
		this.apptMonth = apptMonth;
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


	public int getApptFilled() {
		return apptFilled;
	}


	public void setApptFilled(int apptFilled) {
		this.apptFilled = apptFilled;
	}


	public int getApptOpen() {
		return apptOpen;
	}


	public void setApptOpen(int apptOpen) {
		this.apptOpen = apptOpen;
	}


	public Month getApptMonth() {
		return apptMonth;
	}


	public void setApptMonth(Month apptMonth) {
		this.apptMonth = apptMonth;
	}


	
	
}
