/**
 * 
 */
package com.drhs.wc.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.drhs.wc.param.AppointmentResponse;
import com.drhs.wc.service.AppointmentService;

/**
 * @author VidurAgaram
 *
 */
@RestController
public class AppointmentController {

	@Autowired
	AppointmentService appointmentService;
	
	@GetMapping("/appointments")
	public List<AppointmentResponse> getAppointments(){
		LocalDate currDate = LocalDate.of(2019, 5, 9);
		return appointmentService.getAppointmentDays(currDate);
	}
}
