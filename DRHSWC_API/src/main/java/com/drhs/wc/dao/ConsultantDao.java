package com.drhs.wc.dao;

import java.util.List;
import java.util.Optional;

import com.drhs.wc.entity.ConsultantEntity;

public interface ConsultantDao {

	//Get all consultants
	public List<ConsultantEntity> getAllConsultants();
	
	//Get consultant by ID
	public Optional<ConsultantEntity> getConsultantById(Integer id);
	
	//change password
	public int changePassword(String password, String email);
		
	//Add new consultant
	public ConsultantEntity addNewConsultant(ConsultantEntity consultantEntity);
	
	//Update consultant by ID
	public ConsultantEntity updateConsultant(ConsultantEntity consultantEntity);
	
	//Update consultant to I (Inactive) essentially deleting it
	public int changeToInactive(Integer id);
	
	//delete consultant
	public void deleteConsultant(Integer id);

	public ConsultantEntity getConsultantByEmail(String email);
}
