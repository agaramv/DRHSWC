package com.drhs.wc.repository;

import java.time.LocalDate;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.drhs.wc.entity.AppointmentEntity;
import com.drhs.wc.entity.AppointmentEntityKey;
import com.drhs.wc.entity.ConsultantEntity;

@Repository 
public interface AppointmentRepository extends JpaRepository<AppointmentEntity, AppointmentEntityKey> {

	@Query(value = "select count(1) from appointment where appt_date=to_date(:apptDate,'YYYY-MM-DD')",nativeQuery = true)
	Integer getStudentByEmail(@Param("apptDate") LocalDate apptDate);
	
	//

	//Integer countByDate(LocalDate date);
	
	
	 
	
	
}
