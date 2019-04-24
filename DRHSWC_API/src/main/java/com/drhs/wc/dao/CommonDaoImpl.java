package com.drhs.wc.dao;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.drhs.wc.entity.AppointmentDateConfigEntity;
import com.drhs.wc.repository.CommonRepository;

@Service
public class CommonDaoImpl implements CommonDAO{

	@Autowired
	private CommonRepository commonRepository;

	@Override
	public String getDateType(LocalDate apptDate) {
		return commonRepository.getDateType(apptDate);
	}

	@Override
	public Integer getMaxTimeSlot() {
		
		return commonRepository.getMaxTimeSlot();
	}

	@Override
	public AppointmentDateConfigEntity blockAppointmentDate(AppointmentDateConfigEntity appointmentDateConfigEntity) {
		return commonRepository.saveAndFlush(appointmentDateConfigEntity);
	}

	@Override
	public List<AppointmentDateConfigEntity> getAllBlockedAppointmentDate() {
		return commonRepository.findAll();

	}

}
