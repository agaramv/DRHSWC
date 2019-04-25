package com.drhs.wc.controller;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.drhs.wc.entity.UserEntity;
import com.drhs.wc.service.AppointmentService;
import com.drhs.wc.service.UserService;

/**
 * @author VidurAgaram
 *
 */
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class UserController {

	@Autowired
	UserService consultantService;

	/* *************************
	// Add New Consultant
	***************************/
	
	@PostMapping("/user/add")
	public UserEntity addNewConsultant(@Valid @RequestBody UserEntity consultantEntity){
		UserEntity ce = consultantService.addNewConsultant(consultantEntity);
		return ce; 
	}
	
	//************************** 
	//**  Get all Consultants
	//*************************
	@GetMapping("/consultant/all")
	public List<UserEntity> getAllConsultants(){
		return consultantService.getAllConsultants();
	}
	//***************************
	//** Get Consultant by ID 
	//***************************
	
	@GetMapping("/consultant/{id}")
	public Optional<UserEntity> getConsultantById(@PathVariable Integer id){
		return consultantService.getConsultantById(id);
	}
	
	//***************************
	//** Get User by Email 
	//***************************
	
	@GetMapping("/user/email/{email}")
	public UserEntity getUserByEmail(@PathVariable String email){
		return consultantService.findUserByEmail(email);
	}
	
	//***************************
	//** Change Password 
	//***************************
	
	@PutMapping("/consultant/{password}/{email}")
	public void changePassword(@PathVariable String password, @PathVariable String email){
	  consultantService.changePassword(new BCryptPasswordEncoder().encode(password), email);
	}
	
	/* *************************
	 * Update consultants by ID
	 ***************************/
	@PutMapping("/consultant/update")
	public void updateConsultant(@Valid @RequestBody UserEntity consultantEntity){
		consultantService.updateConsultant(consultantEntity); 
	}
	
	/* *************************
	 * Update consultants by ID
	 ***************************/
	@PatchMapping("/consultant/patch")
	public void patchConsultant(@Valid @RequestBody UserEntity consultantEntity){
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
