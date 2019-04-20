export class Appointment{
    apptDate: string;
    lunchType: string;
    firstName: string;
    lastName: string;
    grade: number;
    teacher: string;
    topic: string;

    constructor(apptDate: string, lunchType: string, firstname: string, lastname: string, grade: number, teacher: string, topic: string){
        this.apptDate = apptDate;
        this.lunchType = lunchType;
        this.firstName = firstname;
        this.lastName = lastname;
        this.grade = grade;
        this.teacher = teacher;
        this.topic = topic;
    }
}