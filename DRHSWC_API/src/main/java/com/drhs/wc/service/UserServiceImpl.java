package com.drhs.wc.service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import javax.persistence.EntityManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.drhs.wc.dao.UserDao;
import com.drhs.wc.entity.UserEntity;

@Service
public class UserServiceImpl implements UserService{

	@Autowired
	UserDao consultantDao;
	
	@Autowired
	EntityManager entityManager;
	
	//Get all Consultants
	
	@Override
	public List<UserEntity> getAllConsultants() {
		return consultantDao.getAllConsultants();
	}

	//Get Consultants by ID
	
	@Override
	public Optional<UserEntity> getConsultantById(Integer id) {
		//String k = String.valueOf(id);
		return consultantDao.getConsultantById(id);
	}

	//Add new consultants
	
	@Override
	public UserEntity addNewConsultant(UserEntity consultantEntity) {
		
		//set default Password to DRHSwc01
		consultantEntity.setConsultantPassword(new BCryptPasswordEncoder().encode("drhswcc")); 
		
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
	public UserEntity updateConsultant(UserEntity consultantEntity) {
		return consultantDao.updateConsultant(consultantEntity);
	
	}

	@Override
	public UserEntity findUserByEmail(String email) {
		// TODO Auto-generated method stub
		return consultantDao.getConsultantByEmail(email);
	}

	@Override
	@Transactional
	public int changePassword(String password, String email) {
		return consultantDao.changePassword(password, email);
	}
}
