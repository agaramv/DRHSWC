export class ApptInfo{
    date: string;
    lunch: string;
    timeslot: number;

    constructor(date:string,lunch:string,timeslot:number){
        this.date =date;
        this.lunch = lunch;
        this.timeslot = timeslot;
    }
}