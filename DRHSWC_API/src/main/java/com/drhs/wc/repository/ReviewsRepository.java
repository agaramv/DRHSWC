package com.drhs.wc.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.drhs.wc.entity.AppointmentEntity;
import com.drhs.wc.entity.ReviewsEntity;

@Repository
public interface ReviewsRepository extends JpaRepository<ReviewsEntity, String>{
	

	//Get past reviews
	@Query(value = "SELECT concat(a.student_last_name,\", \", a.student_first_name) Student a.appt_date,\r\n" + 
			"a.lunch_type,\r\n" + 
			"r.review,\r\n" + 
			"concat(c.last_name,\", \",c.first_name) Consultant\r\n" + 
			"FROM appointment a, reviews r, r_consultants c\r\n" + 
			"Where a.appt_date = r.appt_date\r\n" + 
			"  and a.lunch_type = r.lunch_type\r\n" + 
			"  and a.time_slot = r.time_slot\r\n" + 
			"  and r.consultant_id = c.consultant_id",nativeQuery = true)
	List<ReviewsEntity> getPastReviews();
	
	//Get Upcoming reviews
	@Query(value = "SELECT concat(a.student_last_name,\", \", a.student_first_name) Student, a.appt_date, a.lunch_type FROM appointment a where not EXISTS (select * from reviews r Where a.appt_date = r.appt_date and a.lunch_type = r.lunch_type and a.time_slot = r.time_slot)",nativeQuery = true)
	List<ReviewsEntity> getUpcomingReviews();


}
