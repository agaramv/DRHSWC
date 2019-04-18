package com.drhs.wc.service;

import java.time.LocalDate;
import java.time.Month;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.drhs.wc.dao.AppointmentDao;
import com.drhs.wc.entity.AppointmentEntity;
import com.drhs.wc.param.AppointmentResponse;
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
	
	
	public List<AppointmentResponseAll> buildAppointmentReponse(AppointmentEntity appointmentEntity){
		
		
		
		List<AppointmentResponseAll> appointmentResponseAll = new ArrayList<AppointmentResponseAll>();
	    
		
		/*appointmentResponseAll = appointmentEntity.stream().map(
				appointment -> new AppointmentResponseAll(
						appointment.getAppointmentEntityKey().getApptDate(),
						appointment.getAppointmentEntityKey().getLunchType(),
						appointment.getAppointmentEntityKey().getTimeSlot(),
						appointment.getFirstName(),
						appointment.getLastName(),
						appointment.getGrade(),
						appointment.getTeacher(),
						appointment.getTopic()
						)
				).collect(Collectors.toList());*/
		
		return appointmentResponseAll;
		
		
	}
	
	//**********************
	// Get All Appointments
	//**********************
	
	@Override
	public List<AppointmentResponseAll> getAllAppointments() {
		
		List<AppointmentResponseAll> appointmentResponseAll = new ArrayList<AppointmentResponseAll>();
		
		List<AppointmentEntity> appointmentyEntity = appointmentDao.getAllAppointments();
		
		appointmentResponseAll = appointmentyEntity.stream().map(
				appointment -> new AppointmentResponseAll(
						appointment.getAppointmentEntityKey().getApptDate(),
						appointment.getAppointmentEntityKey().getLunchType(),
						appointment.getAppointmentEntityKey().getTimeSlot(),
						appointment.getFirstName(),
						appointment.getLastName(),
						appointment.getGrade(),
						appointment.getTeacher(),
						appointment.getTopic()
						)
				).collect(Collectors.toList());
		
		return appointmentResponseAll;
	}
	
	//***********************************
	// Get Appointments for a given date
	//***********************************
	@Override
	public List<AppointmentResponseAll> getAppointmentsByDate(LocalDate apptDate) {
		
		List<AppointmentResponseAll> appointmentResponseAll = new ArrayList<AppointmentResponseAll>();
		
	    List<AppointmentEntity> appointmentEntity = new ArrayList<AppointmentEntity>();
		
		appointmentEntity = appointmentDao.getAppointmentsByDate(apptDate);
		
		//Flten the response 
		appointmentResponseAll = appointmentEntity.stream().map(
				appointment -> new AppointmentResponseAll(
						appointment.getAppointmentEntityKey().getApptDate(),
						appointment.getAppointmentEntityKey().getLunchType(),
						appointment.getAppointmentEntityKey().getTimeSlot(),
						appointment.getFirstName(),
						appointment.getLastName(),
						appointment.getGrade(),
						appointment.getTeacher(),
						appointment.getTopic()
						)
				).collect(Collectors.toList());
		
		return appointmentResponseAll;
		
	}
	
	//************************************
	// Count appointments made for a given date
	//************************************
	
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

	
	//*************************************************************
	//Landing Page
	//Get Appointment schedule to make appointment
	//Will retrieve Tuesday and Wednesday dates for user to select 
	//*************************************************************
	
	@Override
	public List<AppointmentResponse> getAppointmentDays(LocalDate currDate) {
		
	
		List<AppointmentResponse> appointmentResponse =  new ArrayList<AppointmentResponse>();
				
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
		
		//Set Values for Tuesday
		String apptForWeek = "CURRENTWEEK";
		int apptFilled     = appointmentDao.findByDate(dateTuesday);
		int apptOpen       = totalApptSlots - apptFilled;
		String apptDayName = dateTuesday.getDayOfWeek().name();
		Month apptMonth    = dateTuesday.getMonth();
		
		//Add to List for response
		appointmentResponse.add(new AppointmentResponse(apptForWeek,
                											dateTuesday,
                											apptDayName,
                											apptMonth,
                											apptFilled,
                											apptOpen
                											));
		
		//************************	
		//***** WEDNESDAY ********
		//************************
		
		//Set Values for Wednesday 
		apptForWeek   = "CURRENTWEEK";
		apptFilled    = appointmentDao.findByDate(dateWednesday);
		apptOpen      = totalApptSlots - apptFilled;
		apptDayName   = dateWednesday.getDayOfWeek().name();
		apptMonth     = dateWednesday.getMonth();
		
		//Add to List for response
		appointmentResponse.add(new AppointmentResponse(apptForWeek,
														dateWednesday,
														apptDayName,
														apptMonth,
														apptFilled,
														apptOpen
														));
		
		//******************************	
		//***** NEXT WEEK TUESDAY ******
		//******************************
		
		//Set Values for Tuesday date Next Week
		apptForWeek   = "NEXTWEEK";
		apptFilled    = appointmentDao.findByDate(dateTuesdayNextweek);
		apptOpen      = totalApptSlots - apptFilled;
		apptDayName   = dateTuesdayNextweek.getDayOfWeek().name();
		apptMonth     = dateTuesdayNextweek.getMonth();
		
		//Add to List for response
		appointmentResponse.add(new AppointmentResponse(apptForWeek,
														dateTuesdayNextweek,
														apptDayName,
														apptMonth,
														apptFilled,
														apptOpen
														));
		
		//******************************	
		//***** NEXT WEEK WEDNESDAY ******
		//******************************
		//Set Values for Tuesday date Next Week
		apptForWeek   = "NEXTWEEK";
		apptFilled    = appointmentDao.findByDate(dateWednesdayNextweek);
		apptOpen      = totalApptSlots - apptFilled;
		apptDayName   = dateWednesdayNextweek.getDayOfWeek().name();
		apptMonth     = dateWednesdayNextweek.getMonth();
		
		//Add to List for response
		appointmentResponse.add(new AppointmentResponse(apptForWeek,
														dateWednesdayNextweek,
														apptDayName,
														apptMonth,
														apptFilled,
														apptOpen
														));
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


	

	
	
	

}
