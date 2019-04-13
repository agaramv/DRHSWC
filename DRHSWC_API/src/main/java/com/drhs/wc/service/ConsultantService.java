package com.drhs.wc.service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import com.drhs.wc.entity.ConsultantEntity;

public interface ConsultantService {

	public List<ConsultantEntity> getAllConsultants();
	
	public Optional<ConsultantEntity> getConsultantById(Integer id);
	
	public ConsultantEntity addNewConsultant(ConsultantEntity consultantEntity);
	
	public int changeToInactive(Integer id);
	
	public void deleteConsultant(Integer id);
	
	
}
