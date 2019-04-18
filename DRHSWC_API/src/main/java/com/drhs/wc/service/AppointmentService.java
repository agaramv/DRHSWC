package com.drhs.wc.service;

import java.time.LocalDate;
import java.util.List;

import com.drhs.wc.param.AppointmentResponse;
import com.drhs.wc.param.AppointmentResponseAll;

public interface AppointmentService {
	
	List<AppointmentResponseAll> getAllAppointments();
	
	List<AppointmentResponse> countByAppointment();
	
	List<AppointmentResponse> getAppointmentDays(LocalDate currDate);

}
