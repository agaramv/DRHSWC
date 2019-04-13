package com.drhs.wc.dao;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.drhs.wc.entity.ConsultantEntity;
import com.drhs.wc.repository.AppointmentRepository;

@Service
public class AppointmentDaoImpl implements AppointmentDao {
	
	@Autowired
	private AppointmentRepository appointmentRepository;

	@Override
	public List<ConsultantEntity> getAllReviews() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Integer findByDate(LocalDate date) {
		return appointmentRepository.countByDate(date);
	}

}
