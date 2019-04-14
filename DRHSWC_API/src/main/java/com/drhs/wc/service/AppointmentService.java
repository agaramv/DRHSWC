package com.drhs.wc.service;

import java.time.LocalDate;
import java.util.List;

import com.drhs.wc.param.AppointmentResponse;

public interface AppointmentService {
	
	List<AppointmentResponse> countByAppointment();
	
	List<AppointmentResponse> getAppointmentDays(LocalDate currDate);

}
