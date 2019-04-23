package com.drhs.wc.dao;

import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;

import com.drhs.wc.entity.AppointmentDateConfigEntity;
import com.drhs.wc.repository.ApptDateConfigRepository;

public class AppointmentDateConfigDaoImpl implements AppointmentDateConfigDao{

	@Autowired
	private ApptDateConfigRepository apptDateConfigRepository;

	@Override
	public AppointmentDateConfigEntity getAppointmentByDate(LocalDate apptDate) {
		return apptDateConfigRepository.apptCountByDateLunchType(apptDate);
	}

}
