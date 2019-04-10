package com.drhs.wc.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.drhs.wc.dao.ConsultantDao;
import com.drhs.wc.entity.ConsultantEntity;

@Service
public class ConsultantServiceImpl implements ConsultantService{

	@Autowired
	ConsultantDao consultantDao;
	
	@Override
	public List<ConsultantEntity> getAllConsultants() {
		return consultantDao.getAllConsultants();
	}

	@Override
	public Optional<ConsultantEntity> getConsultantById(Integer id) {
		//String k = String.valueOf(id);
		return consultantDao.getConsultantById(id);
	}

	@Override
	public ConsultantEntity addNewConsultant(ConsultantEntity consultantEntity) {
		return consultantDao.addNewConsultant(consultantEntity);
	}

	@Override
	@Transactional
	public int changeToInactive(int id) {
		return consultantDao.changeToInactive(id);
	}

	@Override
	public ConsultantEntity deleteConsultant(int id) {
		return consultantDao.deleteConsultant(id);
	}

}
