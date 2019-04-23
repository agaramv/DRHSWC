package com.drhs.wc.service;

import java.time.LocalDate;
import java.util.List;

import com.drhs.wc.entity.AppointmentEntity;
import com.drhs.wc.param.AppointmentResponseSchedule;
import com.drhs.wc.param.AppointmentResponseAdd_Update;
import com.drhs.wc.param.AppointmentResponseAll;

public interface AppointmentService {
	
	//get all appointments
	List<AppointmentResponseAll> getAllAppointments();
	
	//Add appointments
	AppointmentEntity addAppointments(AppointmentResponseAdd_Update appointmentResponseAdd);
	
	//Get appointments by date
	List<AppointmentResponseAll> getAppointmentsByDate(LocalDate apptDate);
	
	//Get appointments by date range
	List<AppointmentResponseAll> getAppointmentsByDateRange(LocalDate apptDateF,LocalDate apptDateT);
	
	//Get Past appointments
	List<AppointmentResponseAll> getPastAppointments(LocalDate apptDate);
	
	//Get upcoming appointments
	List<AppointmentResponseAll> getUpcomingAppointments(LocalDate apptDate);
	
	//Get review
	AppointmentEntity addReview(AppointmentResponseAdd_Update appointmentResponseAdd);
	
	//Get all appointments with pending reviews
	List<AppointmentResponseAll> getPendingReviews();
	
	//Get count by appointment
	List<AppointmentResponseSchedule> countByAppointment();
	
	//Appointment schedule - Landing page for students.
	List<AppointmentResponseSchedule> getAppointmentDays(LocalDate currDate);

}
