package com.drhs.wc.service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.Month;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.drhs.wc.dao.AppointmentDao;
import com.drhs.wc.entity.AppointmentEntity;
import com.drhs.wc.entity.AppointmentEntityKey;
import com.drhs.wc.param.AppointmentResponseSchedule;
import com.drhs.wc.param.AppointmentResponseAdd_Update;
import com.drhs.wc.param.AppointmentResponseAll;

@Service
public class AppointmentServiceImpl implements AppointmentService{

	@Autowired
	private AppointmentDao appointmentDao;

	
	//**********************************
	// Build Appointment Response object
	// This is needed to send a flat JSON object to the client
	// since the appointment entity has a embedded composite key. 
	//**********************************
	
	
	private List<AppointmentResponseAll> buildAppointmentReponse(List<AppointmentEntity> appointmentEntity){
		
		
		List<AppointmentResponseAll> appointmentResponseAll = new ArrayList<AppointmentResponseAll>();
	    
		//Build a flat Jason object to send to client (avoid sending composite jason object to client)
		appointmentResponseAll = appointmentEntity.stream().map(
				appointment -> new AppointmentResponseAll(
						appointment.getAppointmentEntityKey().getApptDate(),
						appointment.getAppointmentEntityKey().getLunchType(),
						appointment.getAppointmentEntityKey().getTimeSlot(),
						appointment.getFirstName(),
						appointment.getLastName(),
						appointment.getGrade(),
						appointment.getTeacher(),
						appointment.getTopic(),
						appointment.getConsultant_id(),
						appointment.getReview(),
						appointment.getReviewDate(),
						appointment.getCreateTimestamp()
						)
				).collect(Collectors.toList());
		
		return appointmentResponseAll;
		
		
	}
	
	
	//***********************************
	// 			Add Appointment
	//***********************************
		@Override
		public AppointmentEntity addAppointments(AppointmentResponseAdd_Update appointmentResponseAdd) {
			//Built primary key from response
			AppointmentEntityKey appointmentEntityKey = new AppointmentEntityKey(
					appointmentResponseAdd.getApptDate(),
					appointmentResponseAdd.getLunchType(),
					appointmentDao.apptCountByDateLunchType(
							appointmentResponseAdd.getApptDate(), 
							appointmentResponseAdd.getLunchType()
							)+1
					);
			//Built entity using key and other response fields
			AppointmentEntity appointmentEntity = new AppointmentEntity(
					appointmentEntityKey,
					appointmentResponseAdd.getFirstName(),
					appointmentResponseAdd.getLastName(),
					appointmentResponseAdd.getGrade(),
					appointmentResponseAdd.getTeacher(),
					appointmentResponseAdd.getTopic(),
					null,
					null,
					null,
					LocalDateTime.now()
					);
			
			return appointmentDao.addAppointment(appointmentEntity);
		}
		
		//***********************************
		// 			Add Review
		//***********************************
			@Override
			public AppointmentEntity addReview(AppointmentResponseAdd_Update appointmentResponseAdd) {
				//Built primary key from response
				AppointmentEntityKey appointmentEntityKey = new AppointmentEntityKey(
						appointmentResponseAdd.getApptDate(),
						appointmentResponseAdd.getLunchType(),
						appointmentResponseAdd.getTimeSlot()
						);
				//Built entity using key and other response fields
				AppointmentEntity appointmentEntity = new AppointmentEntity(
						appointmentEntityKey,
						appointmentResponseAdd.getFirstName(),
						appointmentResponseAdd.getLastName(),
						appointmentResponseAdd.getGrade(),
						appointmentResponseAdd.getTeacher(),
						appointmentResponseAdd.getTopic(),
						appointmentResponseAdd.getConsultant_id(),
						appointmentResponseAdd.getReview(),
						LocalDateTime.now(),
						appointmentResponseAdd.getCreateTimestamp()
						);
				
				return appointmentDao.addAppointment(appointmentEntity);
			}
		
	//**********************
	// Get All Appointments
	//**********************
	
	@Override
	public List<AppointmentResponseAll> getAllAppointments() {
		
		
		//retrieve data for all appointment
		List<AppointmentEntity> appointmentyEntity = appointmentDao.getAllAppointments();
		
		//build a flat jason response object  (avoid nested due to composite key) 
		return buildAppointmentReponse(appointmentyEntity);
		
	}
	 
	//**********************
	// Get All Appointments with Pending Reviews
	//**********************
	
