package com.drhs.wc.param;

import java.time.LocalDate;
import java.time.Month;

public class AppointmentResponse {

	private String apptforWeek;	
	private LocalDate apptDate;
	private String apptDayName;
	private Month apptMonth;
	private int apptFilled;
	private int apptOpen;
	/**
	 * @param apptforWeek
	 * @param apptDate
	 * @param apptDayName
	 * @param apptMonth
	 * @param apptFilled
	 * @param apptOpen
	 */
	public AppointmentResponse(String apptforWeek, LocalDate apptDate, String apptDayName, Month apptMonth,
			int apptFilled, int apptOpen) {
		this.apptforWeek = apptforWeek;
		this.apptDate = apptDate;
		this.apptDayName = apptDayName;
		this.apptMonth = apptMonth;
		this.apptFilled = apptFilled;
		this.apptOpen = apptOpen;
	}
	/**
	 * 
	 */
	public AppointmentResponse() {
		super();
		// TODO Auto-generated constructor stub
	}
	public String getApptforWeek() {
		return apptforWeek;
	}
	public void setApptforWeek(String apptforWeek) {
		this.apptforWeek = apptforWeek;
	}
	public LocalDate getApptDate() {
		return apptDate;
	}
	public void setApptDate(LocalDate apptDate) {
		this.apptDate = apptDate;
	}
	public String getApptDayName() {
		return apptDayName;
	}
	public void setApptDayName(String apptDayName) {
		this.apptDayName = apptDayName;
	}
	public Month getApptMonth() {
		return apptMonth;
	}
	public void setApptMonth(Month apptMonth) {
		this.apptMonth = apptMonth;
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
	
}
