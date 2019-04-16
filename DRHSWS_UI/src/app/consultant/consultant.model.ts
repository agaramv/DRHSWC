export class Consultant{
    consultant_id: number;
    first: string;
    last: string;
    grade: number;
    email: string;
    emailSec: string;
    active_inactive: string;

    constructor(consultant_id: number, first: string, grade: number, last: string, email: string, emailSec: string, active_inactive: string){
        this.consultant_id = consultant_id;
        this.first = first;
        this.last = last;
        this.grade = grade;
        this.email = email;
        this.emailSec = emailSec;
        this.active_inactive = active_inactive;
    }
}