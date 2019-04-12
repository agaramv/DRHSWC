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
	
	@Override
	public List<ConsultantEntity> getAllConsultants() {
		List<ConsultantEntity> consultantEntity = consultantRepo.findAll();
		return consultantEntity;
	}

	@Override
	public Optional<ConsultantEntity> getConsultantById(Integer id){
	
		Optional<ConsultantEntity> consultantEntity = consultantRepo.findById(id);
	
		return consultantEntity;
	}

	@Override
	public ConsultantEntity addNewConsultant(ConsultantEntity consultantEntity) {
		ConsultantEntity savedEntity = consultantRepo.saveAndFlush(consultantEntity);
		return savedEntity;
	}

	@Override
	public int changeToInactive(Integer id) {
		return consultantRepo.changeToInactive(id);
	}

	@Override
	public void deleteConsultant(Integer id) {
		consultantRepo.deleteById(id);
	}

}
