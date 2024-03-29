package com.drhs.wc.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.drhs.wc.entity.ReviewsEntity;
import com.drhs.wc.repository.ReviewsRepository;

@Service
public class ReviewsDaoImpl implements ReviewsDao{

	@Autowired
	ReviewsRepository reviewsRepo;
	
//	@Autowired
//	ReviewsPastRepository reviewsPastRepo;
	
	@Override
	public List<ReviewsEntity> getAllReviews() {
		List<ReviewsEntity> reviewsEntity = reviewsRepo.findAll();
		return reviewsEntity;
	}

	@Override
	public ReviewsEntity addNewReview(ReviewsEntity reviewEntity) {
		ReviewsEntity newEntity = reviewsRepo.saveAndFlush(reviewEntity);
		return newEntity;
	}

	@Override
	public List<ReviewsEntity> getPastReviews() {
		return reviewsRepo.getPastReviews();
	}

	@Override
	public List<ReviewsEntity> getUpcomingReviews() {
		return reviewsRepo.getUpcomingReviews();
	}
}


