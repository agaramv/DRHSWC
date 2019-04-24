package com.drhs.wc.dao;

import java.time.LocalDate;

import com.drhs.wc.entity.AppointmentDateConfigEntity;

public interface AppointmentReserveDateDao {

	//Check if date is reserved/disabled
	public AppointmentDateConfigEntity getAppointmentByDate(LocalDate apptDate);
}
