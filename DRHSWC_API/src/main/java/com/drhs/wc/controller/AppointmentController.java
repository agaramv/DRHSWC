/**
 * 
 */
package com.drhs.wc.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.drhs.wc.param.AppointmentResponse;
import com.drhs.wc.param.AppointmentResponseAll;
import com.drhs.wc.service.AppointmentService;

/**
 * @author VidurAgaram
 *
 */
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class AppointmentController {

	@Autowired
	AppointmentService appointmentService;
	
	@GetMapping("/appointment/all")
	public List<AppointmentResponseAll> getAllAppointments(){
		
		return appointmentService.getAllAppointments();
	}
	
	@GetMapping("/appointment/date")
	public List<AppointmentResponse> getAppointments(){
		LocalDate currDate = LocalDate.of(2019, 4,17);
		return appointmentService.getAppointmentDays(currDate);
	}
}
