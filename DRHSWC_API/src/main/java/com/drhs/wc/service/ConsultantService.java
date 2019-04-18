package com.drhs.wc.service;

import java.util.List;
import java.util.Optional;

import com.drhs.wc.entity.ConsultantEntity;

public interface ConsultantService {

	//Get all Consultants 
	public List<ConsultantEntity> getAllConsultants();
	
	//Get consultant by ID
	public Optional<ConsultantEntity> getConsultantById(Integer id);
	
	//Add new consultant 
	public ConsultantEntity addNewConsultant(ConsultantEntity consultantEntity);
	
	//Update consultant by ID 
	public ConsultantEntity updateConsultant(ConsultantEntity consultantEntity);
		
	//Set consultant inactive
	public int changeToInactive(Integer id);
	
	//delete consultant
	public void deleteConsultant(Integer id);
	
	
}
