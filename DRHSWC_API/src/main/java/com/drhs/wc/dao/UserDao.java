package com.drhs.wc.dao;

import java.util.List;
import java.util.Optional;

import com.drhs.wc.entity.UserEntity;

public interface UserDao {

	//Get all consultants
	public List<UserEntity> getAllConsultants();
	
	//Get consultant by ID
	public Optional<UserEntity> getConsultantById(Integer id);
	
	//change password
	public int changePassword(String password, String email);
		
	//Add new consultant
	public UserEntity addNewConsultant(UserEntity consultantEntity);
	
	//Update consultant by ID
	public UserEntity updateConsultant(UserEntity consultantEntity);
	
	//Update consultant to I (Inactive) essentially deleting it
	public int changeToInactive(Integer id);
	
	//delete consultant
	public void deleteConsultant(Integer id);

	//Get Consultant by email
	public UserEntity getConsultantByEmail(String email);
	
	//Get Admin by Email
	public UserEntity getAdminByEmail(String email);
}
