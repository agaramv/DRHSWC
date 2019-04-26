package com.drhs.wc.service;

import java.time.LocalDate;
import java.util.List;

import com.drhs.wc.entity.AppointmentDateConfigEntity;
import com.drhs.wc.entity.AppointmentEntity;
import com.drhs.wc.param.AppointmentResponseSchedule;
import com.drhs.wc.param.AppointmentResponseAdd_Update;
import com.drhs.wc.param.AppointmentResponseAll;

public interface AppointmentService {
	
	//get all appointments
	public List<AppointmentResponseAll> getAllAppointments();
	
	//Add appointments
	public AppointmentEntity addAppointments(AppointmentResponseAdd_Update appointmentResponseAdd);
	
	//Get appointments by date
	public List<AppointmentResponseAll> getAppointmentsByDate(LocalDate apptDate);
	
	//Get appointments by date range
	public List<AppointmentResponseAll> getAppointmentsByDateRange(LocalDate apptDateF,LocalDate apptDateT);
	
	//Get Past appointments
	public List<AppointmentResponseAll> getPastAppointments(LocalDate apptDate);
	
	//Get upcoming appointments
	public List<AppointmentResponseAll> getUpcomingAppointments(LocalDate apptDate);
	
	//Get review
	public AppointmentEntity addReview(AppointmentResponseAdd_Update appointmentResponseAdd);
	
	//Get all appointments with pending reviews
	public List<AppointmentResponseAll> getPendingReviews();
	
	
	//Appointment schedule - Landing page for students.
	public List<AppointmentResponseSchedule> getAppointmentDays(LocalDate currDate);

	 //get all blocked appointments
	public List<AppointmentDateConfigEntity> getAllBlockedAppointments();
	
	//Block appointment date
	public AppointmentDateConfigEntity blockAppointments(AppointmentDateConfigEntity appointmentConfig);
	
	//Block appointment date
	public void deleteblockedApptDate(LocalDate dateBlocked);
}
