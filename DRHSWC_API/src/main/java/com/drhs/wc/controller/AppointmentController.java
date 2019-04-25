/**
 * 
 */
package com.drhs.wc.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
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
	
	
	//****************************************************
	// Get appointment schedule to make appointments
	// for a given date 
	// *****  THIS IS INTENDED FOR TESTING PURPOSES ******
	//****************************************************
	@GetMapping("/appointment/schedule/{apptDate}")
	public List<AppointmentResponseSchedule> getAppointmentsByDate(@PathVariable("apptDate") String argDate){
		//Pass the parameter date to get schedule for desired date
		LocalDate apptDate = LocalDate.parse(argDate);
		return appointmentService.getAppointmentDays(apptDate);
	}
	
	//********************
	//Get all appointments
	//*******************
	@GetMapping("/appointment/all")
	public List<AppointmentResponseAll> getAllAppointments(){
		
		return appointmentService.getAllAppointments();
	}
	
	//****************************
	//Get all appointment for a supplied date
	//****************************
	@GetMapping("/appointment/date/{apptDate}")
	public List<AppointmentResponseAll> getAppointmentsBydate(@PathVariable("apptDate") String argDate){
					
		LocalDate apptDate = LocalDate.parse(argDate);
		return appointmentService.getAppointmentsByDate(apptDate); 
	}
	
	//****************************
	//Get all upcoming appointments 
	//****************************
	@GetMapping("/appointment/upcoming")
	public List<AppointmentResponseAll> getUpcomingAppointments(){
					
		return appointmentService.getUpcomingAppointments(null); 
	}
	
	//***************************
	// Get all past appointments
	//***************************
	@GetMapping("/appointment/past")
	public List<AppointmentResponseAll> getPastAppointments(){
		return appointmentService.getPastAppointments(null);
	}
	
	//***********************
	//Get pending reviews
	//***********************
	@GetMapping("/appointment/review/pending")
	public List<AppointmentResponseAll> getPendingReviews(){
		
		//Pass null appointment date to use System date
		return appointmentService.getPendingReviews();
	}
	

	//**********************************************
	//Get all appointments for a supplied date range
	//**********************************************
	@GetMapping("/appointment/range/{apptDateF}/{apptDateT}")
	public List<AppointmentResponseAll> getAppointmentsByDateRange(@PathVariable("apptDateF") String argDateF, @PathVariable("apptDateT") String argDateT){
		LocalDate apptDateF = LocalDate.parse(argDateF);
		LocalDate apptDateT = LocalDate.parse(argDateT);
		return appointmentService.getAppointmentsByDateRange(apptDateF, apptDateT);
	}
	
	//*****************************
	// Block New Appointment Dates
	//******************************
	
	@PostMapping("/appointment/block")
	public AppointmentDateConfigEntity blockAppointments(@RequestBody AppointmentDateConfigEntity appointmentDateConfigEntity){
		return appointmentService.blockAppointments(appointmentDateConfigEntity);
	}
	
	//********************************************
	// Get all Blocked Appointment dates and reason
	//********************************************
	@GetMapping("/appointment/blocked/all")
	public List<AppointmentDateConfigEntity> getAllBlockedAppointments(){
		return appointmentService.getAllBlockedAppointments();
	}
			

	/* ********************************
	 * Delete blocked appointment date 
	 ********************************/
//	@DeleteMapping("/consultant/delete/{id}")
//	public void deleteBlockedApptDate(@PathVariable LocalDate blockedDate){
//		return appointmentService.deleteBlockeDate(blockedDate); 
//	}
	
	
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
