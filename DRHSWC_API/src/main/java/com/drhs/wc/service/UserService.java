package com.drhs.wc.service;

import java.util.List;
import java.util.Optional;

import com.drhs.wc.entity.UserEntity;

public interface UserService {

	//Get all Consultants 
	public List<UserEntity> getAllConsultants();
	
	//Get consultant by ID
	public Optional<UserEntity> getConsultantById(Integer id);
	
	//change password
	public int changePassword(String password, String email);
	
	//Add new consultant 
	public UserEntity addNewConsultant(UserEntity consultantEntity);
	
	//Update consultant by ID 
	public UserEntity updateConsultant(UserEntity consultantEntity);
		
	//Set consultant inactive
	public int changeToInactive(Integer id);
	
	//delete consultant
	public void deleteConsultant(Integer id);

	public UserEntity findUserByEmail(String email);
	
	
}
