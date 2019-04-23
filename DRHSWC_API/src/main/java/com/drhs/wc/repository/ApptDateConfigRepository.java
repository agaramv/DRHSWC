package com.drhs.wc.repository;

import java.time.LocalDate;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.drhs.wc.entity.AppointmentDateConfigEntity;

public interface ApptDateConfigRepository {

	//Check if there is an appt with a date
	@Query(value = "select * from r_appt_date_config where appt_date=:apptDate",nativeQuery = true)
	AppointmentDateConfigEntity apptCountByDateLunchType(@Param("apptDate") LocalDate apptDate);

}
