package com.drhs.wc.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.drhs.wc.entity.AppointmentEntity;
import com.drhs.wc.entity.ConsultantEntity;

@Repository 
public interface AppointmentRepository extends JpaRepository<AppointmentEntity, String> {

}
