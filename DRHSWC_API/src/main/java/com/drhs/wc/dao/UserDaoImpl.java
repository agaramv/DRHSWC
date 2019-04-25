package com.drhs.wc.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.drhs.wc.entity.UserEntity;
import com.drhs.wc.repository.AdminRepository;
import com.drhs.wc.repository.ConsultantRepository;

@Service
public class UserDaoImpl implements UserDao{

	@Autowired
	ConsultantRepository consultantRepo;
	
	@Autowired
	AdminRepository adminRepo;
	
	//Get all Consultants
	@Override
	public List<UserEntity> getAllConsultants() {
		List<UserEntity> consultantEntity = consultantRepo.findAll();
		return consultantEntity;
	}

	//Get consultant by ID
	@Override
	public Optional<UserEntity> getConsultantById(Integer id){
	
		Optional<UserEntity> consultantEntity = consultantRepo.findById(id);
	
		return consultantEntity;
	}

	//Add consultants
	@Override
	public UserEntity addNewConsultant(UserEntity consultantEntity) {
		UserEntity addEntity = consultantRepo.saveAndFlush(consultantEntity);
		System.out.println(addEntity.getFirstName());
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
	public UserEntity updateConsultant(UserEntity consultantEntity) {
		UserEntity updateEntity = consultantRepo.saveAndFlush(consultantEntity); 
		return updateEntity;
	}

	@Override
	public UserEntity getConsultantByEmail(String email) {
		UserEntity consultantEntity = consultantRepo.findByEmail(email);
	
		return consultantEntity;
	}

	@Override
	public int changePassword(String password, String email) {
		return consultantRepo.changePassword(password, email);
	}

	@Override
	public UserEntity getAdminByEmail(String email) {
		return adminRepo.findByEmail(email);
	}

}
