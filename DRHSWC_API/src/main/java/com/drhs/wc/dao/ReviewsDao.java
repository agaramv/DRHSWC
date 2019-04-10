package com.drhs.wc.dao;

import java.util.List;

import com.drhs.wc.entity.ReviewsEntity;

public interface ReviewsDao {

	//Get all reviews
	public List<ReviewsEntity> getAllReviews();

	//Get add review
	public ReviewsEntity addNewReview(ReviewsEntity reviewEntity);
}
