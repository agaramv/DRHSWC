package com.drhs.wc.repository;

import java.time.LocalDate;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.drhs.wc.entity.AppointmentDateConfigEntity;


@Repository 
public interface CommonRepository extends JpaRepository<AppointmentDateConfigEntity, LocalDate>{

	//Check if there is an appt with a date
	@Query(value = "select trim(date_type) from r_appt_date_config where appt_date=:apptDate",nativeQuery = true)
	String getDateType(@Param("apptDate") LocalDate apptDate);
	
	//Get maximum time slot from the application config table
	@Query(value = "SELECT value FROM r_appl_config where Code = 'TS' and Code_type = 'MAX';",nativeQuery = true)
	Integer getMaxTimeSlot();

}
