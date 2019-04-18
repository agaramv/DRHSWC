package com.drhs.wc.dao;

import java.time.LocalDate;
import java.util.List;

import com.drhs.wc.entity.AppointmentEntity;
import com.drhs.wc.entity.ConsultantEntity;

public interface AppointmentDao {

	//Get all appointments
	public List<AppointmentEntity> getAllAppointments();
	
	
	//Get all appointments
	public List<ConsultantEntity> getAllReviews();
	
	Integer findByDate(LocalDate date);

	//Get available slots 
	
	//
}
