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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.drhs.wc.entity.AppointmentEntity;
import com.drhs.wc.param.AppointmentResponse;
import com.drhs.wc.param.AppointmentResponseAdd;
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
	public AppointmentEntity addAppointment(@RequestBody AppointmentResponseAdd appointmentResponseAdd){
		return appointmentService.addAppointments(appointmentResponseAdd);
	}
	
	//*************************************************
	//Get appointment schedule to make appointments
	//*************************************************
	@GetMapping("/appointment/schedule")
	public List<AppointmentResponse> getAppointments(){
		
		//Pass null appointment date to use System date
		return appointmentService.getAppointmentDays(null);
	}
	
	//****************************************************
	// Get appointment schedule for a given date 
	// to make appointments
	// *****  THIS IS INTENDED FOR TESTING PURPOSES ******
	//****************************************************
	@GetMapping("/appointment/schedule/{apptDate}")
	public List<AppointmentResponse> getAppointmentsByDate(@PathVariable("apptDate") String argDate){
		//Pass the parameter date to get schedule for desired date
		LocalDate apptDate = LocalDate.parse(argDate);
		return appointmentService.getAppointmentDays(apptDate);
	}
	
	//*******************
	// Save Appointment
	//*******************
	
	
	//***********************
	// Get past appointments
	//***********************
	@GetMapping("/appointment/past")
	public List<AppointmentEntity> getPastAppointments(){
		return appointmentService.getPastAppointments(null);
	}
	
	//***********************
	// Get upcoming appointments
	//***********************
	@GetMapping("/appointment/upcoming")
	public List<AppointmentEntity> getUpcomingAppointments(){
		return appointmentService.getUpcomingAppointments(null);
	}
	
//	@GetMapping("/appointment/upcoming/{apptDate}")
//	public List<AppointmentEntity> getUpcomingAppointments(@PathVariable("apptDate") String date){
//		LocalDate apptDate = LocalDate.parse(date);
//		return appointmentService.getUpcomingAppointments(apptDate);
//	}
	
	//***********************
	// Delete Appointment
	//***********************
	
	
	
	
	
	//**********************
	// Update Appointment
	//**********************
	
	
	
	
	
	//****************************************
	//Get all appointment by date & LunchType
	//****************************************
	
	
	
	
	
	
	//********************************
	//Get all appointment by last name
	//********************************
	
	
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
}
