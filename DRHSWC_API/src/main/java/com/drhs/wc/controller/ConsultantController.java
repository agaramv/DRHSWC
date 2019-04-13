package com.drhs.wc.controller;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.context.ApplicationContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.drhs.wc.entity.ConsultantEntity;
import com.drhs.wc.param.AppointmentResponse;
import com.drhs.wc.service.AppointmentService;
import com.drhs.wc.service.ConsultantService;


@RestController
public class ConsultantController {

	@Autowired
	ConsultantService consultantService;
	
	@Autowired
	AppointmentService appointmentService;
	
	//@Autowired
	//ApplicationContext context;

	//ConsultantService consultantService = (ConsultantService) context.getBean(ConsultantService.class);
	
	@GetMapping("/consultant/all")
	public List<ConsultantEntity> getAllConsultants(){
		return consultantService.getAllConsultants();
		//return null;
	}
	
	@GetMapping("/consultant/{id}")
	public Optional<ConsultantEntity> getConsultantById(@PathVariable Integer id){
		return consultantService.getConsultantById(id);
	}
	
	@PostMapping("/consultant/new")
	public ConsultantEntity addNewConsultant(@Valid @RequestBody ConsultantEntity consultantEntity){
		ConsultantEntity ce = consultantService.addNewConsultant(consultantEntity);
		return ce; 
	}
	
	/*
	 * set consultant inactive
	 * 
	 */
	@PostMapping("/consultant/inactive/{id}")
	public int changeToInactive(@PathVariable Integer id){
		int ce = consultantService.changeToInactive(id);
		return ce; 
	}
	
	@DeleteMapping("/consultant/delete/{id}")
	public void deleteConsultant(@PathVariable Integer id){
		consultantService.deleteConsultant(id); 
	}
	
	@GetMapping("/appointments")
	public List<AppointmentResponse> getAppointments(){
		return appointmentService.countByAppointment();
	}
}
