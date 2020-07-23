import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
course = "Teaniket test";

  constructor() { }

  ngOnInit(): void {
  }

  // onCustomAction(event) { 
  //   this.Router.navigate(['/element'])
  //     .then(success => console.log('navigation success?' , success))
  //     .catch(console.error); 
  // }

}
