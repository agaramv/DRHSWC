package com.drhs.wc.dao;

import java.util.List;
import java.util.Optional;

import com.drhs.wc.entity.ConsultantEntity;

public interface ConsultantDao {

	//Get all consultants
	public List<ConsultantEntity> getAllConsultants();
	
	//Get one consultant
	public Optional<ConsultantEntity> getConsultantById(Integer id);
		
	//Create new consultant
	public ConsultantEntity addNewConsultant(ConsultantEntity consultantEntity);
	
	//Update consultant to I (Inactive) essentially deleting it
	public int changeToInactive(Integer id);
	
	//delete consultant
	public ConsultantEntity deleteConsultant(int id);
}
