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

	@Query(value = "select  from appointment where appt_date=:apptDate",nativeQuery = true)
	List<AppointmentResponseAll> getAppointmentsByDate(@Param("apptDate") LocalDate apptDate);
	
	//

	//Integer countByDate(LocalDate date);
	
	
	 
	
	
}
