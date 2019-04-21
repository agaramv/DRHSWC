package com.drhs.wc.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.drhs.wc.entity.ConsultantEntity;
import com.drhs.wc.repository.ConsultantRepository;

@Service
public class ConsultantDaoImpl implements ConsultantDao{

	@Autowired
	ConsultantRepository consultantRepo;
	
	//Get all Consultants
	@Override
	public List<ConsultantEntity> getAllConsultants() {
		List<ConsultantEntity> consultantEntity = consultantRepo.findAll();
		return consultantEntity;
	}

	//Get consultant by ID
	@Override
	public Optional<ConsultantEntity> getConsultantById(Integer id){
	
		Optional<ConsultantEntity> consultantEntity = consultantRepo.findById(id);
	
		return consultantEntity;
	}

	//Add consultants
	@Override
	public ConsultantEntity addNewConsultant(ConsultantEntity consultantEntity) {
		ConsultantEntity addEntity = consultantRepo.saveAndFlush(consultantEntity);
		return addEntity;
	}

	//Inactivate consultants
	@Override
	public int changeToInactive(Integer id) {
		return consultantRepo.changeToInactive(id);
	}

	//Delete consultants
	@Override
	public void deleteConsultant(Integer id) {
		consultantRepo.deleteById(id);
	}

	//Update Consultants
	@Override
	public ConsultantEntity updateConsultant(ConsultantEntity consultantEntity) {
		ConsultantEntity updateEntity = consultantRepo.saveAndFlush(consultantEntity); 
		return updateEntity;
	}

	@Override
	public ConsultantEntity getConsultantByEmail(String email) {
		ConsultantEntity consultantEntity = consultantRepo.findByEmail(email);
	
		return consultantEntity;
	}

}
