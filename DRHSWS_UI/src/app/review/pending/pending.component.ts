import { Component, OnInit, DoCheck } from '@angular/core';
import { Appointment } from 'src/app/signup/appointment.model';
import { ReviewService } from '../review.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { NgForm, EmailValidator } from '@angular/forms';


@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class PendingComponent implements OnInit{
  //Review object contains same columns as appointment
  reviewsPending: Appointment[];
  expandedElement: Appointment | null;
  columnsToDisplay = ['Date', 'Lunch', 'Student', 'Grade', 'Review'];
  displayedColumns = ['Date', 'Lunch', 'Student', 'Grade', 'Review'];
  review: string = '';
  newReview: Appointment;
  submitted = false;
  write=false;
  email = {
    emailTo: '',
    emailSubject: '',
    emailBody: ''
  }

  constructor(private reviewService: ReviewService) { }

  ngOnInit() {
    this.getPendingReviews();
    // if(this.submitted=true){
    //   this.getPendingReviews();
    // }
  }

    //Captures the form data
    onSubmit(form: NgForm) {
      this.newReview.review = form.value.review;
      this.submitted = true;
      console.log(this.newReview);
      this.write=false;
      this.addNewReview(this.newReview)
    }

    //on submit click
    onClick(index: number){
      console.log(index)
      this.newReview = this.reviewsPending[index];
    }

    //get all appointments
    getPendingReviews(){
      this.reviewService.getPendingReviews()
        .subscribe((data: Appointment[]) =>{
          console.log(data)
          this.reviewsPending = data;
          console.log(this.reviewsPending)
        })
    }

    //add review
    addNewReview(newReview){
      this.reviewService.addReview(newReview).subscribe((data)=>{
        this.getPendingReviews()
        this.email.emailTo = this.newReview.email;
        this.email.emailSubject = 'DRHS Review';
        this.email.emailBody = this.newReview.review;
        console.log(this.email);
        this.sendEmail(this.email)
      });
    }

    sendEmail(email){
      this.reviewService.emailReview(email).subscribe((data)=>{
        console.log('Emailed')
      })
    }
}
