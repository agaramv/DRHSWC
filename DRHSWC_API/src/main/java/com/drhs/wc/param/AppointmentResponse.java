package com.drhs.wc.param;

import java.time.LocalDate;

public class AppointmentResponse {

	private LocalDate apptDate;
	private Integer apptCount;
	public LocalDate getApptDate() {
		return apptDate;
	}
	public void setApptDate(LocalDate apptDate) {
		this.apptDate = apptDate;
	}
	public Integer getApptCount() {
		return apptCount;
	}
	public void setApptCount(Integer apptCount) {
		this.apptCount = apptCount;
	}
	
}
