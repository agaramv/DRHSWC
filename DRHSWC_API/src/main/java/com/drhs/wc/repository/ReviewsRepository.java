package com.drhs.wc.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.drhs.wc.entity.ReviewsEntity;

@Repository
public interface ReviewsRepository extends JpaRepository<ReviewsEntity, String>{

}
