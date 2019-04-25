import { ApptInfo } from './apptInfo.model';

export class AppointmentUpcPst{
    date: string;
    lunch: string;
    timeslot: string;
    firstName: string;
    lastName: string;
    grade: string;
    email: string
    teacher: string;
    topic: string;
    fileLink: string;
    consultant_id: number;
    review: string;
    reviewDate: string;
    createTimestamp:string;

    constructor(date: string, lunch: string, timeslot: string, firstName: string, lastName: string, email:string, grade: string, teacher: string, topic: string, fileLink: string,consultant_id: number, review: string, reviewDate: string, createTimestamp:string){
        this.date = date;
        this.lunch = lunch;
        this.timeslot = timeslot;
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = grade;
        this.email = email;
        this.teacher = teacher;
        this.topic = topic;
        this.fileLink = fileLink;
        this.consultant_id = consultant_id;
        this.review = review;
        this.reviewDate = reviewDate;
        this.createTimestamp = createTimestamp;
    }
}