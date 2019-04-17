export class Appointment{
    date: string;
    type: string;
    slot: string;
    firstName: string;
    lastName: string;
    grade: number;
    teacher: string;
    topic: string;

    constructor(date: string, type:string, slot:string, firstName:string, lastName:string, grade: number, teacher: string, topic: string){
        this.date = date;
        this.type = type;
        this.slot = slot;
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = grade;
        this.teacher = teacher;
        this.topic = topic;
    }
}