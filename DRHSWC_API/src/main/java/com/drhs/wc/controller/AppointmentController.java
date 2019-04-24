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
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.drhs.wc.entity.AppointmentDateConfigEntity;
import com.drhs.wc.entity.AppointmentEntity;
import com.drhs.wc.param.AppointmentResponseSchedule;
import com.drhs.wc.param.AppointmentResponseAdd_Update;
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
	//********************
	//Get all appointment
	//*******************
	@GetMapping("/appointment/all")
	public List<AppointmentResponseAll> getAllAppointments(){
		
		return appointmentService.getAllAppointments();
	}
	
	//********************
	// Add appointment
	//*******************
	@PostMapping("/appointment/add")
	public AppointmentEntity addAppointment(@RequestBody AppointmentResponseAdd_Update appointmentResponseAdd){
		return appointmentService.addAppointments(appointmentResponseAdd);
	}
	
	//********************
	// Add review
	//*******************
	@PutMapping("/appointment/review/add")
	public AppointmentEntity addReview(@RequestBody AppointmentResponseAdd_Update appointmentResponseUpdate){
		return appointmentService.addReview(appointmentResponseUpdate);
	}
	
	//*************************************************
	//Get appointment schedule to make appointments
	//*************************************************
	@GetMapping("/appointment/schedule")
	public List<AppointmentResponseSchedule> getAppointments(){
		
		//Pass null appointment date to use System date
		return appointmentService.getAppointmentDays(null);
	}
	
	//*************************************************
	//Get pending reviews
	//*************************************************
	@GetMapping("/appointment/review/pending")
	public List<AppointmentResponseAll> getPendingReviews(){
		
		//Pass null appointment date to use System date
		return appointmentService.getPendingReviews();
	}
	
	//****************************************************
	// Get appointment schedule for a given date 
	// to make appointments
	// *****  THIS IS INTENDED FOR TESTING PURPOSES ******
	//****************************************************
	@GetMapping("/appointment/schedule/{apptDate}")
	public List<AppointmentResponseSchedule> getAppointmentsByDate(@PathVariable("apptDate") String argDate){
		//Pass the parameter date to get schedule for desired date
		LocalDate apptDate = LocalDate.parse(argDate);
		return appointmentService.getAppointmentDays(apptDate);
	}
	
	//********************
	//Get appointment range
	//*******************
	@GetMapping("/appointment/range/{apptDateF}/{apptDateT}")
	public List<AppointmentResponseAll> getAppointmentsByDateRange(@PathVariable("apptDateF") String argDateF, @PathVariable("apptDateT") String argDateT){
		LocalDate apptDateF = LocalDate.parse(argDateF);
		LocalDate apptDateT = LocalDate.parse(argDateT);
		return appointmentService.getAppointmentsByDateRange(apptDateF, apptDateT);
	}
	
	//***********************
	// Get past appointments
	//***********************
	@GetMapping("/appointment/past")
	public List<AppointmentResponseAll> getPastAppointments(){
		return appointmentService.getPastAppointments(null);
	}
	
	//***********************
	// Get upcoming appointments
	//***********************
	@GetMapping("/appointment/upcoming")
	public List<AppointmentResponseAll> getUpcomingAppointments(){
		return appointmentService.getUpcomingAppointments(null);
	}
	
	@PostMapping("/appointment/block")
	public AppointmentDateConfigEntity blockAppointments(AppointmentDateConfigEntity appointmentDateConfigEntity){
		return appointmentService.blockAppointments(appointmentDateConfigEntity);
	}
	
	@GetMapping("/appointment/blocked/all")
	public List<AppointmentDateConfigEntity> getAllBlockedAppointments(){
		return appointmentService.getAllBlockedAppointments();
	}
	

	//****************************
	//Get all appointment by date
	//****************************
	@GetMapping("/appointment/date/{apptDate}")
			public List<AppointmentResponseAll> getAppointmentsBydate(@PathVariable("apptDate") String argDate){
				
			    LocalDate apptDate = LocalDate.parse(argDate);
				return appointmentService.getAppointmentsByDate(apptDate); 
			}
		
		//*********************************
		//Get all appointment by date range
		//*********************************
		@GetMapping("/appointment/daterange/{apptDate}")
			public List<AppointmentResponseAll> getAppointmentsBydaterange(@PathVariable("apptDate") String argDate){
				
			    LocalDate apptDate = LocalDate.parse(argDate);
				//return appointmentService.getAppointmentsByDate(apptDateFrom, apptDateTo); 
			    return null;
			}
	//***********************
	// Delete Appointment
	//***********************
	
	
	
	//****************************************
	//Get all appointment by date & LunchType
	//****************************************
	
	
	//********************************
	//Get all appointment by last name
	//********************************
	
	
	
}
