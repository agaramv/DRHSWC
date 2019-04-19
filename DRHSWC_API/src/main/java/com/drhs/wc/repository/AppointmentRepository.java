package com.drhs.wc.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.drhs.wc.entity.AppointmentEntity;
import com.drhs.wc.param.AppointmentResponseAll;
import com.drhs.wc.entity.AppointmentEntityKey;


@Repository 
public interface AppointmentRepository extends JpaRepository<AppointmentEntity, AppointmentEntityKey> {

	//Get appointment by Date
	@Query(value = "select * from appointment where appt_date=:apptDate",nativeQuery = true)
	List<AppointmentEntity> getAppointmentsByDate(@Param("apptDate") LocalDate apptDate);

	//get count of appointment by date and lunch type
	@Query(value = "select count(1) from appointment where appt_date=:apptDate and lunch_Type = :lunchType",nativeQuery = true)
	Integer apptCountByDateLunchType(@Param("apptDate") LocalDate apptDate, @Param("lunchType") String lunchType);

	
}
