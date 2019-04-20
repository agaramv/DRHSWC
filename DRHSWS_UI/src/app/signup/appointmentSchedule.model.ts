export class AppointmentSchedule{
    date: string;
    lunch: string;
    filled: number;
    open: number;
    dayName: string;
    month: string;

    constructor(date: string, lunch: string, filled: number, open: number, dayName: string, month: string){
        this.date = date;
        this.lunch = lunch;
        this.filled = filled;
        this.open = open;
        this.dayName = dayName;
        this.month = month;
    }
}