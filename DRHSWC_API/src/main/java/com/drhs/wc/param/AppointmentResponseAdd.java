package com.drhs.wc.param;

import java.time.LocalDate;
import java.time.Month;

public class AppointmentResponseAdd {

	
	private LocalDate apptDate;
	private String lunchType;
	private Integer timeSlot;
	private String firstName;
	private String lastName;
	private Integer grade;
	private String teacher;
	private String topic;

	/**
	 * 
	 */
	public AppointmentResponseAdd() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @param apptDate
	 * @param lunchType
	 * @param timeSlot
	 * @param firstName
	 * @param lastName
	 * @param grade
	 * @param teacher
	 * @param topic
	 */
	public AppointmentResponseAdd(LocalDate apptDate, String lunchType, Integer timeSlot, String firstName,
			String lastName, Integer grade, String teacher, String topic) {
		super();
		this.apptDate = apptDate;
		this.lunchType = lunchType;
		this.timeSlot = timeSlot;
		this.firstName = firstName;
		this.lastName = lastName;
		this.grade = grade;
		this.teacher = teacher;
		this.topic = topic;
	}

	public LocalDate getApptDate() {
		return apptDate;
	}

	public void setApptDate(LocalDate apptDate) {
		this.apptDate = apptDate;
	}

	public String getLunchType() {
		return lunchType;
	}

	public void setLunchType(String lunchType) {
		this.lunchType = lunchType;
	}

	public Integer getTimeSlot() {
		return timeSlot;
	}

	public void setTimeSlot(Integer timeSlot) {
		this.timeSlot = timeSlot;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public Integer getGrade() {
		return grade;
	}

	public void setGrade(Integer grade) {
		this.grade = grade;
	}

	public String getTeacher() {
		return teacher;
	}

	public void setTeacher(String teacher) {
		this.teacher = teacher;
	}

	public String getTopic() {
		return topic;
	}

	public void setTopic(String topic) {
		this.topic = topic;
	}


}