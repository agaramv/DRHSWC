import { Component, OnInit } from '@angular/core';

export interface Consultant{
  first: string;
  last: string;
  email: string;
  file: string;
}

const consultants: Consultant[] = [
  {first: 'Vidur', last: 'Agaram', email:'stuff@gmail.com', file:'stuff'},
  {first: 'Thomas', last: 'Castillo', email:'stuff@gmail.com', file: 'buff'},
  {first: 'Mike', last: 'Krause', email:'stuff@gmail.com', file:'huff'},
  {first: 'Naomi', last: 'Nickels', email:'stuff@gmail.com', file:'puff'},
]

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.scss']
})
export class AssignmentsComponent implements OnInit {

  displayedColumns: string[] = ['name', 'email', 'file'];
  data: Consultant[] = consultants;

  constructor() { }

  ngOnInit() {
  }

}