	@Override
	public List<AppointmentResponseAll> getPendingReviews() {
		
		
		//retrieve data for all appointment
		List<AppointmentEntity> appointmentyEntity = appointmentDao.getPendingReviews();
		
		//build a flat jason response object  (avoid nested due to composite key) 
		return buildAppointmentReponse(appointmentyEntity);
		
	}
	
	//***********************************
	// Get Appointments for a given date
	//***********************************
	@Override
	public List<AppointmentResponseAll> getAppointmentsByDate(LocalDate apptDate) {
		
	    List<AppointmentEntity> appointmentEntity = new ArrayList<AppointmentEntity>();
		
		appointmentEntity = appointmentDao.getAppointmentsByDate(apptDate);
		
		//build a flat jason response object (avoid nested due to composite key) 
		return buildAppointmentReponse(appointmentEntity);
		
	}
	
	//***********************************
	// Get past appointments from a given date
	//***********************************
	@Override
	public List<AppointmentResponseAll> getPastAppointments(LocalDate apptDate) {

		
		//get system date
		LocalDate sysDate = LocalDate.now();
		
	    List<AppointmentEntity> appointmentEntity = new ArrayList<AppointmentEntity>();
	    
		//get past appointment
	    appointmentEntity = appointmentDao.getPastAppointments(sysDate);
	    
	  //build a flat (avoid nested due to composit key) jason response object 
	  	return buildAppointmentReponse(appointmentEntity);
	}

	//***********************************
	// Get upcoming appointments from a given date
	//***********************************
	@Override
	public List<AppointmentResponseAll> getUpcomingAppointments(LocalDate apptDate) {

		LocalDate sysDate =  LocalDate.now();
		
		List<AppointmentEntity> appointmentEntity =  appointmentDao.getUpcomingAppointments(sysDate);
		
		//build a flat jason response object 
	  	return buildAppointmentReponse(appointmentEntity);
	}
	
	//*************************************************************
	//Landing Page
	//Get Appointment schedule to make appointment
	//Will retrieve Tuesday and Wednesday dates for user to select 
	//*************************************************************
	
