
package com.drhs.wc.dao;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.drhs.wc.entity.AppointmentEntity;
import com.drhs.wc.entity.UserEntity;
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
	
	//Add an appointment
	@Override
	public AppointmentEntity addAppointment(AppointmentEntity appointmentEntity) {
		return appointmentRepository.saveAndFlush(appointmentEntity);
	}
	
    //Get appointments by date
	@Override
	public List<AppointmentEntity> getAppointmentsByDate(LocalDate apptDate) {
		return appointmentRepository.getAppointmentsByDate(apptDate);
	}

	//get appointments by date and lunch type
	@Override
	public Integer apptCountByDateLunchType(LocalDate apptDate,String lunchType) {
		return appointmentRepository.apptCountByDateLunchType(apptDate,lunchType);
	}

	@Override
	public List<AppointmentEntity> getPastAppointments(LocalDate apptDate) {
		return appointmentRepository.getPastAppointments(apptDate);
	}

	@Override
	public List<AppointmentEntity> getUpcomingAppointments(LocalDate apptDate) {
		return appointmentRepository.getUpcomingAppointments(apptDate);
	}

	@Override
	public List<AppointmentEntity> getPendingReviews() {
		return appointmentRepository.getPendingReviews();
	}

	@Override
	public AppointmentEntity addReview(AppointmentEntity appointmentEntity) {
		return appointmentRepository.saveAndFlush(appointmentEntity);
	}

	@Override
	public List<AppointmentEntity> getAppointmentsByDateRange(LocalDate apptDateF, LocalDate apptDateT) {
		// TODO Auto-generated method stub
		return appointmentRepository.getAppointmentsByDateRange(apptDateF, apptDateT);
	}

}
