package com.drhs.wc.controller;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.drhs.wc.entity.ConsultantEntity;
import com.drhs.wc.service.AppointmentService;
import com.drhs.wc.service.ConsultantService;

/**
 * @author VidurAgaram
 *
 */
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class ConsultantController {

	@Autowired
	ConsultantService consultantService;

	/* *************************
	// Add New Consultant
	***************************/
	
	@PostMapping("/consultant/add")
	public ConsultantEntity addNewConsultant(@Valid @RequestBody ConsultantEntity consultantEntity){
		ConsultantEntity ce = consultantService.addNewConsultant(consultantEntity);
		return ce; 
	}
	
	//************************** 
	//**  Get all Consultants
	//*************************
	@GetMapping("/consultant/all")
	public List<ConsultantEntity> getAllConsultants(){
		return consultantService.getAllConsultants();
	}
	//***************************
	//** Get Consultant by ID 
	//***************************
	
	@GetMapping("/consultant/{id}")
	public Optional<ConsultantEntity> getConsultantById(@PathVariable Integer id){
		return consultantService.getConsultantById(id);
	}
	
	/* *************************
	 * Update consultants by ID
	 ***************************/
	@PutMapping("/consultant/update")
	public void updateConsultant(@Valid @RequestBody ConsultantEntity consultantEntity){
		consultantService.updateConsultant(consultantEntity); 
	}
	
	
	/* *************************
	 * Update consultants by ID
	 ***************************/
	@PatchMapping("/consultant/patch")
	public void patchConsultant(@Valid @RequestBody ConsultantEntity consultantEntity){
		consultantService.updateConsultant(consultantEntity); 
	}
	
	
	/* *************************
	 * Delete consultants by ID
	 ***************************/
	@DeleteMapping("/consultant/delete/{id}")
	public void deleteConsultant(@PathVariable Integer id){
		consultantService.deleteConsultant(id); 
	}

	/* *****************************
	 * set consultant status inactive
	 ********************************/
	@PostMapping("/consultant/inactive/{id}")
	public int changeToInactive(@PathVariable Integer id){
		int ce = consultantService.changeToInactive(id);
		return ce; 
	}
	
	
	
	
}