	@Override
	public List<AppointmentResponseSchedule> getAppointmentDays(LocalDate currDate) {
		
	
		List<AppointmentResponseSchedule> appointmentResponse =  new ArrayList<AppointmentResponseSchedule>();
				
		int totalApptSlots = 10;
		LocalDate sysDate;
		
		//Get System date 
		if (currDate != null) {
			sysDate = currDate;
		}else {
			sysDate = LocalDate.now();
		}
		

		System.out.println("System date : " + sysDate);
		
		//Initialize Appointment week date to system date
		LocalDate apptWeekDate = sysDate;
		
		//Get day number of the week for eg. 1 to 7, 1 being Monday
		int weekDayValue = sysDate.getDayOfWeek().getValue();
		System.out.println("System Value " + weekDayValue);
		
		//********************************************************
		//Derive Appointment Week. 
		//If the day of the week is greater than Wednesday then 
		//allow users to make appointments for the following week.
		//*********************************************************
		
		if (weekDayValue > 3) {
		    apptWeekDate = sysDate.plusWeeks(1);  //Add one Week
		    
		} else {
			apptWeekDate = sysDate;              //Same as current week
		}
		
		
		//***********************************************************
		//Derive Tuesday's date of the Appointment week.
		//************************************************************
		
		LocalDate dateTuesday = null;
		LocalDate dateWednesday = null;
		LocalDate dateTuesdayNextweek = null;
		LocalDate dateWednesdayNextweek = null;
		
		//Get the Day number of the appointment week eg. 1 to 7, 1 being Monday
		weekDayValue = apptWeekDate.getDayOfWeek().getValue();
		
		//Derive Tuesday's date
		if (weekDayValue <= 2 ) {
			//If the week day is Mondays or Tuesdays add days to get Tuesday
			dateTuesday = apptWeekDate.plusDays(2-weekDayValue);
			
		}else {
			//If the week day is Thursday to Sunday subtract days to get Tuesday
			dateTuesday = apptWeekDate.minusDays(weekDayValue - 2);
		}
		
		dateWednesday = dateTuesday.plusDays(1);            // set Wednesday date 
		dateTuesdayNextweek = dateTuesday.plusWeeks(1);     // set Tuesday date Next Week
		dateWednesdayNextweek = dateWednesday.plusWeeks(1); // set Wednesday date Next Week
	
		//************************	
		//*****  TUESDAY ********
		//************************
		
		//Set Values for Tuesday A Lunch
//		String apptForWeek = "CURRENTWEEK";
		String lunchType   = "A";
		Integer apptFilled     = appointmentDao.apptCountByDateLunchType(dateTuesday,lunchType);
		Integer apptOpen       = totalApptSlots - apptFilled;
		String apptDayName = dateTuesday.getDayOfWeek().name();
		Month apptMonth    = dateTuesday.getMonth();
		
		//Add to List for response for A-lunch
		appointmentResponse.add(new AppointmentResponseSchedule(dateTuesday,lunchType,apptFilled,apptOpen,apptMonth));	
		
		//Set Values for Tuesday B Lunch
		lunchType   = "B";
		apptFilled     = appointmentDao.apptCountByDateLunchType(dateTuesday,lunchType);
		apptOpen       = totalApptSlots - apptFilled;
		//Add to List for response for B-lunch
		appointmentResponse.add(new AppointmentResponseSchedule(dateTuesday,lunchType,apptFilled,apptOpen,apptMonth));

		
		//************************	
		//***** WEDNESDAY ********
		//************************
		
		//Set Values for Wednesday A Lunch
		lunchType  = "A";
		apptFilled    = appointmentDao.apptCountByDateLunchType(dateWednesday,lunchType);
		apptOpen      = totalApptSlots - apptFilled;
		apptDayName   = dateWednesday.getDayOfWeek().name();
		apptMonth     = dateWednesday.getMonth();
		
		//Add to List for response
		appointmentResponse.add(new AppointmentResponseSchedule(dateWednesday,lunchType,apptFilled,apptOpen,apptMonth));
		
		//Set Values for Wednesday A Lunch
		lunchType  = "B";
		apptFilled    = appointmentDao.apptCountByDateLunchType(dateWednesday,lunchType);
		apptOpen      = totalApptSlots - apptFilled;

		//Add to List for response
		appointmentResponse.add(new AppointmentResponseSchedule(dateWednesday,lunchType,apptFilled,apptOpen,apptMonth));	
		
		//******************************	
		//***** NEXT WEEK TUESDAY ******
		//******************************
		
		//Set Values for Tuesday A Lunch date Next Week
		lunchType     = "A";
		apptFilled    = appointmentDao.apptCountByDateLunchType(dateTuesdayNextweek, lunchType);
		apptOpen      = totalApptSlots - apptFilled;
		apptDayName   = dateTuesdayNextweek.getDayOfWeek().name();
		apptMonth     = dateTuesdayNextweek.getMonth();
		
		//Add to List for response
		appointmentResponse.add(new AppointmentResponseSchedule(dateTuesdayNextweek,lunchType,apptFilled,apptOpen,apptMonth));	
		
		//Set Values for Tuesday B Lunch date Next Week
		lunchType     = "B";
		apptFilled    = appointmentDao.apptCountByDateLunchType(dateTuesdayNextweek, lunchType);
		apptOpen      = totalApptSlots - apptFilled;
				
		//Add to List for response
		appointmentResponse.add(new AppointmentResponseSchedule(dateTuesdayNextweek,lunchType,apptFilled,apptOpen,apptMonth));	

		
		//******************************	
		//***** NEXT WEEK WEDNESDAY ******
		//******************************
		//Set Values for Tuesday A Lunch date Next Week
		lunchType     = "A";
		apptFilled    = appointmentDao.apptCountByDateLunchType(dateWednesdayNextweek, lunchType);
		apptOpen      = totalApptSlots - apptFilled;
		apptDayName   = dateWednesdayNextweek.getDayOfWeek().name();
		apptMonth     = dateWednesdayNextweek.getMonth();
		
		//Add to List for response
		appointmentResponse.add(new AppointmentResponseSchedule(dateWednesdayNextweek,lunchType,apptFilled,apptOpen,apptMonth));	
		
		//Set Values for Tuesday B Lunch date Next Week
		lunchType     = "B";
		apptFilled    = appointmentDao.apptCountByDateLunchType(dateWednesdayNextweek, lunchType);
		apptOpen      = totalApptSlots - apptFilled;
				
		//Add to List for response
		appointmentResponse.add(new AppointmentResponseSchedule(dateWednesdayNextweek,lunchType,apptFilled,apptOpen,apptMonth));	

		/*//Display for debugging  
		System.out.println(apptForWeek);
		System.out.println("Appt Month  " + apptMonth);
		System.out.println("Appt date   " + dateWednesdayNextweek);
		System.out.println("Appt Name   " + apptDayName);
		System.out.println("Appt Filled " + apptFilled);
		System.out.println("Appt Remain " + apptOpen );
		System.out.println();
		*/
		return appointmentResponse;
		//return null;
	}

	@Override
	public List<AppointmentResponseSchedule> countByAppointment() {
		// TODO Auto-generated method stub
		return null;
	}





	

	
	
	

}
