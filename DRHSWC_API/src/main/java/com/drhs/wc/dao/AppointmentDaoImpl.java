package com.drhs.wc.dao;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.drhs.wc.entity.AppointmentEntity;
import com.drhs.wc.entity.ConsultantEntity;
import com.drhs.wc.param.AppointmentResponseAll;
import com.drhs.wc.repository.AppointmentRepository;

@Service
public class AppointmentDaoImpl implements AppointmentDao {
	
	@Autowired
	private AppointmentRepository appointmentRepository;

	//Get All appointments
	@Override
	public List<AppointmentEntity> getAllAppointments() {
	
		return appointmentRepository.findAll();
	}
	

	@Override
	public Integer findByDate(LocalDate date) {
		//return appointmentRepository.countByDate(date);
		return 0;
	}


	@Override
	public List<AppointmentResponseAll> getAppointmentsByDate(LocalDate apptDate) {
		return appointmentRepository.getAppointmentsByDate(apptDate);
	}


}
