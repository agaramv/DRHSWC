import { ApptInfo } from './apptInfo.model';

export class AppointmentUpcPst{
    appointmentEntityKey: any[];
    firstName: string;
    lastName: string;
    grade: string;
    teacher: string;
    topic: string;

    constructor(appointmentEntityKey: any[],firstName: string, lastName: string, grade: string, teacher: string, topic: string ){
        this.appointmentEntityKey = appointmentEntityKey;
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = grade;
        this.teacher = teacher;
        this.topic = topic;
    }
}