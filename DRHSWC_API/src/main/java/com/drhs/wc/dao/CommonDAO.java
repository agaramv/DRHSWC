package com.drhs.wc.dao;

import java.time.LocalDate;


public interface CommonDAO {

	//Check if date is reserved/disabled
	public String getDateType(LocalDate apptDate);
	
	//get maximum time slot from the application configuration table
	public Integer getMaxTimeSlot();
}
