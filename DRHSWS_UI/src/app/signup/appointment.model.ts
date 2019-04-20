export class Appointment{
    apptDate: string;
    lunch_type: string;
    firstName: string;
    lastName: string;
    grade: number;
    teacher: string;
    topic: string;

    constructor(apptDate: string, lunch_type: string, firstname: string, lastname: string, grade: number, teacher: string, topic: string){
        this.apptDate = apptDate;
        this.lunch_type = lunch_type;
        this.firstName = firstname;
        this.lastName = lastname;
        this.grade = grade;
        this.teacher = teacher;
        this.topic = topic;
    }
}