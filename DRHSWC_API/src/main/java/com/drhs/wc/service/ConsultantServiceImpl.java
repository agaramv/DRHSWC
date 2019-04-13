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
	//@Transactional(propagation=)
	public int changeToInactive(Integer id) {
		  //EntityManager em = null;
		EntityTransaction tx = null;
		int ret_code =0;
		try {
		  tx = entityManager.getTransaction();
		  tx.begin();
		   ret_code = consultantDao.changeToInactive(id);
		  tx.commit();
		}catch(Exception e){
			e.printStackTrace();
			if(tx != null)
			tx.rollback();
		}
		return ret_code;
	}

	@Override
	public void deleteConsultant(Integer id) {
		consultantDao.deleteConsultant(id);
	}

}
