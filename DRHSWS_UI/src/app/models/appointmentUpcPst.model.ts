export class AppointmentUpcPst{
    apptInfo: any[];
    firstName: string;
    lastName: string;
    grade: string;
    teacher: string;
    topic: string;

    constructor(apptInfo: any[],firstName: string, lastName: string, grade: string, teacher: string, topic: string ){
        this.apptInfo = apptInfo;
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = grade;
        this.teacher = teacher;
        this.topic = topic;
    }
}