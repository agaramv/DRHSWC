package com.drhs.wc.dao;

import java.time.LocalDate;
import java.util.List;

import com.drhs.wc.entity.AppointmentDateConfigEntity;


public interface CommonDAO {

	//Block appointment date
	public AppointmentDateConfigEntity blockAppointmentDate(AppointmentDateConfigEntity appointmentDateConfigEntity);
		
	//get all blocked appointment date
	public List<AppointmentDateConfigEntity> getAllBlockedAppointmentDate();
	
	//Check if date is reserved/disabled
	public String getDateType(LocalDate apptDate);
	
	//get maximum time slot from the application configuration table
	public Integer getMaxTimeSlot();
}
