package com.drhs.wc.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.drhs.wc.entity.ConsultantEntity;

@Repository
public interface ConsultantRepository extends JpaRepository<ConsultantEntity, Integer>{
    /* set consultant inactive */
	@Modifying()
	@Query(value="Update r_consultants Set active='I' Where consultant_id=:id", nativeQuery=true)
	int changeToInactive(@Param("id") Integer id);

	ConsultantEntity findByEmail(String email);
	
	@Modifying()
	@Query(value="Update r_consultants Set password=:password where email=:email", nativeQuery=true)
	void changePassword(@Param("password") String password, @Param("email") String email);
	
	/*@Query(value="Delete From r_consultants Where consultant_id=21", nativeQuery=true)
	ConsultantEntity deleteConsultant(@Param("id") int id);
	*/
	
}
