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
import com.drhs.wc.entity.ReviewsEntity;


@Repository 
public interface AppointmentRepository extends JpaRepository<AppointmentEntity, AppointmentEntityKey> {

	//Get appointment by Date
	@Query(value = "select * from appointment where appt_date=:apptDate",nativeQuery = true)
	List<AppointmentEntity> getAppointmentsByDate(@Param("apptDate") LocalDate apptDate);
	
	//Get appointment by Date
	@Query(value = "select * from appointment where appt_date>=:apptDateF and appt_date<=:apptDateT",nativeQuery = true)
	List<AppointmentEntity> getAppointmentsByDateRange(@Param("apptDateF") LocalDate apptDateF, @Param("apptDateT") LocalDate apptDateT);

	//get count of appointment by date and lunch type
	@Query(value = "select count(1) from appointment where appt_date=:apptDate and lunch_Type = :lunchType",nativeQuery = true)
	Integer apptCountByDateLunchType(@Param("apptDate") LocalDate apptDate, @Param("lunchType") String lunchType);
	
	//Get past appointments
	@Query(value = "select * from appointment where appt_date <:apptDate",nativeQuery = true)
	List<AppointmentEntity> getPastAppointments(@Param("apptDate") LocalDate apptDate);

	//get upcoming appointments
	@Query(value = "select * from appointment where appt_date >=:apptDate",nativeQuery = true)
	List<AppointmentEntity> getUpcomingAppointments(@Param("apptDate") LocalDate apptDate);
	
	//Get All Appointments with pending reviews
	@Query(value = "SELECT * FROM appointment WHERE review IS NULL OR review = ''",nativeQuery = true)
	List<AppointmentEntity> getPendingReviews();
	
	//Get date range Appointments with pending reviews
	@Query(value = "SELECT * FROM appointment WHERE appt_date BETWEEN :apptDateLow AND :apptDateHigh",nativeQuery = true)
	List<AppointmentEntity> getAllReviewsByDateRange(@Param("apptDate") LocalDate apptDateLow, @Param("apptDate") LocalDate apptDateHigh);
	
}
