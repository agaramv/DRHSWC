package com.drhs.wc.dao;

import java.time.LocalDate;
import java.util.List;

import com.drhs.wc.entity.AppointmentEntity;
import com.drhs.wc.entity.ConsultantEntity;
import com.drhs.wc.param.AppointmentResponseAll;

public interface AppointmentDao {

	//Get all appointments
	public List<AppointmentEntity> getAllAppointments();
	
	//Get appointments by date
	public List<AppointmentEntity> getAppointmentsByDate(LocalDate apptDate); 
	
	
	Integer findByDate(LocalDate date);

	//Get available slots 
	
	//
}
