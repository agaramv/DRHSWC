package com.drhs.wc.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.drhs.wc.dao.AppointmentDao;
import com.drhs.wc.param.AppointmentResponse;
@Service
public class AppointmentServiceImpl implements AppointmentService{

	@Autowired
	private AppointmentDao appointmentDao;

	@Override
	public List<AppointmentResponse> countByAppointment() {

		try {
			AppointmentResponse AppointmentResponse = new AppointmentResponse();
			System.out.println(appointmentDao.findByDate(LocalDate.now().plusDays(4)));
			
		}catch(Exception e) {
			System.out.println(e);
		}
		return null;
	}
	
	

}
