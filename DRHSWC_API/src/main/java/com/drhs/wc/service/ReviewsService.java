package com.drhs.wc.service;

import java.util.List;

import com.drhs.wc.entity.ReviewsEntity;

public interface ReviewsService {

	public List<ReviewsEntity> getAllReviews();
	
	public ReviewsEntity addNewReview(ReviewsEntity reviewEntity);
	
	public List<ReviewsEntity> getPastReviews();
	
	public List<ReviewsEntity> getUpcomingReviews();

}
