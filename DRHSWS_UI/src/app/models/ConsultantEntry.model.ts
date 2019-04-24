export class ConsultantEntry{
    firstName: string;
    lastName: string;
    firstNameS: string;
    lastNameS: string;
    topic: string;
    teacher: string;
    feedback1: string;
    feedback2: string;

    constructor(firstName: string, lastName: string, firstNameS: string, lastNameS: string, topic: string, teacher: string, feedback1: string, feedback2: string){
        this.firstName = firstName;
        this.lastName = lastName;
        this.firstNameS = firstNameS;
        this.lastNameS = lastNameS;
        this.topic = topic;
        this.teacher = teacher;
        this.feedback1 = feedback1;
        this.feedback2 = feedback2;
    }
}