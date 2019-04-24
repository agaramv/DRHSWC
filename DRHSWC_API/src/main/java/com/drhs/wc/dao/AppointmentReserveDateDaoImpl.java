package com.drhs.wc.dao;

import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.drhs.wc.entity.AppointmentDateConfigEntity;
import com.drhs.wc.repository.ApptDateConfigRepository;

@Service
public class AppointmentReserveDateDaoImpl implements AppointmentReserveDateDao{

	@Autowired
	private ApptDateConfigRepository apptDateConfigRepository;

	@Override
	public AppointmentDateConfigEntity getAppointmentByDate(LocalDate apptDate) {
		return apptDateConfigRepository.apptCountByDateLunchType(apptDate);
	}

}
