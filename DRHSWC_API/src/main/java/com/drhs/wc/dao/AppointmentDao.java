package com.drhs.wc.dao;

import java.time.LocalDate;
import java.util.List;

import com.drhs.wc.entity.AppointmentEntity;
import com.drhs.wc.entity.ConsultantEntity;
import com.drhs.wc.param.AppointmentResponseAll;

public interface AppointmentDao {

	//Get all appointments
	public List<AppointmentEntity> getAllAppointments();
	
	//Save a appointments
	public AppointmentEntity addAppointment(AppointmentEntity appointmentEntity);
	
	//Get appointments by date
	public List<AppointmentEntity> getAppointmentsByDate(LocalDate apptDate); 
	
	//Get appointments by range
	public List<AppointmentEntity> getAppointmentsByDateRange(LocalDate apptDateF, LocalDate apptDateT);
	
	//Get past appointments
	public List<AppointmentEntity> getPastAppointments(LocalDate apptDate);
	
	//Get upcoming appointments
	public List<AppointmentEntity> getUpcomingAppointments(LocalDate apptDate);
	
	//Get all appointments with pending reviews
	public List<AppointmentEntity> getPendingReviews();
	
	//Add review
	public AppointmentEntity addReview(AppointmentEntity appointmentEntity);
	
	//Get count of appointment by date and Lunch type
	public Integer apptCountByDateLunchType(LocalDate apptDate,String lunchType);

	//Delete blocked date 
	//public void deleteBlockedapptDate(LocalDate blockedapptDate);

	
	//
}
