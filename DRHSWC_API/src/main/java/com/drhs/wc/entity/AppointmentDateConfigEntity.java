package com.drhs.wc.entity;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="r_appt_date_config")
public class AppointmentDateConfigEntity {

	@Id
	@Column(name="appt_date")
	private LocalDate appt_date;
	
	@Column(name="Date_type")
	private String dateType;
	
	@Column(name="Description")
	private String description;

	
	public AppointmentDateConfigEntity() {
		super();
		// TODO Auto-generated constructor stub
	}

	public AppointmentDateConfigEntity(LocalDate appt_date, String dateType, String description) {
		super();
		this.appt_date = appt_date;
		this.dateType = dateType;
		this.description = description;
	}

	public LocalDate getAppt_date() {
		return appt_date;
	}

	public void setAppt_date(LocalDate appt_date) {
		this.appt_date = appt_date;
	}

	public String getDateType() {
		return dateType;
	}

	public void setDateType(String dateType) {
		this.dateType = dateType;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
	
}
