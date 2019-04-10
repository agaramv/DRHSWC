package com.drhs.wc.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.drhs.wc.dao.ReviewsDao;
import com.drhs.wc.entity.ReviewsEntity;

@Service
public class ReviewsServiceImpl implements ReviewsService{

	@Autowired
	ReviewsDao reviewsDao;
	
	@Override
	public List<ReviewsEntity> getAllReviews() {
		return reviewsDao.getAllReviews();
	}

	@Override
	public ReviewsEntity addNewReview(ReviewsEntity reviewEntity) {
		return reviewsDao.addNewReview(reviewEntity);
	}

}
