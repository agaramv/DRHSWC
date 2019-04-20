package com.drhs.wc.service;

import java.time.LocalDate;
import java.util.List;

import com.drhs.wc.entity.AppointmentEntity;
import com.drhs.wc.param.AppointmentResponse;
import com.drhs.wc.param.AppointmentResponseAdd;
import com.drhs.wc.param.AppointmentResponseAll;

public interface AppointmentService {
	
	
	List<AppointmentResponseAll> getAllAppointments();
	
	AppointmentEntity addAppointments(AppointmentResponseAdd appointmentResponseAdd);
	
	List<AppointmentResponseAll> getAppointmentsByDate(LocalDate apptDate);
	
	List<AppointmentEntity> getPastAppointments(LocalDate apptDate);
	
	List<AppointmentEntity> getUpcomingAppointments(LocalDate apptDate);
	
	List<AppointmentResponse> countByAppointment();
	
	List<AppointmentResponse> getAppointmentDays(LocalDate currDate);

}
