package com.drhs.wc.controller;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.drhs.wc.entity.ConsultantEntity;
import com.drhs.wc.service.ConsultantService;

@RestController
public class ConsultantController {

	@Autowired
	ConsultantService consultantService;
	
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
	
	@PostMapping("/consultant/inactive")
	public int changeToInactive(){
		int ce = consultantService.changeToInactive(21);
		return ce; 
	}
	
	@DeleteMapping("/consultant/delete/{id}")
	public ConsultantEntity deleteConsultant(@PathVariable int id){
		ConsultantEntity ce = consultantService.deleteConsultant(id);
		return ce; 
	}
}
