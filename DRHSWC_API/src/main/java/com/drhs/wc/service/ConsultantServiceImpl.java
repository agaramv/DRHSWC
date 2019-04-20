package com.drhs.wc.service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import javax.persistence.EntityManager;
import javax.persistence.EntityTransaction;
import javax.persistence.PersistenceContext;
import javax.persistence.PersistenceContextType;
import javax.persistence.Query;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.drhs.wc.dao.ConsultantDao;
import com.drhs.wc.entity.ConsultantEntity;

@Service
public class ConsultantServiceImpl implements ConsultantService{

	@Autowired
	ConsultantDao consultantDao;
	
	@Autowired
	EntityManager entityManager;
	
	//Get all Consultants
	
	@Override
	public List<ConsultantEntity> getAllConsultants() {
		return consultantDao.getAllConsultants();
	}

	//Get Consultants by ID
	
	@Override
	public Optional<ConsultantEntity> getConsultantById(Integer id) {
		//String k = String.valueOf(id);
		return consultantDao.getConsultantById(id);
	}

	//Add new consultants
	
	@Override
	public ConsultantEntity addNewConsultant(ConsultantEntity consultantEntity) {
		return consultantDao.addNewConsultant(consultantEntity);
	}

	//Update consultant to inactive
	@Override
	@Transactional
	public int changeToInactive(Integer id) {
	
		 return consultantDao.changeToInactive(id);
		 
	}

	//Delete consultant
	@Override
	public void deleteConsultant(Integer id) {
		consultantDao.deleteConsultant(id);
	}

	//Update Consultant
	@Override
	public ConsultantEntity updateConsultant(ConsultantEntity consultantEntity) {
		return consultantDao.updateConsultant(consultantEntity);
	
	}
}
