package com.drhs.wc.entity;

import java.time.LocalDate;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="appointment")
public class AppointmentEntity {
	
	@Id
	@Column(name="appt_date")
	private LocalDate date;
	
	@Column(name="lunch_type")
	private String lunchtype;
	
	@Column(name="slot")
	private int slot;
	
	@Column(name="student_first_name")
	private String firstName;
	
	@Column(name="student_last_name")
	private String lastName;
	
	@Column(name="student_grade")
	private int grade;
	
	@Column(name="student_teacher")
	private String teacher;
	
	@Column(name="student_topic")
	private int topic;

	public AppointmentEntity() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @param date
	 * @param lunchtype
	 * @param slot
	 * @param firstName
	 * @param lastName
	 * @param grade
	 * @param teacher
	 * @param topic
	 */
	public AppointmentEntity(LocalDate date, String lunchtype, int slot, String firstName, String lastName, int grade,
			String teacher, int topic) {
		super();
		this.date = date;
		this.lunchtype = lunchtype;
		this.slot = slot;
		this.firstName = firstName;
		this.lastName = lastName;
		this.grade = grade;
		this.teacher = teacher;
		this.topic = topic;
	}

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}

	public String getLunchtype() {
		return lunchtype;
	}

	public void setLunchtype(String lunchtype) {
		this.lunchtype = lunchtype;
	}

	public int getSlot() {
		return slot;
	}

	public void setSlot(int slot) {
		this.slot = slot;
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

	public int getGrade() {
		return grade;
	}

	public void setGrade(int grade) {
		this.grade = grade;
	}

	public String getTeacher() {
		return teacher;
	}

	public void setTeacher(String teacher) {
		this.teacher = teacher;
	}

	public int getTopic() {
		return topic;
	}

	public void setTopic(int topic) {
		this.topic = topic;
	}


	
}
