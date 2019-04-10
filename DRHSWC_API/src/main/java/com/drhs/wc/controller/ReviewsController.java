package com.drhs.wc.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.drhs.wc.entity.ReviewsEntity;
import com.drhs.wc.service.ReviewsService;

@RestController
public class ReviewsController {

	@Autowired
	ReviewsService reviewsService;
	
	@GetMapping("/reviews/all")
	public List<ReviewsEntity> getAllReviews(){
		return reviewsService.getAllReviews();
	}
	
	@PostMapping("/reviews/add")
	public ReviewsEntity addNewReview(@Valid @RequestBody ReviewsEntity reviewEntity){
		ReviewsEntity re = reviewsService.addNewReview(reviewEntity);
		return re;
	}
}
