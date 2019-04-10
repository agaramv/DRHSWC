package com.drhs.wc.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="appointment")
public class AppointmentEntity {
	
	@Id
	@Column(name="date")
	private Date date;
	
	@Column(name="type")
	private String type;
	
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

	public AppointmentEntity(Date date, String type, int slot, String firstName, String lastName, int grade,
			String teacher, int topic) {
		super();
		this.date = date;
		this.type = type;
		this.slot = slot;
		this.firstName = firstName;
		this.lastName = lastName;
		this.grade = grade;
		this.teacher = teacher;
		this.topic = topic;
	}
	
	public Date getDate() {
		return date;
	}

	public String getType() {
		return type;
	}

	public int getSlot() {
		return slot;
	}

	public String getFirstName() {
		return firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public int getGrade() {
		return grade;
	}

	public String getTeacher() {
		return teacher;
	}

	public int getTopic() {
		return topic;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public void setType(String type) {
		this.type = type;
	}

	public void setSlot(int slot) {
		this.slot = slot;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public void setGrade(int grade) {
		this.grade = grade;
	}

	public void setTeacher(String teacher) {
		this.teacher = teacher;
	}

	public void setTopic(int topic) {
		this.topic = topic;
	}
	
	
}
