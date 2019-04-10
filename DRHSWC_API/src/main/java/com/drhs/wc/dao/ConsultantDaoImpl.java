package com.drhs.wc.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

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
	public Optional<ConsultantEntity> getConsultantById(String id){
		int k = Integer.valueOf(id);
		System.out.print("I am here in conDao");
		Optional<ConsultantEntity> consultantEntity = consultantRepo.findById(id);
		System.out.print("I am here in conDao");
		return consultantEntity;
	}

	@Override
	public ConsultantEntity addNewConsultant(ConsultantEntity consultantEntity) {
		ConsultantEntity savedEntity = consultantRepo.saveAndFlush(consultantEntity);
		return savedEntity;
	}

	@Override
	public int changeToInactive(int id) {
		return consultantRepo.changeToInactive(id);
	}

	@Override
	public ConsultantEntity deleteConsultant(int id) {
		ConsultantEntity deletedEntity;
		return null;
	}

}
