package com.drhs.wc.service;

import java.time.LocalDate;
import java.util.List;

import com.drhs.wc.entity.AppointmentEntity;
import com.drhs.wc.param.AppointmentResponse;
import com.drhs.wc.param.AppointmentResponseAdd;
import com.drhs.wc.param.AppointmentResponseAll;

public interface AppointmentService {
	
	//get all appointments
	List<AppointmentResponseAll> getAllAppointments();
	
	//Add appointments
	AppointmentEntity addAppointments(AppointmentResponseAdd appointmentResponseAdd);
	
	//Get appointments by date
	List<AppointmentResponseAll> getAppointmentsByDate(LocalDate apptDate);
	
	//Get Past appointments
	List<AppointmentResponseAll> getPastAppointments(LocalDate apptDate);
	
	//Get upcoming appointments
	List<AppointmentResponseAll> getUpcomingAppointments(LocalDate apptDate);
	
	//Get count by appointment
	List<AppointmentResponse> countByAppointment();
	
	//Appointment schedule - Landing page for students.
	List<AppointmentResponse> getAppointmentDays(LocalDate currDate);

}
